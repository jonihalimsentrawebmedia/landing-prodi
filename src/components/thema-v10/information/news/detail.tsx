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

const DetailNewsPageV10 = () => {
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
          <div className="flex flex-col items-start gap-2.5">
            <p className="flex items-center gap-1.5">
              <QuilWrite /> {newsDetail?.penulis ?? 'TIM HUMAS'}
            </p>
            <p className="flex items-center gap-1.5">
              <MdDateRange className={'size-6 text-primary'} />
              {newsDetail?.tanggal_berita ? format(newsDetail.tanggal_berita, 'dd-MM-yyyy') : ''}
            </p>
            <p className="flex items-center gap-1.5">
              <Folder /> {newsDetail?.nama_kategori_berita ?? 'TIM HUMAS'}
            </p>
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

          <div className="mt-5 grid lg:grid-cols-2 gap-4">
            {news?.map((row, k) => (
              <Link
                key={k}
                href={`/information/news/${row?.slug}`}
                className="w-full p-6 bg-white rounded-lg border flex gap-5"
              >
                <div className="w-full min-w-[265px] lg:w-full h-[200px] relative">
                  <Image
                    src={row?.gambar ?? '/img/noimg.png'}
                    sizes="100vw"
                    alt={'gambar'}
                    fill
                    className={'object-cover object-center w-full h-[435px] rounded-lg'}
                  />
                </div>
                <div className="space-y-1.5 mt-4">
                  <div className={'flex gap-2'}>
                    <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-primary flex items-center gap-1">
                      <FaRegCalendarAlt className={'size-4'} />
                      {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
                    </p>
                    <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-primary">
                      {row?.nama_kategori_berita}
                    </p>
                  </div>
                  <p className="text-primary font-semibold line-clamp-2">{row?.judul}</p>
                  <div
                    className="flex flex-col line-clamp-3! text-sm! items-center gap-2 html-class"
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

export default DetailNewsPageV10
