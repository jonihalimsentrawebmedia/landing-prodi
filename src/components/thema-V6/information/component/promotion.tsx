'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { UseGetPromotion } from '@/app/information/hooks'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'

const PromotionSectionInformationV6 = () => {
  const { promotion } = UseGetPromotion({
    page: '1',
    limit: '3',
  })
  return (
    <>
      <div className="container-sm py-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          <p className="lg:text-3xl font-semibold text-footer decoration-2 underline-offset-8 lg:underline-offset-[20px] underline decoration-yellow-500">
            Promosi Program Studi
          </p>
          <Link href={'/information/promotion'}>
            <Button className={'bg-footer hover:bg-footer text-white'}>
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

          <div className="w-full grid lg:grid-cols-3 gap-5 mt-10">
            {promotion?.map((row, k) => (
              <div key={k} className={'flex flex-col gap-4'}>
                <div className={'w-full h-[308px] relative overflow-hidden rounded-lg'}>
                  <Image
                    src={row?.gambar}
                    alt={'gambar'}
                    fill
                    className={'w-full h-full object-cover'}
                  />
                </div>
                <p className={'text-2xl line-clamp-2 font-semibold'}>{row?.judul}</p>
                <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-footer flex items-center gap-1">
                  <FaRegCalendarAlt className={'size-4'} />
                  {row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}
                </p>
                <div
                  className="flex flex-col gap-1.5 html-class line-clamp-3!"
                  dangerouslySetInnerHTML={{ __html: row?.isi_promosi }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default PromotionSectionInformationV6
