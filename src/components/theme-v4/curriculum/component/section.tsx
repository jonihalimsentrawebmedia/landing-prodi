'use client'

import { ICurriculum, IElement } from '@/app/curriculum/data/types'
import { useRouter, useSearchParams } from 'next/navigation'
import { Fragment, useEffect, useMemo, useState } from 'react'
import { UseGetCurriculumDetail, UseGetCurriculumSubject } from '@/app/curriculum/hooks'
import { NumberToOrdinalID } from '@/helper'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FilterSelect } from '@/components/common/filter/select'
import { clsx } from 'clsx'
import { TabsCurriculumSkeleton } from '@/components/thema-v3/curriculum/component/skeleton'

interface Props {
  curiculum: ICurriculum[]
}

export const TabsCurriculumSectionTheme4 = (props: Props) => {
  const { curiculum } = props
  const searchParams = useSearchParams()
  const slug = searchParams.get('slug')
  const router = useRouter()

  const [tabValue, setTabValue] = useState('1')

  const { detail, loading: load1 } = UseGetCurriculumDetail(slug ?? '')
  const { subject, loading: load2 } = UseGetCurriculumSubject({
    slug: slug ?? '',
    tahun: tabValue,
    type: tabValue === 'other' ? 'PILIHAN' : 'WAJIB',
  })

  useEffect(() => {
    if (!slug) {
      const ParamsSearch = new URLSearchParams()
      ParamsSearch.append('slug', curiculum[0]?.slug ?? '')
      router.push(`?${ParamsSearch.toString()}`)
    }
    //eslint-disable-next-line
  }, [slug])

  const elements = useMemo(() => {
    if (detail) {
      const temp: IElement[] = []
      Array.from({ length: detail?.lama_kuliah }).map((_, k) => {
        temp.push({
          id: k + 1,
          label: `Tahun ${NumberToOrdinalID(k + 1, true)}`,
          value: `${k + 1}`,
          element: <></>,
        })
      })
      temp.push({
        id: 'other',
        label: 'Mata Kuliah Pilihan',
        value: 'other',
        element: <></>,
      })
      setTabValue(temp[0]?.value ?? '')
      return temp
    }
  }, [detail])

  const TotalSKS = (data?: { sks: number }[]) => {
    if (!data || data.length === 0) return 0
    return data.reduce((total, item) => total + (Number(item?.sks) || 0), 0)
  }

  const loading = load1 || load2

  if (loading) return <TabsCurriculumSkeleton />

  return (
    <>
      <div className={'container py-5'}>
        <FilterSelect
          name={'slug'}
          className={'mb-5'}
          innerClassname={'lg:w-[185px] w-full text-primary'}
          data={
            curiculum?.map((row) => ({
              value: row?.slug,
              label: row?.nama_kurikulum,
            })) ?? []
          }
        />

        <Tabs
          className={'w-full rounded-none gap-0 flex-col'}
          value={tabValue}
          onValueChange={setTabValue}
        >
          <TabsList
            className={
              "rounded-none bg-white dark:bg-transparent w-full p-0 flex items-center justify-start overflow-auto scrollbar-hide"
            }
          >
            {elements?.map((row, k) => (
              <TabsTrigger
                key={k}
                value={row?.value}
                className={clsx(
                  'text-xs rounded-none',
                  'data-[state=active]:bg-primary data-[state=active]:text-white'
                )}
              >
                {row?.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {elements?.map((row, k) => (
            <TabsContent value={row?.value} key={k} className={'border p-4 border-primary'}>
              <div className={'flex flex-col lg:flex-row justify-start gap-5 w-full'}>
                <div className={'grid grid-cols-[1fr_100px] w-full border rounded-t'}>
                  <div className="col-span-2 bg-primary text-white rounded-t font-bold text-center p-1.5 border-b border-gray-400">
                    Semester {tabValue !== 'other' && `${(Number(tabValue) - 1) * 2 + 1}`} / Ganjil
                  </div>
                  {subject?.ganjil?.map((row, k) => (
                    <Fragment key={k}>
                      <p className={'p-1.5'}>{row?.nama_mata_kuliah}</p>
                      <p className={'p-1.5 text-end font-semibold'}>{row?.sks} SKS</p>
                    </Fragment>
                  ))}
                  <p
                    className={
                      'font-semibold p-1.5 bg-primary/10 text-primary border-t border-gray-400'
                    }
                  >
                    Total SKS
                  </p>
                  <p
                    className={`font-semibold p-1.5 bg-primary/10 text-primary border-t text-end border-gray-400`}
                  >
                    {TotalSKS(subject?.ganjil)} SKS
                  </p>
                </div>

                <div className={'grid grid-cols-[1fr_100px] w-full border rounded-t'}>
                  <div className="col-span-2 bg-primary text-white rounded-t font-bold text-center p-1.5 border-b border-gray-400">
                    Semester {tabValue !== 'other' && `${(Number(tabValue) - 1) * 2 + 2}`} / Genap
                  </div>
                  {subject?.genap?.map((row, k) => (
                    <Fragment key={k}>
                      <p className={'p-1.5'}>{row?.nama_mata_kuliah}</p>
                      <p className={'p-1.5 text-end font-semibold'}>{row?.sks} SKS</p>
                    </Fragment>
                  ))}
                  <p
                    className={
                      'font-semibold p-1.5 text-primary bg-primary/10 border-t border-gray-400'
                    }
                  >
                    Total SKS
                  </p>
                  <p
                    className={`font-semibold p-1.5 text-primary bg-primary/10 border-t text-end border-gray-400`}
                  >
                    {TotalSKS(subject?.genap)} SKS
                  </p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  )
}
