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
import JumbotronTitleV13 from '@/components/thema-v13/component/common/jumbotronTitle'

const NewsInformationPageV13 = () => {
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
      <JumbotronTitleV13 title={'Profile'} context={'PROFIL'} />
      <div className="w-full bg-primary p-2">
        <div className="container-sm py-5 px-2! lg:px-0">
          <BreadcrumbBasic
            className={'text-white hover:bg-transparent!'}
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

        <div className="hidden lg:flex flex-col gap-6 lg:gap-8 mt-8 container-sm">
          {news?.map((row) => (
            <Link
              key={row.id_berita}
              href={`/information/news/${row.slug}`}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-300 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-6 flex gap-5">
                <div className="relative w-full max-w-[216px] h-[162px] lg:h-[162px]">
                  <Image
                    src={row.gambar ?? '/img/noimg.png'}
                    alt={row.judul}
                    fill
                    className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className=" flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1.5 bg-[#EFF6FF] text-primary text-xs font-semibold px-4 py-1.5 rounded-full">
                      <FaRegCalendarAlt className="size-4" />
                      {row.tanggal_berita ? format(new Date(row.tanggal_berita), 'dd-MM-yyyy') : ''}
                    </div>
                    <div className="bg-[#EFF6FF] text-primary text-xs font-semibold px-4 py-1.5 rounded-full">
                      {row.nama_kategori_berita}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-primary font-semibold text-xl lg:text-2xl leading-tight line-clamp-3 group-hover:text-primary transition mb-4">
                    {row.judul}
                  </h3>

                  {/* Description */}
                  <div
                    className="text-[#444444] text-[15px] leading-relaxed line-clamp-3 flex-1"
                    dangerouslySetInnerHTML={{ __html: row.isi_berita ?? '' }}
                  />
                </div>
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

export default NewsInformationPageV13
