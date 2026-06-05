'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { UseGetAgendaYear } from '@/app/information/agenda/hooks'
import { UseGetAgenda } from '@/app/homepage/hooks'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { SearchInput } from '@/components/common/filter/search'
import { FilterChip } from '@/components/thema-v5/component/common/filterChip'
import { PaginationCustom } from '@/components/common/pagination'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'
import { JumbotronTitleV15 } from '@/components/thema-v15/component/common/jumbotronTitle'
import React from 'react'
import { ArrowLeft } from 'lucide-react'

const AgendaInformationPageV15 = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const page = searchParams.get('page') ?? '1'
  const limit = searchParams.get('limit') ?? '10'
  const tahun = searchParams.get('tahun') ?? ''
  const router = useRouter()

  const { year, loading: load1 } = UseGetAgendaYear()
  const {
    agenda,
    loading: load2,
    meta,
  } = UseGetAgenda({
    search: search ?? '',
    page: page,
    limit: limit,
    year: tahun,
  })

  const loading = load1 || load2

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
              { name: 'Profil', link: '/information' },
              { name: 'Agenda' },
            ]}
          />
        </div>
      </div>

      <div className="pb-5">
        <div className="container-sm lg:max-w-[1280px] mx-auto py-5 space-y-4">
          <Link href={'/information'} className="flex items-center gap-1.5 text-[#1F7A63]">
            <ArrowLeft className={'size-4'} />
            <div className="flex items-center gap-4">
              <h2 className="text-[#1F7A63] text-[24px] font-semibold shrink-0">Agenda Program Studi</h2>
              <div className="h-px bg-[#C8C8C8] flex-1" />
            </div>
          </Link>
          <SearchInput placeholder={'Cari Agenda'} className={'w-full bg-white rounded border border-[#C8C8C8]'} />
          <FilterChip
            name={'category'}
            className={'data-[state=active]:bg-primary data-[state=active]:text-white'}
            data={
              year?.map((row) => ({
                label: row?.toString(),
                value: row?.toString(),
              })) ?? []
            }
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-5 container-sm lg:max-w-[1280px] mx-auto">
          {agenda?.map((row, k) => (
            <Link
              href={`/information/agenda/${row?.slug}`}
              key={k}
              className={'rounded-2xl border border-[#C8C8C8] bg-white'}
            >
              <div className="w-full h-[300px] relative rounded-2xl overflow-hidden">
                <Image src={row?.gambar} alt={'gambar'} fill className={'object-cover'} />
              </div>
              <div className={'mt-4 flex items-center gap-2.5 p-4'}>
                <div
                  className={
                    'border p-2 rounded-lg border-[#1F7A63] items-center flex flex-col justify-center w-fit'
                  }
                >
                  <p className="text-2xl font-semibold text-[#1F7A63]">
                    {row?.waktu_mulai ? format(row?.waktu_mulai, 'dd') : ''}
                  </p>
                  <p className={'text-red-500 font-semibold'}>
                    {row?.waktu_mulai ? format(row?.waktu_mulai, 'MMM') : ''}
                  </p>
                </div>
                <p className="text-2xl h-fit font-semibold line-clamp-2 pl-2.5 border-l-2 border-l-[#C8C8C8] text-[#444444]">
                  {row?.judul ?? ''}
                </p>
              </div>
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
    </>
  )
}

export default AgendaInformationPageV15
