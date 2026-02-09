'use client'

import { UseGetPromotion } from '@/app/information/hooks'
import { UseGetPromotionDetail } from '@/app/information/promotion/hooks'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { IoLocationSharp } from 'react-icons/io5'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'
import Image from 'next/image'
import { TitleContent } from '@/components/thema-v3/component/common/titleContent'
import { id } from 'date-fns/locale/id'
import { DetailPromotionTheme3Skeleton } from './skeleton'

export const DetailPromotionTheme3 = () => {
  const { slug } = useParams()
  const { detailPromotion: detail, loading: load1 } = UseGetPromotionDetail((slug as string) ?? '')
  const { promotion, loading: load2 } = UseGetPromotion({
    page: '1',
    limit: '10',
    no_include_id: detail?.id_promosi ?? '',
  })

  const loading = load1 || load2

  if (loading) return <DetailPromotionTheme3Skeleton />

  return (
    <>
      <div className={'container py-5'}>
        <Link href={'/information/agenda'} className={'flex items-center gap-1.5'}>
          <ArrowLeft className={'size-4'} />
          Kembali
        </Link>

        <div className="w-full flex items-start gap-x-8 lg:mt-4">
          <div className="flex flex-col gap-5">
            <div className="w-full py-5 bg-primary-foreground p-2.5 mb-4">
              <p className={'text-2xl font-semibold dark:text-primary'}>{detail?.judul}</p>
              <div className="grid grid-cols-2 w-fit gap-2.5 text-primary mt-2">
                <p className={'flex items-center gap-1.5'}>
                  <FaRegCalendarAlt /> Diupload
                </p>
                <p>: {detail?.published_at ? format(detail?.published_at, 'dd MMM yyyy') : '-'}</p>
                <p className={'flex items-center gap-1.5'}>
                  <IoLocationSharp />
                  Lokasi
                </p>

                <p>: {detail?.penulis}</p>
              </div>
            </div>

            <Image
              src={detail?.gambar ?? '/img/noimg.png'}
              alt={'gambar'}
              className={'w-full h-[555px]'}
              width={925}
              height={555}
            />

            <ShareContent title={detail?.judul ?? ''} text={'Bagikan Agenda'} />

            <div
              className="html-class flex flex-col gap-5 text-justify"
              dangerouslySetInnerHTML={{ __html: detail?.isi_promosi ?? '' }}
            />
          </div>

          <div className=" flex flex-col gap-4 w-[335px] min-w-[335px]">
            <TitleContent
              text={'Agenda Lainnya'}
              className={'whitespace-nowrap'}
              line_position={'bottom'}
            />

            {promotion.map((item, k) => (
              <Link href={`/information/promotion/${item?.slug}`} key={k}>
                <div className={'border rounded'}>
                  <Image
                    src={item?.gambar}
                    alt={'gambar'}
                    width={500}
                    height={250}
                    className={'object-cover w-full h-[250px]'}
                  />
                  <div className="w-full bg-white p-2.5 flex flex-col gap-1.5">
                    <p className={'text-primary'}>{item?.judul}</p>
                    <p className="text-sm text-primary flex items-center gap-1.5">
                      <FaRegCalendarAlt />
                      {item?.published_at
                        ? format(item?.published_at, 'dd MMM yyyy', { locale: id })
                        : '-'}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
