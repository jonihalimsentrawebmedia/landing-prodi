'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { UseGetNewsDetail } from '@/app/information/news/hooks'
import { useParams } from 'next/navigation'
import { UseGetNews } from '@/app/homepage/hooks'
import { FaRegCalendarAlt, FaUser } from 'react-icons/fa'
import { format } from 'date-fns'
import Image from 'next/image'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'
import { CardNewsTheme3 } from '@/components/thema-v3/component/common/CardNews'
import { NewsDetailSectionSkeleton } from '@/components/thema-v3/information/news/slug/component/skeleton'

export const NewsDetailSection = () => {
  const { slug } = useParams()
  const { newsDetail, loading: load1 } = UseGetNewsDetail((slug as string) ?? '')

  const { news, loading: load2 } = UseGetNews({
    page: '1',
    limit: '3',
    no_include_id: newsDetail?.id_berita ?? '',
    id_category: newsDetail?.id_kategori_berita,
  })

  const loading = load1 || load2

  if (loading) return <NewsDetailSectionSkeleton />

  return (
    <>
      <div className={'container py-5 flex flex-col gap-4'}>
        <Link href={'/information'} className={'flex items-center gap-1.5 text-primary'}>
          <ArrowLeft className={'size-4'} /> Kembali
        </Link>

        <div className="flex items-start gap-x-5">
          <div className="w-full">
            <div className="w-full py-5 bg-primary-foreground p-2.5 mb-4">
              <p className={'text-2xl font-semibold dark:text-primary'}>{newsDetail?.judul}</p>
              <div className="grid grid-cols-2 w-fit gap-2.5 text-primary mt-2">
                <p className={'flex items-center gap-1.5'}>
                  <FaRegCalendarAlt /> Diupload
                </p>
                <p>
                  :{' '}
                  {newsDetail?.published_at ? format(newsDetail?.published_at, 'dd MMM yyyy') : '-'}
                </p>
                <p className={'flex items-center gap-1.5'}>
                  <FaUser /> Penulis
                </p>
                <p>: {newsDetail?.penulis}</p>
              </div>
            </div>

            <Image
              src={newsDetail?.gambar ?? '/img/noimg.png'}
              alt={'gambar'}
              className={'w-full h-[555px]'}
              width={925}
              height={555}
            />

            <div className="my-4">
              <ShareContent title={newsDetail?.judul ?? ''} text={'Bagikan Berita'} />
            </div>

            <div
              className="html-class flex flex-col gap-5"
              dangerouslySetInnerHTML={{ __html: newsDetail?.isi_berita ?? '' }}
            />
          </div>

          <div className="w-full lg: max-w-[335px] flex flex-col gap-5">
            {news?.map((row, k) => (
              <CardNewsTheme3 data={row} key={k} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
