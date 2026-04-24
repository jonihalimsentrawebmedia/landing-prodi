'use client'

import { UseGetNews } from '@/app/homepage/hooks'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const NewsHomeSectionV9 = () => {
  const { news } = UseGetNews({
    page: '1',
    limit: '4',
  })

  const FirstNews = news[0]
  const SecondNews = news.slice(1, 4)

  return (
    <>
      <div className="py-5 bg-primary/10 dark:bg-gray-800">
        <div className="container-sm py-5">
          <h2 className="lg:text-3xl font-semibold text-primary text-start border-b-[3px] border-yellow-500 pb-2.5 w-fit">
            Berita Program Studi
          </h2>

          <div className={'block lg:hidden space-y-4 mt-5'}>
            <Link href={`/information/news/${FirstNews?.slug}`}>
              <div className="relative w-full h-full">
                <div className="absolute space-y-2.5 p-2.5 top-0 left-0 w-full h-full bg-linear-to-b from-primary to-transparent">
                  <p className="text-xs bg-white w-fit rounded-full px-3 py-1.5 text-primary">
                    {FirstNews?.nama_kategori_berita}
                  </p>
                  <p className={'text-white line-clamp-2 font-semibold'}>{FirstNews?.judul}</p>
                  <p className={'text-white text-sm'}>
                    {FirstNews?.tanggal_berita
                      ? format(FirstNews?.tanggal_berita, 'dd-MM-yyyy')
                      : ''}
                  </p>
                </div>
                <Image
                  src={FirstNews?.gambar ?? '/img/noimg.png'}
                  alt={'gamabr'}
                  className={'w-full h-[310px] object-cover'}
                  width={500}
                  height={310}
                />
              </div>
            </Link>
            <div className="mt-4 flex flex-col gap-4">
              {SecondNews?.map((row, index) => (
                <Link href={`/information/news/${row?.slug}`} key={index}>
                  <div className={'border bg-white dark:bg-gray-800 p-4 rounded'}>
                    <p className={'text-primary text-xs'}>
                      {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
                    </p>
                    <p className={'text-primary line-clamp-2 font-semibold'}>{row?.judul}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="items-start gap-5 py-5 hidden lg:flex">
            <Link
              href={`/information/news/${FirstNews?.slug}`}
              className="w-1/2 p-6 bg-white rounded-lg border"
            >
              <div className="w-full h-[435px] relative">
                <Image
                  src={FirstNews?.gambar ?? '/img/noimg.png'}
                  sizes="100vw"
                  alt={'gambar'}
                  fill
                  className={'object-cover object-center w-full h-[435px] rounded-lg'}
                />
              </div>
              <div className="space-y-4 mt-4">
                <div className={'flex gap-2'}>
                  <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-primary flex items-center gap-1">
                    <FaRegCalendarAlt className={'size-4'} />
                    {FirstNews?.tanggal_berita
                      ? format(FirstNews?.tanggal_berita, 'dd-MM-yyyy')
                      : ''}
                  </p>
                  <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-primary">
                    {FirstNews?.nama_kategori_berita}
                  </p>
                </div>
                <p className="text-2xl text-primary font-semibold">{FirstNews?.judul}</p>
                <div
                  className="flex flex-col line-clamp-3! items-center gap-2 html-class"
                  dangerouslySetInnerHTML={{ __html: FirstNews?.isi_berita ?? '' }}
                />
              </div>
            </Link>

            <div className="w-1/2 flex flex-col justify-between h-full gap-5">
              {SecondNews?.map((row, k) => (
                <Link
                  href={`/information/news/${row?.slug}`}
                  key={k}
                  className={'flex items-start gap-5 bg-white rounded-lg p-5'}
                >
                  <div className="w-[197px] min-w-[197px] h-[148px] relative">
                    <Image
                      src={row?.gambar ?? '/img/noimg.png'}
                      sizes="100vw"
                      alt={'gambar'}
                      fill
                      className={'object-cover object-center w-full h-[148px] rounded-lg'}
                    />
                  </div>
                  <div className={'space-y-1.5'}>
                    <div className={'flex gap-2'}>
                      <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-primary flex items-center gap-1">
                        <FaRegCalendarAlt className={'size-4'} />
                        {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
                      </p>
                      <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-primary">
                        {row?.nama_kategori_berita}
                      </p>
                    </div>
                    <p className="text-2xl line-clamp-2">{row?.judul}</p>
                  </div>
                </Link>
              ))}
              <Link href={'/information/news'}>
                <Button className={'w-full bg-primary hover:bg-primary text-white'}>
                  Lihat Berita <ChevronRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsHomeSectionV9
