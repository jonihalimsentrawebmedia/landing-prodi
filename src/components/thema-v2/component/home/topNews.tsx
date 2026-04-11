'use client'

import Image from 'next/image'
import { TopNewsSkeleton } from './skeleton'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { UseGetNews } from '@/app/homepage/hooks'
import { CardNewsItem } from '@/components/thema-v2/component/common/cardNews'
import { TitleUnderline } from '@/components/thema-v2/component/common/titleUnderLine'
import { domAnimation, LazyMotion } from 'framer-motion'
import { format } from 'date-fns'
import { FaCalendarAlt } from 'react-icons/fa'

export const TopNewsLanding = () => {
  const { news, loading } = UseGetNews({ page: '1', limit: '12' })

  if (loading) return <TopNewsSkeleton />

  return (
    <LazyMotion features={domAnimation}>
      <div className="w-full bg-gray-100 dark:bg-primary max-w-[1920px] mx-auto pb-5">
        <div className="container flex flex-col gap-5 py-5">
          <TitleUnderline text="Berita Program Studi" className="text-center" />

          <Carousel className="block md:hidden">
            <CarouselContent>
              {news?.map((row, i) => (
                <CarouselItem key={i} className="basis-5/6">
                  <div key={i} className="col-span-1 shadow border">
                    <Image
                      src={row?.gambar}
                      alt={'gambar'}
                      className={'w-full h-[240px] object-cover'}
                      height={240}
                      width={330}
                    />
                    <div className={'min-h-[240px] relative'}>
                      <div className="p-4 space-y-2.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p
                            className={
                              'border p-1.5 px-3 rounded-full w-fit bg-primary/10 text-primary text-sm font-semibold flex items-center gap-1.5 whitespace-nowrap'
                            }
                          >
                            <FaCalendarAlt />
                            {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : '-'}
                          </p>
                          <p
                            className={
                              'border p-1.5 px-3 rounded-full w-fit bg-pink-200 text-primary text-sm font-semibold'
                            }
                          >
                            {row?.nama_kategori_berita}
                          </p>
                        </div>

                        <p className="text-lg font-semibold line-clamp-2">{row?.judul ?? ''}</p>
                        <div
                          dangerouslySetInnerHTML={{ __html: row?.isi_berita }}
                          className="line-clamp-3 text-sm"
                        />
                        <button className={'text-sm absolute bottom-4'}>Baca Lebih Lanjut</button>
                      </div>
                    </div>
                  </div>
                  {/*<CardNewsItem*/}
                  {/*  gambar={row?.gambar}*/}
                  {/*  judul={row?.judul}*/}
                  {/*  isi_berita={row?.isi_berita}*/}
                  {/*  published_at={row?.published_at ?? ''}*/}
                  {/*/>*/}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <Carousel
            className="hidden md:block"
            opts={{
              slidesToScroll: 3,
              align: 'start',
            }}
          >
            <CarouselContent>
              {news?.map((row, i) => (
                <CarouselItem key={i} className="basis-1/4">
                  <div key={i} className="col-span-1 shadow border">
                    <Image
                      src={row?.gambar}
                      alt={'gambar'}
                      className={'w-full h-[240px] object-cover'}
                      height={240}
                      width={330}
                    />
                    <div className={'min-h-[240px] relative'}>
                      <div className="p-4 space-y-2.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p
                            className={
                              'border p-1.5 px-3 rounded-full w-fit bg-primary/10 text-primary text-sm font-semibold flex items-center gap-1.5 whitespace-nowrap'
                            }
                          >
                            <FaCalendarAlt />
                            {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : '-'}
                          </p>
                          <p
                            className={
                              'border p-1.5 px-3 rounded-full w-fit bg-pink-200 text-primary text-sm font-semibold'
                            }
                          >
                            {row?.nama_kategori_berita}
                          </p>
                        </div>

                        <p className="text-lg font-semibold line-clamp-2">{row?.judul ?? ''}</p>
                        <div
                          dangerouslySetInnerHTML={{ __html: row?.isi_berita }}
                          className="line-clamp-3 text-sm"
                        />
                        <button className={'text-sm absolute bottom-4'}>Baca Lebih Lanjut</button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {news?.length > 4 && (
              <div className="relative items-center mx-auto justify-center py-5">
                <CarouselNext className={'bottom-0 left-[52%]'} />
                <CarouselPrevious className={'bottom-0 left-[46%]'} />
              </div>
            )}
          </Carousel>

          <div className="flex items-center justify-end">
            <Link
              href="/information/news"
              className="flex items-center gap-1 font-semibold text-primary dark:text-white group"
            >
              Lihat Berita Lainnya
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </LazyMotion>
  )
}
