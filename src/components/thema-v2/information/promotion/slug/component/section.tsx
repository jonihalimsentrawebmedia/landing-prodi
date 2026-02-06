'use client'

import { UseGetPromotion } from '@/app/information/hooks'
import { UseGetPromotionDetail } from '@/app/information/promotion/hooks'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { format } from 'date-fns'
import { FaRegCalendarAlt, FaUser } from 'react-icons/fa'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { id } from 'date-fns/locale/id'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'
import { TitleUnderline } from '@/components/thema-v2/component/common/titleUnderLine'

export const SectionPromotionSlug = () => {
  const { slug } = useParams()
  const { detailPromotion: detail } = UseGetPromotionDetail((slug as string) ?? '')
  const { promotion } = UseGetPromotion({
    page: '1',
    limit: '3',
    no_include_id: detail?.id_promosi ?? '',
  })

  const tempImage = []
  tempImage.push(detail?.gambar)
  detail?.promosi_gambar_tambahan?.map((item) => tempImage.push(item.gambar))

  return (
    <>
      <div className={'container py-5'}>
        <Link href={'/information/promotion'} className={'flex items-center gap-1.5'}>
          <ArrowLeft className={'size-4'} />
          Kembali
        </Link>

        <div className="w-full h-full p-5 bg-primary-foreground rounded-md my-2">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-5">
            <div className="lg:w-7/12 w-full p-2.5 lg:p-0">
              <h1 className={'text-sm lg:text-2xl font-semibold text-primary'}>{detail?.judul}</h1>
              <div className="grid grid-cols-2 lg:grid-cols-[12rem_1fr] gap-2.5 text-primary text-sm mt-2">
                <p className={'flex items-center gap-1.5'}>
                  <FaRegCalendarAlt className={'size-4'} />
                  Diupload
                </p>
                <p>{detail?.published_at ? format(detail?.published_at, 'dd MMM yyyy') : ''}</p>
                <p className={'flex items-center gap-1.5'}>
                  <FaUser className={'size-4'} />
                  Penulis
                </p>
                <p>{detail?.penulis}</p>
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <Carousel>
                <CarouselContent>
                  {tempImage?.map((item, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={item ?? '/img/noimg.png'}
                        alt={'gambar'}
                        width={500}
                        height={300}
                        className={`object-cover lg:object-contain bg-gray-100 shadow-lg drop-shadow-lg rounded w-full h-[200px] lg:h-[300px]`}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>

        <div className="lg:max-w-4xl mx-auto mt-5">
          <ShareContent text={'Bagikan Berita'} title={detail?.judul ?? ''} />
          <div
            className="html-class mt-5 flex flex-col gap-4"
            dangerouslySetInnerHTML={{ __html: detail?.isi_promosi ?? '' }}
          />
        </div>
      </div>

      {promotion.length > 0 && (
        <div className="w-full mx-auto max-w-[1920px] bg-gray-100 py-5">
          <div className="container flex flex-col lg:grid grid-cols-3 gap-5 pb-5">
            <TitleUnderline text={'Lihat Promosi Lainya'} className={'text-start col-span-3'} />
            {promotion?.map((row, k) => (
              <Link href={`/information/promotion/${row?.slug}`} key={k}>
                <div className={'border rounded'}>
                  <Image
                    src={row?.gambar}
                    alt={'gambar'}
                    width={500}
                    height={250}
                    className={'object-cover w-full h-[250px]'}
                  />
                  <div className="w-full bg-white p-2.5 flex flex-col gap-1.5">
                    <p>{row?.judul}</p>
                    <p className="text-sm text-primary flex items-center gap-1.5">
                      <FaRegCalendarAlt />
                      {row?.published_at
                        ? format(row?.published_at, 'dd MMM yyyy', { locale: id })
                        : '-'}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
