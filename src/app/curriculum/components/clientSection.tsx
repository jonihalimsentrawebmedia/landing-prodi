'use client'

import {
  UseGetCurriculum,
  UseGetCurriculumDetail,
  UseGetCurriculumSubject,
} from '@/app/curriculum/hooks'
import { Fragment, useEffect, useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { IElement } from '@/app/curriculum/data/types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FilterSelect } from '@/components/common/filter/select'
import { NumberToOrdinalID } from '@/helper'

export const ClientSectionCurriculum = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const slug_curriculum = searchParams.get('slug_curriculum')

  const [tabValue, setTabValue] = useState('1')

  const { curriculum } = UseGetCurriculum({ isGetAll: true })
  const { detail } = UseGetCurriculumDetail(slug_curriculum ?? '')
  const { subject } = UseGetCurriculumSubject({
    slug: slug_curriculum ?? '',
    tahun: tabValue,
    type: tabValue === 'other' ? 'PILIHAN' : 'WAJIB',
  })

  useEffect(() => {
    if (!slug_curriculum && curriculum) {
      const Params = new URLSearchParams()
      Params.set('slug_curriculum', curriculum[0]?.slug)
      router.push(`?${Params.toString()}`)
    }
  }, [slug_curriculum, curriculum, router])

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

  return (
    <>
      <div className="bg-primary">
        <div className="container">
          <Tabs
            className="w-full grid grid-cols-[335_1fr]"
            value={tabValue}
            onValueChange={setTabValue}
          >
            <TabsList
              className={
                'flex flex-col rounded-none w-full text-start h-fit bg-primary gap-2 relative'
              }
            >
              <div className="w-full flex justify-start">
                <FilterSelect
                  className={'bg-white max-w-[180px]'}
                  innerClassname={'w-full min-w-[180px]'}
                  name={'slug_curriculum'}
                  data={curriculum?.map((row) => ({
                    label: row?.nama_kurikulum,
                    value: row?.slug,
                  }))}
                />
              </div>
              <div className="absolute w-[2px] h-full left-1 top-2.5 bg-linear-to-b from-white to-primary" />
              {elements?.map((item, k) => (
                <TabsTrigger
                  value={item?.value}
                  key={k}
                  className={`text-start w-full text-gray-500 bg-transparent pl-4 data-[state=active]:text-white
                   data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none
              `}
                >
                  <p className={'text-start w-full'}>{item?.label}</p>
                </TabsTrigger>
              ))}
            </TabsList>
            {elements?.map((item, k) => (
              <TabsContent className={'bg-[#EAEAEA] p-5'} value={item?.value} key={k}>
                <div>
                  <p className="text-2xl font-semibold">
                    {tabValue !== 'other'
                      ? `Tahun ${NumberToOrdinalID(Number(tabValue), true)}`
                      : 'Mata Kuliah Pilihan'}
                  </p>

                  <div className={'grid grid-cols-[1fr_200px] mt-2 border border-gray-400'}>
                    <div className="col-span-2 bg-blue-100 font-bold text-center p-1.5 border-b border-gray-400">
                      Semester {tabValue !== 'other' && `${(Number(tabValue) - 1) * 2 + 1}`} /
                      Ganjil
                    </div>
                    {subject?.ganjil?.map((row, k) => (
                      <Fragment key={k}>
                        <p className={'p-1.5'}>{row?.nama_mata_kuliah}</p>
                        <p className={'p-1.5 text-end font-semibold'}>{row?.sks} SKS</p>
                      </Fragment>
                    ))}
                    <p className={'font-semibold p-1.5 bg-blue-100 border-t border-gray-400'}>
                      Total
                    </p>
                    <p
                      className={`font-semibold p-1.5 bg-blue-100 border-t text-end border-gray-400`}
                    >
                      {TotalSKS(subject?.ganjil)}
                    </p>
                  </div>

                  <div className={'grid grid-cols-[1fr_200px] mt-5 border border-gray-400'}>
                    <div className="col-span-2 bg-blue-100 font-bold text-center p-1.5 border-b border-gray-400">
                      Semester {tabValue !== 'other' && `${(Number(tabValue) - 1) * 2 + 2}`} / Genap
                    </div>
                    {subject?.genap?.map((row, k) => (
                      <Fragment key={k}>
                        <p className={'p-1.5'}>{row?.nama_mata_kuliah}</p>
                        <p className={'p-1.5 text-end font-semibold'}>{row?.sks} SKS</p>
                      </Fragment>
                    ))}
                    <p className={'font-semibold p-1.5 bg-blue-100 border-t border-gray-400'}>
                      Total
                    </p>
                    <p
                      className={`font-semibold p-1.5 bg-blue-100 border-t text-end border-gray-400`}
                    >
                      {TotalSKS(subject?.genap)}
                    </p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  )
}
