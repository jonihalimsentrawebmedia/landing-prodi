'use client'

import { useParams } from 'next/navigation'
import { UseGetNews } from '@/app/homepage/hooks'
import { UseGetNewsDetail } from '@/app/information/news/hooks'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'
import { MdDateRange } from 'react-icons/md'
import { Folder, QuilWrite } from '@/components/thema-v5/information/component/incon'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'

const DetailNewsPageV11 = () => {
  const { slug } = useParams()
  const { newsDetail } = UseGetNewsDetail((slug as string) ?? '')
  const { news } = UseGetNews({
    no_include_id: newsDetail?.id_berita,
    page: '1',
    limit: '10',
  })

  const temp = [newsDetail?.gambar]
  newsDetail?.berita_gambar_tambahan?.map((row) => temp.push(row?.gambar))

  return (
    <>
      <div className="bg-primary/10">
        <div className="container-sm py-2.5">
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

      <div className="container-sm py-5 space-y-4">
        <div className="flex flex-col lg:flex-row items-start gap-5">
          <div className="w-full lg:w-2/3 space-y-4">
            <p className="lg:text-2xl font-semibold">{newsDetail?.judul}</p>
            <div className="flex items-center gap-2.5">
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
                      src={row ?? '/noimg.png'}
                      alt={'gamabr'}
                      className={'w-full h-[320px] lg:h-[633px] object-cover'}
                      width={1000}
                      height={1000}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div
              className={'flex flex-col gap-1.5 html-class'}
              dangerouslySetInnerHTML={{ __html: newsDetail?.isi_berita ?? '' }}
            />

            <div className="">
              <ShareContent
                classNameShare={'bg-primary! px-2!'}
                title={newsDetail?.judul ?? ''}
                text={'Bagikan'}
              />
            </div>
          </div>

          <div className="lg:w-1/3 space-y-4 w-full">
            <p className="text-2xl font-normal text-white bg-primary px-3 py-1.5 w-fit">
              Berita Terbaru
            </p>

            {news?.map((row, k) => (
              <Link
                href={`/information/news/${row?.slug}`}
                key={k}
                className="flex items-center gap-2"
              >
                <Image
                  src={row?.gambar}
                  alt={'gambar'}
                  width={125}
                  height={92}
                  className={'w-[125px] min-w-[125px] h-[92px] rounded-md object-cover'}
                />
                <div className={'space-y-2.5'}>
                  <p className={'line-clamp-2'}>{row?.judul}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xs py-1.5 px-3 rounded-full font-semibold bg-primary/10 text-primary flex items-center gap-1">
                      <FaRegCalendarAlt />
                      {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM- yyyy') : ''}
                    </p>
                    <p className="text-xs py-1.5 px-3 rounded-full font-semibold bg-primary/10 text-primary flex items-center gap-1">
                      {row?.nama_kategori_berita}
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

export default DetailNewsPageV11
