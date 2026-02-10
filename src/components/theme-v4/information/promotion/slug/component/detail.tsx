'use client'

import { UseGetPromotion } from '@/app/information/hooks'
import { UseGetPromotionDetail } from '@/app/information/promotion/hooks'
import { useParams } from 'next/navigation'
import { FaRegCalendarAlt, FaUser } from 'react-icons/fa'
import { format } from 'date-fns'
import { id } from 'date-fns/locale/id'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'

export const DetailPromotionTheme4 = () => {
  const { slug } = useParams()
  const { detailPromotion } = UseGetPromotionDetail((slug as string) ?? '')
  const { promotion } = UseGetPromotion({
    page: '1',
    limit: '4',
    no_include_id: detailPromotion?.id_promosi ?? '',
  })

  return (
    <>
      <div className="">
        <div className={'container'}>
          <div className="flex items-start w-full lg:flex-row flex-col gap-5 my-5">
            <div className="w-full">
              <Link href={'/information/promotion'}>
                <button className={'flex items-center gap-1.5'}>
                  <ArrowLeft />
                  Kembali
                </button>
              </Link>
              <p className="mt-5 lg:text-2xl font-semibold">{detailPromotion?.judul}</p>

              {detailPromotion?.gambar && (
                <Image
                  className={'w-[500px] mx-auto h-auto object-contain my-5'}
                  src={detailPromotion?.gambar}
                  alt={'gambar'}
                  width={1000}
                  height={500}
                />
              )}

              <div
                className="html-class mt-5 text-justify"
                dangerouslySetInnerHTML={{ __html: detailPromotion?.isi_promosi ?? '' }}
              />
            </div>

            <div className="w-full h-full max-w-[335px]">
              <div className="p-5 bg-white dark:bg-primary shadow drop-shadow rounded-lg flex flex-col gap-2">
                <div className={'flex flex-col gap-1'}>
                  <p className={'text-gray-500 flex items-center gap-1.5 text-sm'}>
                    <FaUser className={'text-primary dark:text-white'} />
                    Penulis
                  </p>
                  <p className={'text-sm font-semibold'}>{detailPromotion?.penulis}</p>
                </div>

                <div className={'flex flex-col gap-1'}>
                  <p className={'text-gray-500 flex items-center gap-1.5 text-sm'}>
                    <FaRegCalendarAlt className={'text-primary dark:text-white'} />
                    Tanggal
                  </p>
                  <p className={'font-semibold text-sm'}>
                    {detailPromotion?.published_at
                      ? format(detailPromotion?.published_at, 'dd MMM yyyy', { locale: id })
                      : '-'}
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-primary shadow drop-shadow rounded-lg flex flex-col gap-2 mt-5">
                <ShareContent title={detailPromotion?.judul ?? ''} text={'Bagikan Promosi'} />
              </div>

              <div className="mt-5">
                <p className={'text-white pl-2 text-xl border-l-white border-l-4'}>Baca Juga</p>
                <ul className={'flex flex-col gap-4 mt-2.5'}>
                  {promotion?.map((row, k) => (
                    <Link
                      href={`/information/promotion/${row?.slug}`}
                      key={k}
                      className={'border pr-1.5'}
                    >
                      <li className={'flex items-center gap-2'}>
                        <Image
                          src={row?.gambar}
                          alt={'image'}
                          className={'w-[100px] h-[100px] object-cover'}
                          width={100}
                          height={100}
                        />
                        <div className={'flex flex-col gap-1.5'}>
                          <p className="text-primary font-semibold  text-sm">{row?.judul}</p>
                          <p className={'flex items-center gap-1.5 text-primary text-sm'}>
                            <FaRegCalendarAlt />
                            {row?.published_at
                              ? format(row?.published_at, 'dd MMM yyyy', { locale: id })
                              : '-'}
                          </p>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
