'use client'

import { UseGetNewsCategory } from '@/app/information/news/hooks'
import { useRouter, useSearchParams } from 'next/navigation'
import { UseGetNews } from '@/app/homepage/hooks'
import JumbotronTitleV8 from '@/components/thema-v8/component/common/jumbotronTitle'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { SearchInput } from '@/components/common/filter/search'
import { FilterChip } from '@/components/thema-v5/component/common/filterChip'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { PaginationCustom } from '@/components/common/pagination'

const NewsInformationPageV8 = () => {
  const { newsCategory, loading: load3 } = UseGetNewsCategory()

  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const category = searchParams.get('category')
  const page = searchParams.get('page') ?? '1'
  const limit = searchParams.get('limit') ?? '9'

  const {
    news,
    loading: load2,
    meta,
  } = UseGetNews({
    page: page,
    limit: limit,
    search: search ?? '',
    category: category ?? '',
  })

  const router = useRouter()

  const loading = load2 || load3
  if (loading) return <></>

  return (
    <>
      <JumbotronTitleV8 title={'Informasi'} context={'INFORMASI'} />
      <div className="bg-footer">
        <div className="container-sm py-5">
          <div className="bg-blue-50 p-1.5 px-2 rounded">
            <BreadcrumbBasic
              className={'text-primary hover:bg-transparent!'}
              data={[
                { name: 'Beranda', link: '/' },
                { name: 'Information', link: '/information' },
                { name: 'Berita' },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="lg:p-5 bg-footer dark:bg-gray-800">
        <div className="container-sm space-y-4">
          <SearchInput placeholder={'Cari Berita'} className={'w-full bg-white rounded'} />
          <FilterChip
            className={'text-primary border-primary hover:bg-primary'}
            name={'category'}
            data={
              newsCategory?.map((row) => ({
                label: row?.nama_kategori,
                value: row?.slug,
              })) ?? []
            }
          />
        </div>

        <div className="flex flex-col gap-5 container-sm pt-5">
          {news?.map((row, k) => (
            <Link
              href={`/information/news/${row?.slug}`}
              key={k}
              className={'flex flex-col lg:flex-row items-start gap-5'}
            >
              <div className="lg:w-[216px] w-full lg:min-w-[216px] h-[200px] lg:h-[162px] relative">
                <Image
                  src={row?.gambar ?? '/img/noimg.png'}
                  sizes="100vw"
                  alt={'gambar'}
                  fill
                  className={'object-cover object-center w-full h-[162px] rounded-lg'}
                />
              </div>
              <div className={'space-y-2'}>
                <div className={'flex gap-2'}>
                  <p
                    className={
                      'text-primary bg-primary/20 rounded-full px-3 py-1.5 font-semibold text-sm flex items-center gap-1'
                    }
                  >
                    <FaRegCalendarAlt />
                    {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
                  </p>
                  <p className="text-xs bg-primary/20 w-fit rounded-full px-3 py-1.5 text-primary font-semibold">
                    {row?.nama_kategori_berita}
                  </p>
                </div>
                <p className="lg:text-2xl line-clamp-2">{row?.judul}</p>
                <div
                  className={'flex flex-col gap-1.5 html-class line-clamp-3! text-sm!'}
                  dangerouslySetInnerHTML={{ __html: row?.isi_berita ?? '' }}
                />
              </div>
            </Link>
          ))}

          {meta && (
            <PaginationCustom
              meta={meta}
              page={Number(page)}
              onPageChange={(e) => {
                const ParamsQuery = new URLSearchParams(searchParams)
                ParamsQuery.append('page', e.toString())
                router.push(`?${ParamsQuery.toString()}`)
              }}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default NewsInformationPageV8
