'use client'

import { TitleContent } from '@/components/thema-v3/component/common/titleContent'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { UseGetPromotion } from '@/app/information/hooks'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { id } from 'date-fns/locale/id'

export const PromotionInformation = () => {
  const { promotion } = UseGetPromotion({
    page: '1',
    limit: '4',
  })
  return (
    <>
      <div className="dark:bg-primary w-full max-w-[1920px] mx-auto">
        <div
          style={{
            backgroundImage: "url('/img/grenbg.png')",
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className={'w-full py-5'}
        >
          <div className="container py-5">
            <TitleContent
              text={'Promosi Program Studi'}
              className={'text-center w-full justify-center'}
              line_position={'bottom'}
            />

            <div className="grid grid-cols-4 gap-5  mt-10">
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
                    <p className={'flex items-center gap-1 text-primary text-sm mt-1.5'}>
                      <FaRegCalendarAlt />
                      {item?.published_at
                        ? format(item?.published_at, 'dd MMM yyyy', { locale: id })
                        : '-'}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-center mt-5">
              <Link
                href={'/information/promotion'}
                className={
                  'flex items-center gap-2 text-primary border border-primary rounded-full p-1.5 px-3 text-sm font-semibold'
                }
              >
                Lihat Promosi Lain
                <ArrowRight className={'size-4'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
