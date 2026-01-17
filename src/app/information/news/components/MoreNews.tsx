'use client'

import { UseGetNews } from '@/app/homepage/hooks'
import { CardNewsCol } from '@/app/information/components/cardNewCol'
import { SearchInput } from '@/components/common/filter/search'
import { UseGetNewsCategory } from '@/app/information/news/hooks'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { PaginationCustom } from '@/components/common/pagination'
import {
  CardNewsColSkeleton,
  SkeletonCategoryNews,
} from '@/app/information/news/components/skeleton'
import Link from 'next/link'

interface Props {
  notIncludeId: string
}

export const MoreNews = (props: Props) => {
  const { notIncludeId } = props
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const page = Number(searchParams.get('page')) || 1
  const pathname = usePathname()

  const { newsCategory, loading: load1 } = UseGetNewsCategory()
  const {
    news,
    meta,
    loading: load2,
  } = UseGetNews({
    page: page.toString() || '1',
    limit: '8',
    no_include_id: notIncludeId,
    search: search || '',
    category: searchParams.get('kategori-berita') || '',
  })

  const router = useRouter()

  const HandleSelectCategory = (slug: string) => {
    const ParamsSearch = new URLSearchParams(searchParams)
    ParamsSearch.set('kategori-berita', slug)
    if (slug === '') {
      ParamsSearch.delete('kategori-berita')
    }
    router.push(`?${ParamsSearch.toString()}`)
  }

  return (
    <>
      <div className="bg-primary">
        <div
          className={`w-full py-10`}
          style={{
            backgroundImage: "url('/img/background.png')",
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className={'flex flex-col lg:grid lg:grid-cols-4 gap-5 container'}>
            <div className={'col-span-4'}>
              <p className="lg:mb-5 mb-2.5 underline underline-offset-8 lg:text-2xl font-semibold text-white">
                Berita Program Studi
              </p>
              <SearchInput
                className={'bg-white w-full border border-gray-100 rounded-full pl-4'}
                placeholder={'Cari Berita'}
              />

              {load1 ? (
                <SkeletonCategoryNews />
              ) : (
                <ul className={'flex whitespace-nowrap flex-nowrap gap-5 overflow-x-auto mt-5 pb-2'}>
                  <li
                    onClick={() => HandleSelectCategory('')}
                    className={'bg-white text-primary p-1.5 px-4 cursor-pointer rounded'}
                  >
                    Semua
                  </li>
                  {newsCategory?.map((item, k) => (
                    <li
                      className={'bg-white text-primary p-1.5 px-4 cursor-pointer rounded'}
                      onClick={() => {
                        HandleSelectCategory(item?.slug)
                      }}
                      key={k}
                    >
                      {item?.nama_kategori}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {load2 ? (
              Array.from({ length: 8 }).map((_, i) => <CardNewsColSkeleton key={i} />)
            ) : (
              <div className={'col-span-4 flex flex-nowrap w-full gap-x-5 overflow-x-auto lg:overflow-hidden lg:grid grid-cols-4 gap-5'}>
                {news?.map((item, l) => (
                  <Link href={`/information/news/${item?.slug}`} key={l}>
                    <CardNewsCol
                      titleClassName={'text-base'}
                      className={'w-full h-[180px] lg:min-w-full min-w-[290px] lg:h-[300px]'}
                      item={item}
                    />
                  </Link>
                ))}
              </div>
            )}

            <div className="col-span-4">
              {meta && page <= meta.last_page && (
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
      </div>
    </>
  )
}
