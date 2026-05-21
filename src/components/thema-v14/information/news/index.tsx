'use client'

import { UseGetNewsCategory } from '@/app/information/news/hooks'
import { useRouter, useSearchParams } from 'next/navigation'
import { UseGetNews } from '@/app/homepage/hooks'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { SearchInput } from '@/components/common/filter/search'
import { FilterChip } from '@/components/thema-v5/component/common/filterChip'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { PaginationCustom } from '@/components/common/pagination'
import { JumbotronTitleV14 } from '@/components/thema-v14/component/common/jumbotronTitle'
import React from 'react'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const NewsInformationPageV14 = () => {
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
      <JumbotronTitleV14 title={'Informasi'} context={'INFORMASI'} />
      <div className={'bg-footer w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
        <div className="container-sm px-2!">
          <BreadcrumbBasic
            className={'text-white! hover:bg-primary!'}
            data={[
              { name: 'Beranda', link: '/' },
              { name: 'Informasi', link: '/information' },
              { name: 'Berita' },
            ]}
          />
        </div>
      </div>

      <div className="lg:p-5 bg-white dark:bg-gray-800">
        <div className="container-sm space-y-4 pt-5 lg:pt-0">
          <Link href={'/information'} className="flex items-center gap-1.5">
            <ArrowLeft className={'size-4'} />
            <TitleLine text={'Berita Program Studi'} />
          </Link>
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

        <div className="hidden lg:grid grid-cols-3 flex-col gap-6 lg:gap-8 mt-8 container-sm">
          {news?.map((row, index) => (
            <Link
              href={`/information/news/${row?.slug}`}
              key={index}
              className={'flex flex-col items-stretch gap-4'}
            >
              <Image
                src={row?.gambar}
                alt={'gambr'}
                width={248}
                height={212}
                className={'object-cover rounded-lg w-full h-[213px]'}
              />

              <div className={'w-full space-y-4'}>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 bg-primary/10 border border-primary text-primary text-xs font-semibold px-4 py-1.5 rounded-full">
                    <FaRegCalendarAlt className="size-4" />
                    {row?.tanggal_berita ? format(new Date(row?.tanggal_berita), 'dd-MM-yyyy') : ''}
                  </div>
                  <div className="bg-primary/10 border border-primary text-primary text-xs font-semibold px-4 py-1.5 rounded-full">
                    {row?.nama_kategori_berita}
                  </div>
                </div>
                <p className="text-2xl font-semibold line-clamp-2">{row?.judul}</p>
                <div
                  className={'flex items-center gap-2 html-class line-clamp-3! html-class'}
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
export default NewsInformationPageV14
