'use client'

import { UseGetNews } from '@/app/homepage/hooks'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { FaRegCalendarAlt } from 'react-icons/fa'

const NewsHomeSectionV12 = () => {
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
          <h2 className="lg:text-3xl font-semibold text-primary mx-auto border-b-[3px] border-yellow-500 pb-2.5 w-fit">
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

          <div className="hidden lg:flex items-start gap-6 lg:gap-8 mt-8">
            <div className="w-1/2 flex flex-col gap-3">
              <Image
                src={FirstNews?.gambar ?? '/img/noimg.png'}
                alt={'image'}
                width={628}
                height={471}
                className={'rounded-lg h-[471px] w-full'}
              />

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 bg-primary/10 border border-primary text-primary text-xs font-semibold px-4 py-1.5 rounded-full">
                  <FaRegCalendarAlt className="size-4" />
                  {FirstNews?.tanggal_berita
                    ? format(new Date(FirstNews?.tanggal_berita), 'dd-MM-yyyy')
                    : ''}
                </div>
                <div className="bg-primary/10 border border-primary text-primary text-xs font-semibold px-4 py-1.5 rounded-full">
                  {FirstNews?.nama_kategori_berita}
                </div>
              </div>
              <p className="text-2xl font-semibold line-clamp-2">{FirstNews?.judul}</p>
              <div
                className={'flex items-center gap-2 html-class line-clamp-3! html-class'}
                dangerouslySetInnerHTML={{ __html: FirstNews?.isi_berita ?? '' }}
              />
            </div>

            <div className="w-1/2 flex flex-col gap-6">
              {SecondNews?.map((row, index) => (
                <div key={index} className={'flex items-stretch gap-4'}>
                  <Image
                    src={row?.gambar}
                    alt={'gambr'}
                    width={248}
                    height={212}
                    className={'object-cover rounded-lg [248px] h-[213px]'}
                  />

                  <div className={'w-full space-y-4'}>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 bg-primary/10 border border-primary text-primary text-xs font-semibold px-4 py-1.5 rounded-full">
                        <FaRegCalendarAlt className="size-4" />
                        {FirstNews?.tanggal_berita
                          ? format(new Date(FirstNews?.tanggal_berita), 'dd-MM-yyyy')
                          : ''}
                      </div>
                      <div className="bg-primary/10 border border-primary text-primary text-xs font-semibold px-4 py-1.5 rounded-full">
                        {FirstNews?.nama_kategori_berita}
                      </div>
                    </div>
                    <p className="text-2xl font-semibold line-clamp-2">{FirstNews?.judul}</p>
                    <div
                      className={'flex items-center gap-2 html-class line-clamp-3! html-class'}
                      dangerouslySetInnerHTML={{ __html: FirstNews?.isi_berita ?? '' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center 5 mt-5">
            <Link href="/information/news">
              <Button className="bg-primary hover:bg-[#162e6b] text-white flex items-center gap-1.5">
                Lihat Berita
                <ChevronRight className="" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsHomeSectionV12
