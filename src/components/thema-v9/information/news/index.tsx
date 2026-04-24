'use client'

import { UseGetNewsCategory } from '@/app/information/news/hooks'
import { useRouter, useSearchParams } from 'next/navigation'
import { UseGetNews } from '@/app/homepage/hooks'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { SearchInput } from '@/components/common/filter/search'
import { FilterChip } from '@/components/thema-v5/component/common/filterChip'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { PaginationCustom } from '@/components/common/pagination'
import JumbotronTitleV9 from '@/components/thema-v9/component/common/jumbotronTitle'

const NewsInformationPageV9 = () => {
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
      <JumbotronTitleV9 title={'Informasi'} context={'INFORMASI'} />
      <div className="bg-primary">
        <div className="container-sm py-5">
          <div className="p-1.5 px-2 rounded">
            <BreadcrumbBasic
              className={'text-white hover:bg-transparent!'}
              data={[{ name: 'Beranda', link: '/' }, { name: 'Berita' }]}
            />
          </div>
        </div>
      </div>

      <div className="lg:p-5 bg-primary/10 dark:bg-gray-800">
        <div className="container-sm space-y-4 pt-5 lg:pt-0">
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

        <div className="grid lg:grid-cols-3 gap-5 container-sm pt-5">
          {news?.map((row, k) => (
            <Link
              key={k}
              href={`/information/news/${row?.slug}`}
              className="w-full p-6 bg-white rounded-lg border"
            >
              <div className="w-full h-[250px] relative">
                <Image
                  src={row?.gambar ?? '/img/noimg.png'}
                  sizes="100vw"
                  alt={'gambar'}
                  fill
                  className={'object-cover object-center w-full h-[435px] rounded-lg'}
                />
              </div>
              <div className="space-y-4 mt-4">
                <div className={'flex gap-2'}>
                  <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-primary flex items-center gap-1">
                    <FaRegCalendarAlt className={'size-4'} />
                    {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
                  </p>
                  <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-primary">
                    {row?.nama_kategori_berita}
                  </p>
                </div>
                <p className="text-xl text-primary font-semibold line-clamp-2">{row?.judul}</p>
                <div
                  className="flex flex-col line-clamp-3! text-sm! items-center gap-2 html-class"
                  dangerouslySetInnerHTML={{ __html: row?.isi_berita ?? '' }}
                />
              </div>
            </Link>
          ))}
        </div>

        {meta && (
          <div className={'py-4'}>
            <PaginationCustom
              meta={meta}
              page={Number(page)}
              onPageChange={(e) => {
                const ParamsQuery = new URLSearchParams(searchParams)
                ParamsQuery.append('page', e.toString())
                router.push(`?${ParamsQuery.toString()}`)
              }}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default NewsInformationPageV9
