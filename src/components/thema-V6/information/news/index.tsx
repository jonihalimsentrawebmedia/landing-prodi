'use client'

import { UseGetNewsCategory } from '@/app/information/news/hooks'
import { useRouter, useSearchParams } from 'next/navigation'
import { UseGetNews } from '@/app/homepage/hooks'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { SearchInput } from '@/components/common/filter/search'
import { FilterChip } from '@/components/thema-v5/component/common/filterChip'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { PaginationCustom } from '@/components/common/pagination'
import Link from 'next/link'

const NewsInformationPageV6 = () => {
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
      <ProfileLayout title={'Informasi'} context={'INFORMASI'}>
        <div className={'bg-footer w-full max-w-[1920px] mx-auto p-4'}>
          <div className="container-sm">
            <BreadcrumbBasic
              data={[
                { name: 'Beranda', link: '/' },
                { name: 'Informasi', link: '/information' },
                { name: 'Berita' },
              ]}
            />
          </div>
        </div>
        <div className="lg:p-5 bg-primary/10 dark:bg-gray-800">
          <div className="container-sm py-5 space-y-4">
            <SearchInput placeholder={'Cari Berita'} className={'w-full bg-white rounded'} />
            <FilterChip
              name={'category'}
              data={
                newsCategory?.map((row) => ({
                  label: row?.nama_kategori,
                  value: row?.slug,
                })) ?? []
              }
            />

            <div className="w-full grid lg:grid-cols-3 gap-5 mt-10">
              {news?.map((row, k) => (
                <Link
                  href={`/information/news/${row?.slug}`}
                  key={k}
                  className={'flex flex-col gap-4'}
                >
                  <div className={'w-full h-[308px] relative overflow-hidden rounded-lg'}>
                    <Image
                      src={row?.gambar}
                      alt={'gambar'}
                      fill
                      className={'w-full h-full object-cover'}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-footer flex items-center gap-1">
                      <FaRegCalendarAlt className={'size-4'} />
                      {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
                    </p>
                    <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-footer flex items-center gap-1">
                      {row?.nama_kategori_berita}
                    </p>
                  </div>
                  <p className={'text-2xl line-clamp-2 font-semibold'}>{row?.judul}</p>
                  <div
                    className="flex flex-col gap-1.5 html-class line-clamp-3!"
                    dangerouslySetInnerHTML={{ __html: row?.isi_berita }}
                  />
                </Link>
              ))}
            </div>

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
      </ProfileLayout>
    </>
  )
}

export default NewsInformationPageV6
