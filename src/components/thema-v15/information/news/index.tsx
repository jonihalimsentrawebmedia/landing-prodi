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
import { JumbotronTitleV15 } from '@/components/thema-v15/component/common/jumbotronTitle'
import React from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const NewsInformationPageV15 = () => {
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
      <JumbotronTitleV15 title={'Informasi'} context={'INFORMASI'} />
      <div className={'bg-primary w-full'}>
        <div className="container-sm p-2">
          <BreadcrumbBasic
            className={'text-white! hover:bg-[#1F7A63]!'}
            data={[
              { name: 'Beranda', link: '/' },
              { name: 'Informasi', link: '/information' },
              { name: 'Berita' },
            ]}
          />
        </div>
      </div>

      <div className="lg:p-5 bg-white">
        <div className="container-sm lg:max-w-[1280px] mx-auto space-y-4 pt-5 lg:pt-0">
          <Link href={'/information'} className="flex items-center gap-1.5 text-[#1F7A63]">
            <ArrowLeft className={'size-4'} />
            <div className="flex items-center gap-4">
              <h2 className="text-[#1F7A63] text-[24px] font-semibold shrink-0">Berita Program Studi</h2>
              <div className="h-px bg-[#C8C8C8] flex-1" />
            </div>
          </Link>
          <SearchInput placeholder={'Cari Berita'} className={'w-full bg-white rounded border border-[#C8C8C8]'} />
          <FilterChip
            className={'text-[#1F7A63] border-[#1F7A63] hover:bg-primary! data-[state=active]:bg-primary data-[state=active]:text-white'}
            name={'category'}
            data={
              newsCategory?.map((row) => ({
                label: row?.nama_kategori,
                value: row?.slug,
              })) ?? []
            }
          />
        </div>

        <div className="flex flex-col gap-5 mt-8 container-sm lg:max-w-[1280px] mx-auto">
          {news?.map((row, index) => (
            <Link
              href={`/information/news/${row?.slug}`}
              key={index}
              className="flex flex-col lg:flex-row items-start gap-5 p-4 border border-[#C8C8C8] rounded-2xl hover:shadow-md transition-shadow"
            >
              <div className="lg:w-[216px] w-full lg:min-w-[216px] h-[200px] lg:h-[162px] relative">
                <Image
                  src={row?.gambar ?? '/img/noimg.png'}
                  sizes="100vw"
                  alt="gambar"
                  fill
                  className="object-cover object-center rounded-xl"
                />
              </div>
              <div className="space-y-2 flex-1">
                <p className="lg:text-2xl line-clamp-2 text-[#444444] font-semibold">
                  {row?.judul}
                </p>
                <div className="flex gap-2">
                  <p className="text-xs font-semibold text-[#1F7A63] flex items-center gap-1 bg-[#E9F5F2] px-2 py-1 rounded-full">
                    <FaRegCalendarAlt />
                    {row?.tanggal_berita ? format(new Date(row?.tanggal_berita), 'dd-MM-yyyy') : ''}
                  </p>
                  <p className="text-xs font-semibold text-[#1F7A63] bg-[#E9F5F2] px-2 py-1 rounded-full">
                    {row?.nama_kategori_berita}
                  </p>
                </div>
                <div
                  className="flex flex-col gap-1.5 html-class line-clamp-3! text-sm! text-[#444444]"
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
export default NewsInformationPageV15
