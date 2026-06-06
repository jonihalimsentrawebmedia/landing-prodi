'use client'

import { useParams } from 'next/navigation'
import { UseGetNewsDetail } from '@/app/information/news/hooks'
import { UseGetNews } from '@/app/homepage/hooks'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { Folder, QuilWrite } from '@/components/thema-v5/information/component/incon'
import { MdDateRange } from 'react-icons/md'
import { format } from 'date-fns'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'
import Link from 'next/link'
import { FaRegCalendarAlt } from 'react-icons/fa'
import React from 'react'
import { cn } from '@/lib/utils'

const DetailNewsPageV16 = () => {
  const { slug } = useParams()
  const { newsDetail } = UseGetNewsDetail((slug as string) ?? '')
  const { news } = UseGetNews({
    no_include_id: newsDetail?.id_berita,
    page: '1',
    limit: '4',
  })

  const temp = [newsDetail?.gambar]
  newsDetail?.berita_gambar_tambahan?.map((row) => temp.push(row?.gambar))

  return (
    <>
      <div className="bg-[#0F766E] w-full">
        <div className="container-sm p-2">
          <BreadcrumbBasic
            className={'text-white! hover:bg-[#0F766E]!'}
            data={[
              { name: 'Beranda', link: '/' },
              { name: 'Informasi', link: '/information' },
              { name: 'Berita', link: '/information/news' },
              { name: newsDetail?.judul ?? '' },
            ]}
          />
        </div>
      </div>

      <div className="bg-white py-5">
        <div className="container-sm lg:max-w-[1280px] mx-auto space-y-4">
          <p className="lg:text-3xl font-semibold text-[#1F2937]">{newsDetail?.judul}</p>
          <div className="flex lg:flex-row flex-col items-start gap-4">
            <div className="flex items-center gap-1.5">
              <div className={'p-2.5 rounded-full bg-[#0F766E]'}>
                <QuilWrite color={'white'} />
              </div>
              <span className="text-[#444444]">{newsDetail?.penulis ?? 'TIM HUMAS'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className={'p-2.5 rounded-full bg-[#0F766E]'}>
                <MdDateRange className={'size-6 text-white'} />
              </div>
              <span className="text-[#444444]">{newsDetail?.tanggal_berita ? format(newsDetail.tanggal_berita, 'dd-MM-yyyy') : ''}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className={'p-2.5 rounded-full bg-[#0F766E]'}>
                <Folder color={'white'} />
              </div>
              <span className="text-[#444444]">{newsDetail?.nama_kategori_berita ?? 'TIM HUMAS'}</span>
            </div>
          </div>

          <Carousel>
            <CarouselContent>
              {temp?.map((row, k) => (
                <CarouselItem key={k}>
                  <Image
                    src={row ?? '/img/noimg.png'}
                    alt={'gambar'}
                    width={1920}
                    height={640}
                    className={'w-full h-[300px] lg:h-[640px] object-cover'}
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
            className="flex flex-col gap-1.5 html-class"
            dangerouslySetInnerHTML={{ __html: newsDetail?.isi_berita ?? '' }}
          />

          <ShareContent
            classNameShare={'bg-[#0F766E]! px-2.5!'}
            title={newsDetail?.judul ?? ''}
            text={'bagikan'}
          />

          <div className="flex items-center gap-2 w-full">
            <div className="border-l-4 border-b-4 border-[#CDA327] px-4 py-2">
              <h2 className={cn('font-sora text-[25px] leading-[38px] font-normal text-[#0F766E] whitespace-nowrap')}>
                Baca Juga
              </h2>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-5">
            {news?.map((row, index) => (
              <Link
                href={`/information/news/${row?.slug}`}
                key={index}
                className="flex flex-col lg:flex-row items-start gap-5 p-4 border border-[#C8C8C8] rounded-2xl hover:shadow-md transition-shadow"
              >
                <div className="lg:w-[216px] w-full lg:min-w-[216px] h-[200px] lg:h-[162px] relative overflow-hidden rounded-xl">
                  <Image
                    src={row?.gambar ?? '/img/noimg.png'}
                    sizes="100vw"
                    alt="gambar"
                    fill
                    className="object-cover object-center group-hover:scale-110 transition ease-in-out duration-500"
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <p className="lg:text-2xl line-clamp-2 text-[#444444] font-semibold">
                    {row?.judul}
                  </p>
                  <div className="flex gap-2">
                    <p className="text-xs font-semibold text-[#0F766E] flex items-center gap-1 bg-[#E9F5F2] px-2 py-1 rounded-full">
                      <FaRegCalendarAlt />
                      {row?.tanggal_berita ? format(new Date(row?.tanggal_berita), 'dd-MM-yyyy') : ''}
                    </p>
                    <p className="text-xs font-semibold text-[#0F766E] bg-[#E9F5F2] px-2 py-1 rounded-full">
                      {row?.nama_kategori_berita}
                    </p>
                  </div>
                  <div
                    className="flex flex-col gap-1.5 html-class line-clamp-3! text-sm! text-[#444444]"
                    dangerouslySetInnerHTML={{ __html: row?.isi_berita ?? '' }}
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

export default DetailNewsPageV16
