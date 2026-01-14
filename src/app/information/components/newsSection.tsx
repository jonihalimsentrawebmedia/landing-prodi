'use client'

import { UseGetNews } from '@/app/homepage/hooks'
import { CardNewsRow } from '@/app/information/components/CardNewsRow'
import { CardNewsCol } from '@/app/information/components/cardNewCol'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SkeletonNewsCol, SkeletonNewsRow } from '@/app/information/components/skeleton'

export const NewsSection = () => {
  const { news, loading } = UseGetNews()

  const newNews = news.slice(0, 1)
  const newNews2 = news.slice(1, 4)

  return (
    <>
      <div className="w-full relative">
        <div className="w-full h-[537px] bg-primary absolute bottom-0">
          <div className="relative w-full h-full">
            <div className="absolute w-full h-full bg-linear-to-t from-primary to-primary/60" />
            <Image
              src="/img/garden.jpg"
              alt="image"
              width={1920}
              height={537}
              className={'w-full h-full object-cover object-top'}
            />
          </div>
        </div>
        <div className="container py-8 relative z-10">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold col-span-4">
              Baca <span className={'bg-[#CDA327] px-0.5 '}>Berita</span> Terbaru
            </p>
            <Link href={'/information/news'} className={'flex items-center gap-1.5'}>
              Lihat Semua
              <ArrowRight className={'size-4'} />
            </Link>
          </div>

          <div className="grid grid-cols-2 items-start mt-5 gap-5">
            {loading ? (
              <>
                <SkeletonNewsCol />
                <div className={'flex flex-col gap-5'}>
                  {Array.from({ length: 3 }).map((_, i) => (
                    <SkeletonNewsRow key={i} />
                  ))}
                </div>
              </>
            ) : (
              <>
                <CardNewsCol item={newNews[0]} />
                <div className={'flex flex-col gap-5'}>
                  {newNews2.map((item, index) => (
                    <CardNewsRow item={item} key={index} />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="mt-5 flex justify-center">
            <Link href={'/information/news'}>
              <Button className={'bg-white hover:bg-gray-200 rounded-full text-primary'}>
                Lihat Berita Lainnya
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
