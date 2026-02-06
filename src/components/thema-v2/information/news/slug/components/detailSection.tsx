'use client'

import { UseGetNewsDetail } from '@/app/information/news/hooks'
import { useParams } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { format } from 'date-fns'
import { FaRegCalendarAlt, FaUser } from 'react-icons/fa'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { UseGetNews } from '@/app/homepage/hooks'
import { TitleUnderline } from '@/components/thema-v2/component/common/titleUnderLine'
import { CardNewsItem } from '@/components/thema-v2/component/common/cardNews'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'

export const DetailSectionNews = () => {
  const { slug } = useParams()
  const { newsDetail } = UseGetNewsDetail((slug as string) ?? '')
  const { news } = UseGetNews({
    no_include_id: newsDetail?.id_berita ?? '',
    id_category: newsDetail?.id_kategori_berita ?? '',
    limit: '4',
    page: '1',
  })

  const tempImage = []
  tempImage.push(newsDetail?.gambar)
  newsDetail?.berita_gambar_tambahan?.map((item) => tempImage.push(item.gambar))

  return (
    <>
      <div className={'container py-5'}>
        <Link href={'/information/news'} className={'flex items-center gap-1.5'}>
          <ArrowLeft className={'size-4'} />
          Kembali
        </Link>

        <div className="w-full h-full lg:p-5 bg-primary-foreground dark:bg-primary rounded-md my-2">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-5">
            <div className="lg:w-7/12 w-full p-2.5 lg:p-0">
              <h1 className={'text-sm lg:text-2xl font-semibold text-primary dark:text-white'}>
                {newsDetail?.judul}
              </h1>
              <div className="grid grid-cols-2 lg:grid-cols-[12rem_1fr] gap-2.5 text-primary dark:text-white text-sm mt-2">
                <p className={'flex items-center gap-1.5'}>
                  <FaRegCalendarAlt className={'size-4'} />
                  Diupload
                </p>
                <p>
                  {newsDetail?.published_at ? format(newsDetail?.published_at, 'dd MMM yyyy') : ''}
                </p>
                <p className={'flex items-center gap-1.5'}>
                  <FaUser className={'size-4'} />
                  Penulis
                </p>
                <p>{newsDetail?.penulis}</p>
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
                        className={`object-cover lg:object-contain bg-gray-100 dark:bg-primary-foreground/10 shadow-lg drop-shadow-lg rounded w-full h-[200px] lg:h-[300px]`}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>

        <div className="lg:max-w-4xl mx-auto mt-5">
          <ShareContent text={'Bagikan Berita'} title={newsDetail?.judul ?? ''} />
          <div
            className="html-class mt-5 flex flex-col gap-4"
            dangerouslySetInnerHTML={{ __html: newsDetail?.isi_berita ?? '' }}
          />
        </div>
      </div>

      {news.length > 0 && (
        <div className="w-full mx-auto max-w-[1920px] bg-gray-100 dark:bg-primary/50 py-5">
          <div className="container flex flex-col lg:grid grid-cols-3 gap-5 pb-5">
            <TitleUnderline text={'Baca Berita Lainya'} className={'text-start col-span-3'} />
            {news?.map((row, k) => (
              <Link href={`/information/news/${row?.slug}`} key={k}>
                <CardNewsItem
                  judul={row?.judul}
                  gambar={row?.gambar}
                  published_at={row?.published_at ?? ''}
                  isi_berita={row?.isi_berita}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
