'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { TitleContent } from '@/components/thema-v3/component/common/titleContent'
import Image from 'next/image'
import { FaCalendarAlt, FaRegCalendarAlt } from 'react-icons/fa'
import { format, formatDate } from 'date-fns'
import { UseGetNews } from '@/app/homepage/hooks'
import { useRouter, useSearchParams } from 'next/navigation'
import { UseGetNewsCategory } from '@/app/information/news/hooks'
import { SearchInput } from '@/components/common/filter/search'
import { clsx } from 'clsx'
import { SkeletonNewsLoading } from './skeleton'

export const FourNewsNews = () => {
  const { news: TopNews, loading: load1 } = UseGetNews({
    page: '1',
    limit: '4',
  })

  const router = useRouter()
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

  const HandleFilterCategory = (slug: string) => {
    const Params = new URLSearchParams()
    Params.append('category', slug)
    if (slug === '') {
      Params.delete('category')
    }
    if (slug === category) Params.delete('category')
    router.push(`?${Params.toString()}`, { scroll: false })
  }

  const loading = load1 || load2 || load3

  if (loading) return <SkeletonNewsLoading />

  return (
    <>
      <div className={'container py-5 flex flex-col gap-4'}>
        <Link href={'/information'} className={'flex items-center gap-1.5 text-primary'}>
          <ArrowLeft className={'size-4'} /> Kembali
        </Link>

        <TitleContent text={'Berita Program Studi'} line_position={'bottom'} />

        <p>Berita Terbaru</p>

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
            <p className="text-2xl font-semibold text-primary underline underline-offset-8 decoration-primary decoration-[3px]">
              Berita Program Studi
            </p>

            <SearchInput className={'w-full rounded-full bg-white'} placeholder={'Cari Berita'} />

            <ul className={'flex items-center gap-2'}>
              {newsCategory?.map((row, k) => (
                <button
                  onClick={() => {
                    HandleFilterCategory(row?.slug)
                  }}
                  className={clsx(
                    'p-1.5 border px-3 border-primary rounded font-semibold text-primary',
                    category === row?.slug && 'bg-primary text-white'
                  )}
                  key={k}
                >
                  {row?.nama_kategori}
                </button>
              ))}
            </ul>

            <div className="mt-5 grid grid-cols-4 gap-5">
              {news?.map((row, k) => (
                <div className={'w-full rounded overflow-hidden border'} key={k}>
                  <Image
                    src={row?.gambar}
                    alt={'gamabr'}
                    className={'w-full h-[230px]'}
                    width={305}
                    height={230}
                  />
                  <div className="p-2.5 flex flex-col bg-white border border-white">
                    <p className="font-semibold line-clamp-2">{row?.judul}</p>
                    <p className={'flex items-center gap-1.5 text-sm text-gray-500'}>
                      <FaCalendarAlt className={'text-primary'} />
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
