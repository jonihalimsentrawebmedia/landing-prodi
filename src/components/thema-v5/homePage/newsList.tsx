'use client'

import { UseGetNews } from '@/app/homepage/hooks'
import Image from 'next/image'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaCircleChevronRight } from 'react-icons/fa6'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const NewsListSectionV5 = () => {
  const { news, loading: load1 } = UseGetNews({ page: '1', limit: '5' })

  const FirstNews = news?.[0]
  const SecondNews = news?.slice(1, 3)
  const MoresNews = news?.slice(3, 5)

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
          {MoresNews?.length > 0 && (
            <div className={'flex gap-4 flex-nowrap items-start overflow-x-scroll'}>
              {MoresNews?.map((row, index) => (
                <div key={index} className={'flex flex-col gap-2'}>
                  <Image
                    src={row?.gambar ?? '/img/noimg.png'}
                    alt={'gamabr'}
                    className={'w-full min-w-[280px] h-[250px] rounded-md object-cover'}
                    width={500}
                    height={310}
                  />
                  <div className="p-2 bg-white">
                    <p className="font-semibold line-clamp-2">{row?.judul}</p>
                    <p className="text-gray-400 text-sm">
                      {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="lg:block hidden">
          <Carousel
            opts={{
              loop: true,
              align: 'start',
            }}
            plugins={[Autoplay({ delay: 3000 })]}
          >
            <CarouselContent className={'flex items-stretch'}>
              {news?.map((row, index) => (
                <CarouselItem key={index} className={'basis-1/3'}>
                  <Link href={`/information/news/${row?.slug}`}>
                    <div className={'shadow rounded-lg border h-full'}>
                      <Image
                        src={row?.gambar}
                        alt={row?.judul}
                        className={'w-full h-[310px] object-cover rounded-t-lg'}
                        width={500}
                        height={310}
                      />
                      <div className={'p-4 space-y-2.5 relative'}>
                        <div className="flex items-center gap-x-2">
                          <p className="text-sm py-1.5 px-3 rounded-full font-semibold bg-footer/10 text-footer flex items-center gap-1">
                            <FaRegCalendarAlt />
                            {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM- yyyy') : ''}
                          </p>
                          <p className="text-sm py-1.5 px-3 rounded-full font-semibold bg-footer/10 text-footer flex items-center gap-1">
                            {row?.nama_kategori_berita}
                          </p>
                        </div>
                        <p className="font-semibold line-clamp-2">{row?.judul}</p>
                        <button className={'text-footer flex items-center gap-1 text-sm'}>
                          <FaCircleChevronRight className={'size-4'} />
                          Baca Lebih Lanjut
                        </button>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
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
