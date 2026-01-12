'use client'

import { UseGetNews } from '@/app/homepage/hooks'
import Image from 'next/image'
import { format } from 'date-fns'
import { NewsCardSkeleton } from '@/app/homepage/components'

export const NewNewsSection = () => {
  const { news, loading } = UseGetNews()

  const FourNew = news?.slice(0, 4)
  if (loading)
    return (
      <div className="container grid grid-cols-4 gap-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <NewsCardSkeleton key={i} />
        ))}
      </div>
    )

  return (
    <>
      <div className={'w-full max-w-[1920px] bg-[#EAEAEA] py-8 relative'}>
        <div className="container grid grid-cols-4 gap-5 relative z-30">
          <p className="text-2xl font-semibold col-span-4">
            Baca <span className={'bg-[#CDA327] px-0.5 '}>Berita</span> Terbaru
          </p>
          {FourNew?.map((item, k) => (
            <div key={k} className={'relative border border-b-white'}>
              <div
                className={`absolute w-full h-full bg-linear-to-t
                from-primary/80 to-primary/50 flex p-2.5
                flex-col justify-end
                `}
              >
                <p className={'line-clamp-2 font-semibold text-white'}>{item?.judul}</p>
                <p className={'text-xs text-white'}>
                  {item?.published_at ? format(item?.published_at, 'dd MMMM yyyy') : '-'}
                </p>
              </div>
              <Image
                src={item?.gambar}
                alt={'gambae'}
                width={305}
                height={305}
                className={'w-full h-[305px] object-cover'}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
