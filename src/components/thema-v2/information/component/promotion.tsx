'use client'

import { UseGetPromotion } from '@/app/information/hooks'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PromotionInformationSkeleton } from './skeleton'
import { TitleUnderline } from '@/components/thema-v2/component/common/titleUnderLine'
import { FaRegCalendarAlt } from 'react-icons/fa'

export const PromotionInformation = () => {
  const { promotion, loading } = UseGetPromotion({
    page: '1',
    limit: '4',
  })

  if (loading) return <PromotionInformationSkeleton />

  return (
    <>
      <div className="bg-gray-500 dark:bg-primary w-full max-w-[1920px] mx-auto">
        <div
          style={{
            backgroundImage: "url('/img/polabg.png')",
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className={'w-full py-5'}
        >
          <div className="container">
            <TitleUnderline text={'Promosi'} className={'text-center text-2xl'} />

            <div className="grid lg:grid-cols-2 gap-5 mt-8">
              {promotion?.map((row, k) => (
                <Link
                  href={`/information/promotion/${row?.slug}`}
                  key={k}
                  className={
                    'p-4 bg-white dark:bg-primary dark:border rounded flex flex-col lg:flex-row items-center gap-2.5'
                  }
                >
                  <div className={'min-w-[233px] w-full h-[175px] bg-gray-100 relative shadow'}>
                    <Image
                      src={row?.gambar}
                      alt={row.judul}
                      className={'object-contain w-[233px] mx-auto h-[175px]'}
                      width={233}
                      height={175}
                    />
                  </div>
                  <div>
                    <p className="font-semibold line-clamp-2">{row?.judul}</p>
                    <p>
                      <FaRegCalendarAlt />
                      {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : ''}
                    </p>
                    <div
                      className={'html-class line-clamp-3'}
                      dangerouslySetInnerHTML={{ __html: row?.isi_promosi }}
                    />
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-end mt-5">
              <Link
                href={'/information/promotion'}
                className={'flex items-center gap-1 font-semibold text-primary dark:text-white'}
              >
                Lihat Promosi Lainnya
                <ArrowRight className={'size-4'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
