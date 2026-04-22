'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { UseGetNews } from '@/app/homepage/hooks'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'

const InformationSectionNews = () => {
  const { news } = UseGetNews({
    page: '1',
    limit: '4',
  })

  const FirstNews = news[0]
  const SecondNews = news.slice(1, 4)

  return (
    <>
      <div className="container-sm py-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <h2 className="lg:text-3xl font-semibold text-footer decoration-2 underline-offset-8 lg:underline-offset-[20px] underline decoration-yellow-500">
            Berita Program Studi
          </h2>
          <Link href={'/information/news'}>
            <Button className={'bg-footer hover:bg-footer text-white'}>
              Semua Berita
              <ChevronRight className={'size-4'} />
            </Button>
          </Link>
        </div>

        <div className={'block lg:hidden space-y-4 mt-5'}>
          <Link href={`/information/news/${FirstNews?.slug}`}>
            <div className="relative w-full h-full">
              <div className="absolute space-y-2.5 p-2.5 top-0 left-0 w-full h-full bg-linear-to-b from-footer to-transparent">
                <p className="text-xs bg-white w-fit rounded-full px-3 py-1.5 text-footer">
                  {FirstNews?.nama_kategori_berita}
                </p>
                <p className={'text-white line-clamp-2 font-semibold'}>{FirstNews?.judul}</p>
                <p className={'text-white text-sm'}>
                  {FirstNews?.tanggal_berita ? format(FirstNews?.tanggal_berita, 'dd-MM-yyyy') : ''}
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
                  <p className={'text-footer text-xs'}>
                    {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
                  </p>
                  <p className={'text-footer line-clamp-2 font-semibold'}>{row?.judul}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:flex items-start gap-5 py-5 mt-5 hidden">
          <div className="w-1/2">
            <div className="w-full h-[314px] relative">
              <Image
                src={FirstNews?.gambar ?? '/img/noimg.png'}
                sizes="100vw"
                alt={'gambar'}
                fill
                className={'object-cover object-center w-full h-[314px] rounded-lg'}
              />
            </div>
            <div className="space-y-4 mt-4">
              <div className={'flex gap-2'}>
                <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-footer flex items-center gap-1">
                  <FaRegCalendarAlt className={'size-4'} />
                  {FirstNews?.tanggal_berita ? format(FirstNews?.tanggal_berita, 'dd-MM-yyyy') : ''}
                </p>
                <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-footer">
                  {FirstNews?.nama_kategori_berita}
                </p>
              </div>
              <p className="text-2xl text-footer font-semibold">{FirstNews?.judul}</p>
              <div
                className="flex flex-col line-clamp-3! items-center gap-2 html-class"
                dangerouslySetInnerHTML={{ __html: FirstNews?.isi_berita ?? '' }}
              />
            </div>
          </div>

          <div className="w-1/2 flex flex-col gap-4">
            {SecondNews?.map((row, k) => (
              <div key={k} className={'flex items-start gap-5'}>
                <div className="w-[220px] min-w-[220px] h-[166px] relative">
                  <Image
                    src={row?.gambar ?? '/img/noimg.png'}
                    sizes="100vw"
                    alt={'gambar'}
                    fill
                    className={'object-cover object-center w-full h-[166px] rounded-lg'}
                  />
                </div>
                <div>
                  <div className={'flex gap-2'}>
                    <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-footer flex items-center gap-1">
                      <FaRegCalendarAlt className={'size-4'} />
                      {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
                    </p>
                    <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-footer">
                      {row?.nama_kategori_berita}
                    </p>
                  </div>
                  <p className="text-2xl line-clamp-2">{row?.judul}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default InformationSectionNews
