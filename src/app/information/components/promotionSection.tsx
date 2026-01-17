'use client'

import Image from 'next/image'
import { UseGetPromotion } from '@/app/information/hooks'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { id } from 'date-fns/locale/id'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SkeletonCardPromotion } from '@/app/information/components/skeleton'

export const PromotionSection = () => {
  const { promotion, loading } = UseGetPromotion()
  return (
    <>
      <div className="w-full relative bg-primary">
        <div className="absolute w-full h-full">
          <Image
            src={'/img/background.png'}
            alt={'banner-promotion'}
            width={1920}
            height={500}
            className={'object-cover w-full h-full'}
          />
        </div>

        <div className="container py-8 pb-10">
          <div className="flex items-center justify-between relative z-10">
            <p className="lg:text-2xl font-semibold col-span-4 text-white">
              <span className={'bg-[#CDA327] px-0.5 text-primary'}>Promosi</span> Program Studi
            </p>
            <Link
              href={'/information/promotion'}
              className={'flex items-center gap-1.5 text-white'}
            >
              Lihat Semua
              <ArrowRight className={'size-4'} />
            </Link>
          </div>

          <div className="mt-5 grid lg:grid-cols-4 gap-5 relative z-20">
            {loading ? (
              Array.from({ length: 4 }).map((_, index) => <SkeletonCardPromotion key={index} />)
            ) : (
              <>
                {promotion?.map((item, index) => (
                  <Link href={`/information/promotion/${item?.slug}`} key={index}>
                    <div className="w-full h-[200px] overflow-hidden">
                      <Image
                        src={item?.gambar}
                        alt={item?.judul}
                        className={
                          'w-full h-[200px] object-cover hover:scale-110 transition-all duration-300'
                        }
                        width={500}
                        height={200}
                      />
                    </div>
                    <div className="bg-white p-2">
                      <p className="font-semibold line-clamp-2">{item?.judul}</p>
                      <p className={'flex items-center gap-1 text-gray-800 text-sm mt-1.5'}>
                        <FaRegCalendarAlt />
                        {item?.published_at
                          ? format(item?.published_at, 'dd MMM yyyy', { locale: id })
                          : '-'}
                      </p>
                    </div>
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
