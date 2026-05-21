'use client'

import { useParams } from 'next/navigation'
import { UseGetPromotionDetail } from '@/app/information/promotion/hooks'
import { UseGetPromotion } from '@/app/information/hooks'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { QuilWrite } from '@/components/thema-v5/information/component/incon'
import { MdDateRange } from 'react-icons/md'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'
import React from 'react'

const DetailPromotionV14 = () => {
  const { slug } = useParams()
  const { detailPromotion: detail } = UseGetPromotionDetail((slug as string) ?? '')
  const { promotion } = UseGetPromotion({
    no_include_id: detail?.id_promosi,
    page: '1',
    limit: '10',
  })

  const temp = [detail?.gambar]
  detail?.promosi_gambar_tambahan?.map((row) => temp.push(row?.gambar))

  return (
    <>
      <div className={'bg-footer w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
        <div className="container-sm px-2!">
          <BreadcrumbBasic
            className={'text-white! hover:bg-primary!'}
            data={[
              { name: 'Beranda', link: '/' },
              { name: 'Informasi', link: '/information' },
              { name: 'Promosi' },
            ]}
          />
        </div>
      </div>

      <div className="container-sm lg:py-5 space-y-4 py-2.5">
        <div className="flex items-start gap-5 flex-col lg:flex-row">
          <div className="space-y-4 w-full">
            <p className="lg:text-2xl font-semibold">{detail?.judul}</p>
            <p className="flex items-center gap-1.5">
              <QuilWrite /> {detail?.penulis ?? 'TIM HUMAS'}
            </p>
            <p className="flex items-center gap-1.5">
              <MdDateRange className={'size-6 text-primary'} />
              {detail?.published_at ? format(detail.published_at, 'dd-MM-yyyy') : ''}
            </p>

            <Carousel>
              <CarouselContent>
                {temp?.map((row, k) => (
                  <CarouselItem key={k}>
                    <Image
                      src={row ?? '/noimg.png'}
                      alt={'gamabr'}
                      className={'w-full h-[250px] lg:h-[633px] object-cover'}
                      width={1000}
                      height={1000}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div
              className={'flex flex-col gap-1.5 html-class'}
              dangerouslySetInnerHTML={{ __html: detail?.isi_promosi ?? '' }}
            />

            <div className="">
              <ShareContent
                classNameShare={'bg-primary! px-2!'}
                title={detail?.judul ?? ''}
                text={'Bagikan'}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-sm py-5">
        <div className={'w-full border-b-2 border-b-primary'}>
          <p className="text-sm lg:text-xl w-fit font-semibold bg-primary px-3 py-1.5 text-white">
            Baca Juga
          </p>
        </div>

        <div className="mt-5 grid lg:grid-cols-3 gap-5">
          {promotion?.map((row, k) => (
            <Link
              href={`/information/promotion/${row?.slug}`}
              key={k}
              className={'flex flex-col gap-5 bg-white rounded-lg'}
            >
              <div className={'w-full lg:max-w-full h-[240px] relative overflow-hidden rounded-lg'}>
                <Image
                  src={row?.gambar}
                  alt={'gambar'}
                  fill
                  className={'w-full h-full object-cover'}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary flex items-center gap-1.5 py-1.5 px-3 bg-primary/10 rounded-full w-fit">
                  <FaRegCalendarAlt />
                  {row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}
                </p>
                <p className={'lg:text-2xl line-clamp-2 font-semibold'}>{row?.judul}</p>
                <div
                  className="flex flex-col gap-1.5 html-class line-clamp-3! text-sm! lg:text-base"
                  dangerouslySetInnerHTML={{ __html: row?.isi_promosi }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default DetailPromotionV14
