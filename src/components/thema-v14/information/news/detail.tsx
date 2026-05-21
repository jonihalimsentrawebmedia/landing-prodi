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

const DetailNewsPageV14 = () => {
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
      <div className="container-sm py-5">
        <div className="bg-blue-50 p-1.5 px-2 rounded">
          <BreadcrumbBasic
            className={'text-primary hover:bg-transparent!'}
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
        <div className="container-sm space-y-4">
          <p className="lg:text-3xl font-semibold">{newsDetail?.judul}</p>
          <div className="flex flex-row items-start gap-4">
            <div className="flex items-center gap-1.5">
              <div className={'p-2.5 rounded-full bg-primary'}>
                <QuilWrite color={'white'} />
              </div>
              {newsDetail?.penulis ?? 'TIM HUMAS'}
            </div>
            <div className="flex items-center gap-1.5">
              <div className={'p-2.5 rounded-full bg-primary'}>
                <MdDateRange className={'size-6 text-white'} />
              </div>
              {newsDetail?.tanggal_berita ? format(newsDetail.tanggal_berita, 'dd-MM-yyyy') : ''}
            </div>
            <div className="flex items-center gap-1.5">
              <div className={'p-2.5 rounded-full bg-primary'}>
                <Folder color={'white'} />
              </div>
              {newsDetail?.nama_kategori_berita ?? 'TIM HUMAS'}
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
                <CarouselNext className={'right-0 bg-primary text-white'} />
                <CarouselPrevious className={'left-0 bg-primary text-white'} />
              </>
            )}
          </Carousel>

          <div
            className="flex flex-col gap-1.5 html-class"
            dangerouslySetInnerHTML={{ __html: newsDetail?.isi_berita ?? '' }}
          />

          <ShareContent
            classNameShare={'bg-primary! px-2.5!'}
            title={newsDetail?.judul ?? ''}
            text={'bagikan'}
          />

          <div className={'w-full border-b-2 border-b-primary'}>
            <p className="text-xl w-fit font-semibold bg-primary px-3 py-1.5 text-white">
              Baca Juga
            </p>
          </div>

          <div className="mt-5 grid lg:grid-cols-3 gap-5">
            {news?.map((row, index) => (
              <Link
                href={`/information/news/${row?.slug}`}
                key={index}
                className={'flex flex-col items-stretch gap-4 group'}
              >
                <div className="w-full relative h-[230px] overflow-hidden rounded-lg">
                  <Image
                    src={row?.gambar}
                    alt={'gambr'}
                    className={
                      'object-cover group-hover:scale-110 transition ease-in-out  duration-500'
                    }
                    fill
                  />
                </div>

                <div className={'w-full space-y-4'}>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 bg-primary/10 border border-primary text-primary text-xs font-semibold px-4 py-1.5 rounded-full">
                      <FaRegCalendarAlt className="size-4" />
                      {row?.tanggal_berita
                        ? format(new Date(row?.tanggal_berita), 'dd-MM-yyyy')
                        : ''}
                    </div>
                    <div className="bg-primary/10 border border-primary text-primary text-xs font-semibold px-4 py-1.5 rounded-full">
                      {row?.nama_kategori_berita}
                    </div>
                  </div>
                  <p className="text-2xl font-semibold line-clamp-2">{row?.judul}</p>
                  <div
                    className={'flex items-center gap-2 html-class line-clamp-3! html-class'}
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

export default DetailNewsPageV14
