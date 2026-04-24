'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { UseGetAgendaYear } from '@/app/information/agenda/hooks'
import { UseGetAgenda } from '@/app/homepage/hooks'
import JumbotronTitleV8 from '@/components/thema-v8/component/common/jumbotronTitle'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { SearchInput } from '@/components/common/filter/search'
import { FilterChip } from '@/components/thema-v5/component/common/filterChip'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { PaginationCustom } from '@/components/common/pagination'

const AgendaInformationPageV8 = () => {
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
      <JumbotronTitleV8 title={'Informasi'} context={'INFORMASI'} />
      <div className="bg-footer">
        <div className="container-sm py-5">
          <div className="bg-blue-50 p-1.5 px-2 rounded">
            <BreadcrumbBasic
              className={'text-primary hover:bg-transparent!'}
              data={[
                { name: 'Beranda', link: '/' },
                { name: 'Informasi', link: '/information' },
                { name: 'Agenda' },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="bg-footer dark:bg-gray-800">
        <div className="container-sm space-y-4">
          <SearchInput placeholder={'Cari Berita'} className={'w-full bg-white rounded'} />
          <FilterChip
            className={'text-primary border-primary hover:bg-primary'}
            name={'category'}
            data={
              year?.map((row) => ({
                label: row?.toString(),
                value: row?.toString(),
              })) ?? []
            }
          />
        </div>

        <div className="flex flex-col gap-5 container-sm pb-5 mt-5">
          {agenda?.map((row, k) => (
            <Link
              href={`/information/agenda/${row?.slug}`}
              key={k}
              className={
                'flex flex-col justify-start lg:flex-row lg:flex-nowrap flex-wrap lg:items-stretch gap-5'
              }
            >
              <div className="lg:w-[147px] w-full lg:min-w-[147px] h-[200px] lg:h-[110px] relative">
                <Image
                  src={row?.gambar ?? '/img/noimg.png'}
                  alt={'gambar'}
                  fill
                  className={'object-cover object-center w-full h-[200px] rounded-lg'}
                />
              </div>
              <p className="block lg:hidden">
                {row?.waktu_mulai ? format(row?.waktu_mulai, 'dd-MM-yyyy') : ''}
              </p>
              <div
                className={
                  'hidden border p-4 rounded-lg border-primary h-[110px] lg:flex flex-col justify-center'
                }
              >
                <p className="text-2xl font-semibold text-primary">
                  {row?.waktu_mulai ? format(row?.waktu_mulai, 'dd') : ''}
                </p>
                <p className={'text-red-500 font-semibold'}>
                  {row?.waktu_mulai ? format(row?.waktu_mulai, 'MMM') : ''}
                </p>
              </div>
              <div className={'space-y-2 border-l-gray-500 border-l pl-4'}>
                <p className="lg:text-2xl line-clamp-2">{row?.judul}</p>
                <div
                  className={'flex flex-col gap-1.5 html-class line-clamp-3!'}
                  dangerouslySetInnerHTML={{ __html: row?.isi_agenda ?? '' }}
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

export default AgendaInformationPageV8
