'use client'

import Link from 'next/link'
import { TitleContent } from '@/components/thema-v3/component/common/titleContent'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { UseGetNews } from '@/app/homepage/hooks'
import { SkeletonFourNews } from './skeleton/index'
import { Button } from '@/components/ui/button'

export const NewNewsFourTheme4 = () => {
  const { news: TopNews, loading: load1 } = UseGetNews({
    page: '1',
    limit: '4',
  })
  const newNews = TopNews[0]
  const MoreNewNews = TopNews.slice(1, 4)

  if (load1) return <SkeletonFourNews />

  return (
    <>
      <div className={'container py-5 flex flex-col gap-4'}>
        <TitleContent text={'Berita Program Studi'} line_position={'bottom'} />

        <div className="flex items-start gap-x-5">
          <div className="w-1/2 flex flex-col gap-2">
            <Image
              src={newNews?.gambar ?? '/img/noimg.png'}
              alt={'gambar'}
              className={'w-full h-[465px] object-cover'}
              width={630}
              height={465}
            />
            <Link
              href={`/information/news/${newNews?.slug}`}
              className="text-2xl font-semibold line-clamp-2"
            >
              {newNews?.judul}
            </Link>
            <p className="text-sm flex items-center gap-1.5 text-primary">
              <FaRegCalendarAlt />
              {newNews?.published_at ? format(newNews?.published_at, 'dd MMM yyyy') : ''}
            </p>

            <div
              className="html-class line-clamp-3"
              dangerouslySetInnerHTML={{ __html: newNews?.isi_berita ?? '' }}
            />
          </div>

          <div className="w-1/2 flex flex-col gap-5">
            {MoreNewNews?.map((row, k) => (
              <div key={k} className="flex items-center gap-2">
                <Image
                  src={row?.gambar ?? '/img/noimg.png'}
                  alt={'gambar'}
                  className={'w-[214px] h-[194px] object-cover'}
                  width={630}
                  height={465}
                />
                <div className={'flex flex-col gap-2'}>
                  <Link
                    href={`/information/news/${row?.slug}`}
                    className="text-2xl font-semibold line-clamp-2"
                  >
                    {row?.judul}
                  </Link>
                  <p className="text-sm flex items-center gap-1.5 text-primary">
                    <FaRegCalendarAlt />
                    {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : ''}
                  </p>

                  <div
                    className="html-class line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: row?.isi_berita ?? '' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link href={'/information/news'} className="flex items-center justify-center mt-5">
          <Button
            variant={'outline'}
            className={'border-primary text-primary hover:text-primary rounded-full'}
          >
            Lihat Berita Lainnya
          </Button>
        </Link>
      </div>
    </>
  )
}
