'use client'

import { SearchInput } from '@/components/common/filter/search'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { UseGetNewsCategory } from '@/app/information/news/hooks'
import { ChipCategoryNews } from './chipCategory'
import { PaginationCustom } from '@/components/common/pagination'
import { NewsInformationAllSkeleton } from './skeleton'
import { UseGetNews } from '@/app/homepage/hooks'
import { CardNewsItem } from '@/components/thema-v2/component/common/cardNews'

export const MoreNews = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const page = Number(searchParams.get('page')) || 1

  const router = useRouter()
  const pathname = usePathname()

  const { newsCategory, loading: load1 } = UseGetNewsCategory()
  const {
    news,
    meta,
    loading: load2,
  } = UseGetNews({
    page: page.toString() || '1',
    limit: '10',
    search: search || '',
    category: searchParams.get('category') || '',
  })

  const loading = load1 || load2

  if (loading) return <NewsInformationAllSkeleton />

  return (
    <>
      <div className={'mt-5'}>
        <div className={'flex flex-col lg:grid lg:grid-cols-4 gap-5 container'}>
          <Link href={'/information'} className={'flex items-center gap-1.5'}>
            <ArrowLeft className={'size-4'} />
            Kembali
          </Link>
          <div className={'col-span-4'}>
            <p className="lg:mb-5 mb-2.5 underline underline-offset-8 lg:text-2xl font-semibold text-primary dark:text-white">
              Berita Program Studi
            </p>
            <SearchInput
              className={'bg-white w-full border border-primary rounded-full pl-4 mb-4'}
              placeholder={'Cari Berita'}
            />
            <ChipCategoryNews data={newsCategory} />
          </div>

          <div
            className={`col-span-4 pb-2 flex flex-nowrap w-full gap-x-5 overflow-x-auto lg:overflow-hidden lg:grid grid-cols-4 gap-5`}
          >
            {news?.map((item, k) => (
              <Link href={`/information/news/${item?.slug}`} key={k} className={'min-w-[280px]'}>
                <CardNewsItem
                  gambar={item?.gambar}
                  judul={item?.judul}
                  isi_berita={item?.isi_berita}
                  published_at={item?.published_at as string}
                />
              </Link>
            ))}
          </div>

          <div className="col-span-4 pb-4">
            {meta && page < meta.last_page && (
              <PaginationCustom
                meta={meta}
                page={page}
                onPageChange={(e) => {
                  const ParamSearch = new URLSearchParams(searchParams)
                  ParamSearch.set('page', e.toString())
                  router.push(pathname + '?' + ParamSearch.toString())
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
