'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { ICurriculum, IElement } from '@/app/curriculum/data/types'
import { FilterSelect } from '@/components/common/filter/select'
import { useRouter, useSearchParams } from 'next/navigation'
import { Fragment, useEffect, useMemo, useRef } from 'react'
import { UseGetCurriculumDetail, UseGetCurriculumSubject } from '@/app/curriculum/hooks'
import { NumberToOrdinalID } from '@/helper'

interface Props {
  data: ICurriculum[]
}

const CurriculumPageV5 = (props: Props) => {
  const { data } = props
  const searchParams = useSearchParams()
  const router = useRouter()

  const curriculum = searchParams.get('curriculum')
  const year = searchParams.get('year') ?? ''

  const isInitialMount = useRef(true)

  const { detail } = UseGetCurriculumDetail(curriculum ?? '')
  const { subject } = UseGetCurriculumSubject({
    slug: curriculum ?? '',
    tahun: year,
    type: year === 'other' ? 'PILIHAN' : 'WAJIB',
  })

  const elements = useMemo(() => {
    if (!detail?.lama_kuliah) return []

    const temp: IElement[] = Array.from({ length: detail.lama_kuliah }, (_, k) => ({
      id: k + 1,
      label: `Tahun ${NumberToOrdinalID(k + 1, true)}`,
      value: `${k + 1}`,
      element: <></>,
    }))

    temp.push({
      id: 'other',
      label: 'Mata Kuliah Pilihan',
      value: 'other',
      element: <></>,
    })

    return temp
  }, [detail])

  // Set default curriculum & year hanya sekali
  useEffect(() => {
    if (!data?.length) return
    if (curriculum) return // sudah ada, jangan override

    if (isInitialMount.current) {
      isInitialMount.current = false

      const params = new URLSearchParams(searchParams.toString())
      params.set('curriculum', data[0]?.slug ?? '')
      if (!year) params.set('year', '1')

      router.replace(`?${params.toString()}`, { scroll: false })
    }
  }, [data, curriculum, year, searchParams, router])

  const TotalSKS = (data?: { sks: number }[]) => {
    if (!data || data.length === 0) return 0
    return data.reduce((total, item) => total + (Number(item?.sks) || 0), 0)
  }

  return (
    <ProfileLayout title={'Kurikulum'} context={'KURIKULUM'}>
      <div className="bg-footer w-full max-w-[1920px] mx-auto p-4">
        <div className="container-sm">
          <BreadcrumbBasic data={[{ name: 'Beranda', link: '/' }, { name: 'Kurikulum' }]} />
        </div>
      </div>

      <div className="lg:p-5 py-2.5 bg-primary dark:bg-gray-800">
        <div className="container-sm">
          <div className="flex flex-wrap items-center gap-4">
            <FilterSelect
              name="curriculum"
              className="max-w-[200px]"
              innerClassname={'text-footer w-full'}
              label="Kurikulum"
              placeholder="Pilih Kurikulum"
              data={data.map((row) => ({
                label: row.nama_kurikulum,
                value: row.slug,
              }))}
            />

            <FilterSelect
              name="year"
              className="w-full max-w-[200px]"
              innerClassname={'text-footer'}
              label="Tahun"
              placeholder="Pilih Tahun"
              data={elements.map((row) => ({
                label: row.label,
                value: row.value,
              }))}
            />
          </div>
          <div className={'flex flex-col lg:flex-row justify-start gap-5 w-full mt-5'}>
            <div className={'grid grid-cols-[1fr_100px] w-full border rounded-t'}>
              <div className="col-span-2 bg-footer text-white rounded-t font-bold text-center p-1.5 border-b border-gray-400">
                Semester {year !== 'other' && `${(Number(year) - 1) * 2 + 1}`} / Ganjil
              </div>
              {subject?.ganjil?.map((row, k) => (
                <Fragment key={k}>
                  <p className={'p-1.5'}>{row?.nama_mata_kuliah}</p>
                  <p className={'p-1.5 text-end font-semibold'}>{row?.sks} SKS</p>
                </Fragment>
              ))}
              <p className={'font-semibold p-1.5 bg-footer text-primary border-t border-gray-400'}>
                Total SKS
              </p>
              <p
                className={`font-semibold p-1.5 bg-footer text-primary border-t text-end border-gray-400`}
              >
                {TotalSKS(subject?.ganjil)} SKS
              </p>
            </div>

            <div className={'grid grid-cols-[1fr_100px] w-full border rounded-t'}>
              <div className="col-span-2 bg-footer text-white rounded-t font-bold text-center p-1.5 border-b border-gray-400">
                Semester {year !== 'other' && `${(Number(year) - 1) * 2 + 2}`} / Genap
              </div>
              {subject?.genap?.map((row, k) => (
                <Fragment key={k}>
                  <p className={'p-1.5'}>{row?.nama_mata_kuliah}</p>
                  <p className={'p-1.5 text-end font-semibold'}>{row?.sks} SKS</p>
                </Fragment>
              ))}
              <p className={'font-semibold p-1.5 text-primary bg-footer border-t border-gray-400'}>
                Total SKS
              </p>
              <p
                className={`font-semibold p-1.5 text-primary bg-footer border-t text-end border-gray-400`}
              >
                {TotalSKS(subject?.genap)} SKS
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  )
}

export default CurriculumPageV5
