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
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'
import React from 'react'
import { cn } from '@/lib/utils'

const DetailPromotionV16 = () => {
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
      <div className="bg-[#0F766E] w-full">
        <div className="container-sm p-2">
          <BreadcrumbBasic
            className={'text-white! hover:bg-[#0F766E]!'}
            data={[
              { name: 'Beranda', link: '/' },
              { name: 'Informasi', link: '/information' },
              { name: 'Promosi' },
            ]}
          />
        </div>
      </div>

      <div className="container-sm lg:max-w-[1280px] mx-auto lg:py-5 space-y-4 py-2.5">
        <div className="flex items-start gap-5 flex-col lg:flex-row">
          <div className="space-y-4 w-full">
            <p className="lg:text-2xl font-semibold text-[#1F2937]">{detail?.judul}</p>
            <p className="flex items-center gap-1.5 text-[#444444]">
              <QuilWrite /> {detail?.penulis ?? 'TIM HUMAS'}
            </p>
            <p className="flex items-center gap-1.5 text-[#444444]">
              <MdDateRange className={'size-6 text-[#0F766E]'} />
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
              {temp?.length > 1 && (
                <>
                  <CarouselNext className={'right-0 bg-[#0F766E] text-white'} />
                  <CarouselPrevious className={'left-0 bg-[#0F766E] text-white'} />
                </>
              )}
            </Carousel>

            <div
              className={'flex flex-col gap-1.5 html-class'}
              dangerouslySetInnerHTML={{ __html: detail?.isi_promosi ?? '' }}
            />

            <div className="">
              <ShareContent
                classNameShare={'bg-[#0F766E]! px-2!'}
                title={detail?.judul ?? ''}
                text={'Bagikan'}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-sm lg:max-w-[1280px] mx-auto py-5">
        <div className="flex items-center gap-2 w-full">
          <div className="border-l-4 border-b-4 border-[#CDA327] px-4 py-2">
            <h2 className={cn('font-sora text-[25px] leading-[38px] font-normal text-[#0F766E] whitespace-nowrap')}>
              Baca Juga
            </h2>
          </div>
        </div>

        <div className="mt-5 grid lg:grid-cols-3 gap-5">
          {promotion?.map((row, k) => (
            <Link
              href={`/information/promotion/${row?.slug}`}
              key={k}
              className="flex flex-col gap-5 bg-white border border-[#C8C8C8] rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className={'w-full lg:max-w-full h-[240px] relative overflow-hidden rounded-t-2xl'}>
                <Image
                  src={row?.gambar}
                  alt={'gambar'}
                  fill
                  className={'w-full h-full object-cover'}
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-[#0F766E] flex items-center gap-1.5 py-1.5 px-3 bg-[#E9F5F2] rounded-full w-fit">
                  <FaRegCalendarAlt />
                  {row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}
                </p>
                <p className="lg:text-2xl line-clamp-2 font-semibold text-[#444444] mt-2">{row?.judul}</p>
                <div
                  className="flex flex-col gap-1.5 html-class line-clamp-3! text-sm! lg:text-base text-[#444444]"
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

export default DetailPromotionV16
