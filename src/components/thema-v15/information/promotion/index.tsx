'use client'

import { useSearchParams } from 'next/navigation'
import { UseGetPromotion } from '@/app/information/hooks'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { SearchInput } from '@/components/common/filter/search'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { UseGetPromotionYear } from '@/app/information/promotion/hooks'
import { FilterChip } from '@/components/thema-v5/component/common/filterChip'
import { JumbotronTitleV15 } from '@/components/thema-v15/component/common/jumbotronTitle'
import React from 'react'
import { ArrowLeft } from 'lucide-react'

const InformationPromotionV15 = () => {
  const searchPrams = useSearchParams()
  const page = searchPrams.get('page') || '1'
  const limit = searchPrams.get('limit') || '8'
  const search = searchPrams.get('search') || ''
  const tahun = searchPrams.get('year') || ''

  const { year } = UseGetPromotionYear()
  const { promotion, loading } = UseGetPromotion({
    page: page,
    limit: limit,
    search: search,
    year: tahun,
  })

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
              { name: 'Promosi' },
            ]}
          />
        </div>
      </div>

      <div className="py-5 bg-white">
        <div className="container-sm lg:max-w-[1280px] mx-auto space-y-4">
          <Link href={'/information'} className="flex items-center gap-1.5 text-[#1F7A63]">
            <ArrowLeft className={'size-4'} />
            <div className="flex items-center gap-4">
              <h2 className="text-[#1F7A63] text-[24px] font-semibold shrink-0">Promosi Program Studi</h2>
              <div className="h-px bg-[#C8C8C8] flex-1" />
            </div>
          </Link>
          <SearchInput placeholder={'Cari Promosi'} className={'w-full bg-white rounded border border-[#C8C8C8]'} />
          <FilterChip
            className={'text-[#1F7A63] border-[#1F7A63] hover:bg-primary! data-[state=active]:bg-primary data-[state=active]:text-white'}
            name={'year'}
            data={
              year?.map((row) => ({
                value: row?.toString(),
                label: row?.toString(),
              })) ?? []
            }
          />
          <div className="w-full flex flex-col gap-5 mt-5 relative z-10">
            {promotion?.map((row, k) => (
              <Link
                href={`/information/promotion/${row?.slug}`}
                key={k}
                className={'flex flex-row gap-5 p-4 border border-[#C8C8C8] rounded-2xl bg-white'}
              >
                <div
                  className={
                    'w-full lg:max-w-[216px] h-[162px] relative overflow-hidden rounded-xl shrink-0'
                  }
                >
                  <Image
                    src={row?.gambar}
                    alt={'gambar'}
                    fill
                    className={'w-full h-full object-cover'}
                  />
                </div>
                <div className="flex-1">
                  <p className={'lg:text-2xl line-clamp-2 font-semibold text-[#444444]'}>{row?.judul}</p>
                  <p className="text-sm font-semibold text-[#1F7A63] flex items-center gap-1.5 py-1.5 px-3 bg-[#E9F5F2] rounded-full w-fit mt-2">
                    <FaRegCalendarAlt />
                    {row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}
                  </p>
                  <div
                    className="flex flex-col gap-1.5 html-class line-clamp-3! text-sm! lg:text-base text-[#444444]"
                    dangerouslySetInnerHTML={{ __html: row?.isi_promosi }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default InformationPromotionV15
