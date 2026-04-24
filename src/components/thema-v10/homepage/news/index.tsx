'use client'

import { UseGetNews } from '@/app/homepage/hooks'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const NewsHomeSectionV10 = () => {
  const { news } = UseGetNews({
    page: '1',
    limit: '3',
  })

  const FirstNews = news[0]
  const SecondNews = news.slice(1, 3)

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
            {news?.map((row) => (
              <Link
                key={row.id_berita}
                href={`/information/news/${row.slug}`}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-300 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Thumbnail */}
                <div className="relative h-[240px] lg:h-[272px]">
                  <Image
                    src={row.gambar ?? '/img/noimg.png'}
                    alt={row.judul}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Date & Category */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1.5 bg-[#EFF6FF] text-[#1E3A8A] text-xs font-semibold px-4 py-1.5 rounded-full">
                      <FaRegCalendarAlt className="size-4" />
                      {row.tanggal_berita ? format(new Date(row.tanggal_berita), 'dd-MM-yyyy') : ''}
                    </div>
                    <div className="bg-[#EFF6FF] text-[#1E3A8A] text-xs font-semibold px-4 py-1.5 rounded-full">
                      {row.nama_kategori_berita}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[#1E3A8A] font-semibold text-xl lg:text-2xl leading-tight line-clamp-3 group-hover:text-[#0F6D5B] transition mb-4">
                    {row.judul}
                  </h3>

                  {/* Description */}
                  <div
                    className="text-[#444444] text-[15px] leading-relaxed line-clamp-3 flex-1"
                    dangerouslySetInnerHTML={{ __html: row.isi_berita ?? '' }}
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center 5 mt-5">
            <Link href="/information/news">
              <Button className="bg-[#1E3A8A] hover:bg-[#162e6b] text-white flex items-center gap-1.5">
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

export default NewsHomeSectionV10
