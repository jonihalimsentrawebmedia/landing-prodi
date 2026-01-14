'use client'

import { SkeletonNewsCol, SkeletonNewsRow } from '@/app/information/components/skeleton'
import { CardNewsCol } from '@/app/information/components/cardNewCol'
import { CardNewsRow } from '@/app/information/components/CardNewsRow'
import { UseGetNews } from '@/app/homepage/hooks'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const SectionNews = () => {
  const { news, loading } = UseGetNews()

  const newNews = news.slice(0, 1)
  const newNews2 = news.slice(1, 4)

  return (
    <>
      <div className={'w-full py-8 pb-10 bg-[#EAEAEA]'}>
        <div className="grid grid-cols-2 items-start gap-5 container">
          <Link href={'/information'} className={'flex items-center gap-1.5'}>
            <ArrowLeft className={'size-4'} />
            Kembali
          </Link>
          <p className="text-2xl font-semibold col-span-4">
            <span className={'bg-[#CDA327] px-0.5 '}>Berita</span> Terbaru
          </p>
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
      </div>
    </>
  )
}
