'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { SearchInput } from '@/components/common/filter/search'
import { FilterChip } from '@/components/thema-v5/component/common/filterChip'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { useSearchParams } from 'next/navigation'
import { UseGetAgendaYear } from '@/app/information/agenda/hooks'
import { UseGetAgenda } from '@/app/homepage/hooks'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'

const AgendaInformationPageV5 = () => {
  const searchparams = useSearchParams()
  const search = searchparams.get('search')
  const { year, loading: load1 } = UseGetAgendaYear()
  const { agenda, loading: load2 } = UseGetAgenda({
    search: search ?? '',
    page: '1',
    limit: '10',
  })

  const loading = load1 || load2

  if (loading) return <></>

  return (
    <>
      <ProfileLayout title={'Informasi'} context={'INFORMASI'}>
        <div className={'bg-footer w-full max-w-[1920px] mx-auto py-2 lg:p-5'}>
          <div className="container-sm">
            <BreadcrumbBasic
              data={[
                { name: 'Beranda', link: '/' },
                { name: 'Informasi', link: '/information' },
                { name: 'Agenda' },
              ]}
            />
          </div>
        </div>
        <div className="lg:p-5 py-2.5 bg-primary dark:bg-gray-800">
          <div className="container-sm py-5 space-y-4">
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

            <div className="grid lg:grid-cols-3 gap-5">
              {agenda?.map((row, k) => (
                <Link
                  href={`/information/agenda/${row?.slug}`}
                  key={k}
                  className="w-full space-y-1.5"
                >
                  <Image
                    src={row?.gambar}
                    alt={row?.judul}
                    className={'w-full h-[310px] object-cover rounded-md'}
                    width={650}
                    height={310}
                  />
                  <div className={'flex items-center gap-5 mt-2.5'}>
                    <div className={'space-y-1.5 border-r-2 pr-4'}>
                      <p className={'text-2xl font-semibold'}>
                        {row?.waktu_mulai ? format(row?.waktu_mulai, 'dd') : ''}
                      </p>
                      <p className={'text-red-500'}>
                        {row?.waktu_mulai ? format(row?.waktu_mulai, 'MMM') : ''}
                      </p>
                    </div>
                    <p className={'line-clamp-2'}>{row?.judul}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}

export default AgendaInformationPageV5
