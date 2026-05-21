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
import { JumbotronTitleV14 } from '@/components/thema-v14/component/common/jumbotronTitle'
import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'

const AgendaInformationPageV14 = () => {
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
      <JumbotronTitleV14 title={'Informasi'} context={'INFORMASI'} />
      <div className={'bg-footer w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
        <div className="container-sm px-2!">
          <BreadcrumbBasic
            className={'text-white hover:bg-transparent!'}
            data={[
              { name: 'Beranda', link: '/' },
              { name: 'Profil', link: '/information' },
              { name: 'Agenda' },
            ]}
          />
        </div>
      </div>

      <div className="pb-5 dark:bg-gray-800">
        <div className="container-sm py-5 space-y-4">
          <Link href={'/information'} className="flex items-center gap-1.5">
            <ArrowLeft className={'size-4'} />
            <TitleLine text={'Pengumuman Program Studi'} />
          </Link>
          <SearchInput placeholder={'Cari Agenda'} className={'w-full bg-white rounded'} />
          <FilterChip
            name={'category'}
            data={
              year?.map((row) => ({
                label: row?.toString(),
                value: row?.toString(),
              })) ?? []
            }
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-5 container-sm">
          {agenda?.map((row, k) => (
            <Link
              href={`/information/agenda/${row?.slug}`}
              key={k}
              className={'bg-white rounded-lg'}
            >
              <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
                <Image src={row?.gambar} alt={'gambar'} fill className={'object-cover'} />
              </div>
              <div className={'mt-4 flex items-center gap-2.5'}>
                <div
                  className={
                    'border p-2 rounded-lg border-primary items-center flex flex-col justify-center w-fit'
                  }
                >
                  <p className="text-2xl font-semibold text-primary">
                    {row?.waktu_mulai ? format(row?.waktu_mulai, 'dd') : ''}
                  </p>
                  <p className={'text-red-500 font-semibold'}>
                    {row?.waktu_mulai ? format(row?.waktu_mulai, 'MMM') : ''}
                  </p>
                </div>
                <p className="text-2xl h-fit font-semibold line-clamp-2 pl-2.5 border-l-2 border-l-gray-500">
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

export default AgendaInformationPageV14
