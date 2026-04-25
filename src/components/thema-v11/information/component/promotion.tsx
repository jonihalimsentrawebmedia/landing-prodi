'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { UseGetPromotion } from '@/app/information/hooks'
import { format } from 'date-fns'
import { FaRegCalendarAlt } from 'react-icons/fa'

const PromotionInformationV11 = () => {
  const { promotion } = UseGetPromotion({
    page: '1',
    limit: '3',
  })
  return (
    <>
      <div className="py-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          <p className="lg:text-3xl font-semibold text-primary decoration-2 underline-offset-8 lg:underline-offset-[20px] underline decoration-yellow-500">
            Promosi Program Studi
          </p>
          <Link href={'/information/promotion'}>
            <Button className={'text-white'}>
              Semua Promosi
              <ChevronRight className={'size-4'} />
            </Button>
          </Link>
        </div>

        <div className="relative w-full min-h-[523px]">
          <div className="absolute w-full h-full top-0 left-0">
            <Image
              src={'/img/promotionbg.png'}
              alt={'promotionbg'}
              fill
              className={'w-full object-contain'}
            />
          </div>

          <div className="w-full flex flex-col gap-5 mt-10 relative z-10">
            {promotion?.map((row, k) => (
              <Link
                href={`/information/promotion/${row?.slug}`}
                key={k}
                className={'flex flex-col lg:flex-row gap-5 p-6 bg-white rounded-lg border'}
              >
                <div
                  className={'w-full lg:max-w-[216px] h-[162px] relative overflow-hidden rounded-lg'}
                >
                  <Image
                    src={row?.gambar}
                    alt={'gambar'}
                    fill
                    className={'w-full h-full object-cover'}
                  />
                </div>
                <div>
                  <p className={'lg:text-2xl line-clamp-2 font-semibold'}>{row?.judul}</p>
                  <p className="text-sm font-semibold text-primary flex items-center gap-1.5 py-1.5 px-3 bg-primary/10 rounded-full w-fit">
                    <FaRegCalendarAlt />
                    {row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}
                  </p>
                  <div
                    className="flex flex-col gap-1.5 html-class line-clamp-3! text-sm! lg:text-base"
                    dangerouslySetInnerHTML={{ __html: row?.isi_promosi }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default PromotionInformationV11
