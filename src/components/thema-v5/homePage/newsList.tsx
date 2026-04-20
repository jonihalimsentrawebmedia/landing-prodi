'use client'

import { UseGetNews } from '@/app/homepage/hooks'
import Image from 'next/image'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const NewsListSectionV5 = () => {
  const { news, loading: load1 } = UseGetNews({ page: '1', limit: '3' })

  const FirstNews = news?.[0]
  const SecondNews = news?.slice(1, 3)

  if (load1) return <></>
  return (
    <>
      <div className="container-sm py-8 space-y-6">
        <p className="text-2xl font-semibold underline underline-offset-8 decoration-yellow-500 text-footer text-center">
          Berita Program Studi
        </p>

        <div className={'block lg:hidden space-y-4'}>
          <div className="relative w-full h-fit">
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
          {SecondNews?.map((row, index) => (
            <div key={index} className={'border bg-white dark:bg-gray-800 p-4 rounded'}>
              <p className={'text-footer text-xs'}>
                {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
              </p>
              <p className={'text-footer line-clamp-2 font-semibold'}>{row?.judul}</p>
            </div>
          ))}
        </div>

        <div className="flex-col lg:grid grid-cols-3 gap-4 hidden">
          {news?.map((row, index) => (
            <Link href={`/information/news/${row?.slug}`} key={index} className={'space-y-2'}>
              <Image
                src={row?.gambar}
                alt={row?.judul}
                className={'w-full h-[310px] object-cover rounded-xl'}
                width={500}
                height={310}
              />
              <p className="text-sm font-semibold text-footer">{row?.nama_kategori_berita}</p>
              <p className="text-2xl line-clamp-2">{row?.judul}</p>
              <p className="text-sm text-footer">
                {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM- yyyy') : ''}
              </p>
              <div
                className={'flex flex-col gap-2 html-class line-clamp-3! text-gray-500!'}
                dangerouslySetInnerHTML={{
                  __html: row?.isi_berita,
                }}
              />
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href={'/information/news'}>
            <Button className={'bg-footer text-white mx-auto'}>
              Lihat Berita
              <ChevronRight className={'size-4'} />
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default NewsListSectionV5
