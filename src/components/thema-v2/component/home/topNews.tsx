'use client'

import Image from 'next/image'
import { clsx } from 'clsx'
import { format } from 'date-fns'
import { TopNewsSkeleton } from './skeleton'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { UseGetNews } from '@/app/homepage/hooks'
import { CardNewsItem } from '@/components/thema-v2/component/common/cardNews'
import { TitleUnderline } from '@/components/thema-v2/component/common/titleUnderLine'
import { LazyMotion, domAnimation, m } from 'framer-motion'

const MotionLink = m(Link)

export const TopNewsLanding = () => {
  const { news, loading } = UseGetNews({ page: '1', limit: '6' })

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
                  <CardNewsItem
                    gambar={row?.gambar}
                    judul={row?.judul}
                    isi_berita={row?.isi_berita}
                    published_at={row?.published_at ?? ''}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* GRID ASLI — TIDAK BERUBAH */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {news?.map((row, index) => (
              <MotionLink
                key={index}
                href={`/information/news/${row?.slug}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={clsx(
                  index % 3 === 1 ? 'lg:col-span-2' : 'col-span-1',
                  'bg-white shadow rounded-md overflow-hidden group hover:bg-primary-foreground',
                  'dark:bg-primary/60 dark:border border-white/40'
                )}
              >
                <div
                  className={clsx(
                    'w-full h-[240px] relative overflow-hidden',
                    index < 3 ? 'block' : 'lg:hidden'
                  )}
                >
                  <Image
                    src={row?.gambar}
                    alt={row?.judul}
                    width={330}
                    height={240}
                    className="w-full h-[240px] object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>

                <div className="p-2 flex flex-col gap-1.5 transition-all duration-500 group-hover:-translate-y-1">
                  <p className="font-semibold line-clamp-2 group-hover:text-primary dark:group-hover:text-white">
                    {row?.judul}
                  </p>

                  <p className="text-gray-500 text-xs font-semibold">
                    {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : '-'}
                  </p>

                  <div
                    dangerouslySetInnerHTML={{ __html: row?.isi_berita }}
                    className="line-clamp-3 text-sm"
                  />
                </div>
              </MotionLink>
            ))}
          </div>

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
