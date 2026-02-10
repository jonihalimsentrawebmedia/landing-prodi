'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { TitleContent } from '@/components/thema-v3/component/common/titleContent'
import Image from 'next/image'
import { FaCalendarAlt, FaRegCalendarAlt } from 'react-icons/fa'
import { format, formatDate } from 'date-fns'
import { UseGetNews } from '@/app/homepage/hooks'
import { useSearchParams } from 'next/navigation'
import { UseGetNewsCategory } from '@/app/information/news/hooks'
import { SearchInput } from '@/components/common/filter/search'
import { SkeletonNewsLoading } from './skeleton'
import { ChipCategoryNews } from '@/components/thema-v2/information/news/components/chipCategory'

export const FourNewsNews = () => {
  const { news: TopNews, loading: load1 } = UseGetNews({
    page: '1',
    limit: '4',
  })

  const { newsCategory, loading: load3 } = UseGetNewsCategory()

  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const category = searchParams.get('category')
  const newNews = TopNews[0]
  const MoreNewNews = TopNews.slice(1, 4)
  const no_include_id = TopNews.map((row) => row.id_berita).join('|')

  const { news, loading: load2 } = UseGetNews({
    page: '1',
    limit: '10',
    no_include_id: no_include_id,
    search: search ?? '',
    category: category ?? '',
  })

  const loading = load1 || load2 || load3

  if (loading) return <SkeletonNewsLoading />

  return (
    <>
      <div className={'container py-5 flex flex-col gap-2 lg:gap-4'}>
        <Link href={'/information'} className={'flex items-center gap-1.5 text-primary'}>
          <ArrowLeft className={'size-4'} /> Kembali
        </Link>

        <TitleContent text={'Berita Program Studi'} line_position={'bottom'} />

        <p>Berita Terbaru</p>

        <div className="flex flex-col lg:flex-row items-start gap-x-5">
          <div className="w-full lg:w-1/2 flex flex-col lg:gap-2 lg:border-none border">
            <Image
              src={newNews?.gambar ?? '/img/noimg.png'}
              alt={'gambar'}
              className={'w-full h-[250px] lg:h-[465px] object-cover'}
              width={630}
              height={465}
            />
            <Link
              href={`/information/news/${newNews?.slug}`}
              className="p-1.5 lg:p-0 lg:text-2xl font-semibold line-clamp-2"
            >
              {newNews?.judul}
            </Link>
            <p className="lg:text-sm flex items-center gap-1.5 text-primary p-1.5 lg:p-0 text-xs">
              <FaRegCalendarAlt />
              {newNews?.published_at ? format(newNews?.published_at, 'dd MMM yyyy') : ''}
            </p>
            <div
              className="html-class line-clamp-3 p-1.5 lg:p-0"
              dangerouslySetInnerHTML={{ __html: newNews?.isi_berita ?? '' }}
            />
          </div>

          <div className="lg:w-1/2 flex flex-col gap-2.5 lg:gap-5 mt-4 lg:mt-0">
            {MoreNewNews?.map((row, k) => (
              <div key={k} className="flex items-center gap-2 border">
                <Image
                  src={row?.gambar ?? '/img/noimg.png'}
                  alt={'gambar'}
                  className={'w-[88px] h-[88px] lg:w-[214px] lg:h-[194px] object-cover'}
                  width={630}
                  height={465}
                />
                <div className={'flex flex-col gap-2'}>
                  <Link
                    href={`/information/news/${row?.slug}`}
                    className="text-sm lg:text-2xl font-semibold line-clamp-2"
                  >
                    {row?.judul}
                  </Link>
                  <p className="lg:text-sm flex items-center gap-1.5 text-primary text-xs">
                    <FaRegCalendarAlt />
                    {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : ''}
                  </p>

                  <div
                    className="html-class line-clamp-3 hidden lg:line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: row?.isi_berita ?? '' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dark:bg-primary/30 w-full max-w-[1920px] mx-auto">
        <div
          style={{
            backgroundImage: "url('/img/grenbg.png')",
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className={'w-full py-5'}
        >
          <div className="container py-5 space-y-5">
            <p className="lg:text-2xl font-semibold text-primary underline underline-offset-8 decoration-primary decoration-[3px]">
              Berita Program Studi
            </p>

            <SearchInput className={'w-full rounded-full bg-white'} placeholder={'Cari Berita'} />

            <ChipCategoryNews data={newsCategory} />

            <div className="mt-5 grid lg:grid-cols-4 gap-5">
              {news?.map((row, k) => (
                <div className={'w-full rounded overflow-hidden border'} key={k}>
                  <Image
                    src={row?.gambar}
                    alt={'gamabr'}
                    className={'w-full h-[230px]'}
                    width={305}
                    height={230}
                  />
                  <div className="p-2.5 flex flex-col bg-white dark:bg-primary dark:border-primary border border-white">
                    <p className="font-semibold line-clamp-2">{row?.judul}</p>
                    <p className={'flex items-center gap-1.5 text-sm text-gray-500'}>
                      <FaCalendarAlt className={'text-primary dark:text-white'} />
                      {row?.published_at ? formatDate(row?.published_at, 'dd MMM yyyy') : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
