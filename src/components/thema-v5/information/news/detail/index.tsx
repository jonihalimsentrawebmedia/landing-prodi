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

const DetailNewsPageV5 = () => {
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
      <div className="bg-footer">
        <div className="container py-2.5">
          <BreadcrumbBasic
            data={[
              { name: 'Beranda', link: '/' },
              { name: 'Informasi', link: '/information' },
              { name: 'Berita', link: '/information/news' },
              { name: newsDetail?.judul ?? '' },
            ]}
          />
        </div>
      </div>

      <div className="container py-5 space-y-4">
        <div className="flex flex-col lg:flex-row items-start gap-5">
          <div className="w-full lg:w-3/4 space-y-4">
            <p className="lg:text-2xl font-semibold">{newsDetail?.judul}</p>
            <p className="flex items-center gap-1.5">
              <QuilWrite /> {newsDetail?.penulis ?? 'TIM HUMAS'}
            </p>
            <p className="flex items-center gap-1.5">
              <MdDateRange className={'size-6 text-footer'} />
              {newsDetail?.tanggal_berita ? format(newsDetail.tanggal_berita, 'dd-MM-yyyy') : ''}
            </p>
            <p className="flex items-center gap-1.5">
              <Folder /> {newsDetail?.nama_kategori_berita ?? 'TIM HUMAS'}
            </p>

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
          </div>

          <div className="lg:w-1/4 space-y-4 w-full">
            <p className="text-2xl font-normal text-white bg-footer px-3 py-1.5 w-fit">Baca Juga</p>

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
                <div>
                  <p className="text-sm text-primary font-semibold">
                    {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
                  </p>
                  <p className={'line-clamp-2'}>{row?.judul}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailNewsPageV5
