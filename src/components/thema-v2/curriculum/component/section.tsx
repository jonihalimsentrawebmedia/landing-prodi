'use client'

import { ICurriculum, IElement } from '@/app/curriculum/data/types'
import { FilterSelect } from '@/components/common/filter/select'
import { useRouter, useSearchParams } from 'next/navigation'
import { Fragment, useEffect, useMemo, useState } from 'react'
import { UseGetCurriculumDetail, UseGetCurriculumSubject } from '@/app/curriculum/hooks'
import { TabsList, Tabs, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { TabsCurriculumSkeleton } from './skeleton'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { clsx } from 'clsx'
import { NumberToOrdinalID } from '@/helper'

interface Props {
  curiculum: ICurriculum[]
}

export const TabsCurriculumSection = (props: Props) => {
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
      <div className={'container py-5 relative h-full'}>
        <div className="flex flex-col gap-2 lg:hidden">
          <FilterSelect
            name={'slug'}
            innerClassname={'lg:w-[185px] w-full'}
            data={
              curiculum?.map((row) => ({
                value: row?.slug,
                label: row?.nama_kurikulum,
              })) ?? []
            }
          />

          <Accordion
            value={tabValue}
            onValueChange={setTabValue}
            type={'single'}
            collapsible
            className={'flex-col flex gap-2.5'}
          >
            {elements?.map((item, k) => (
              <AccordionItem value={item?.value} key={k} className={'flex flex-col gap-2'}>
                <AccordionTrigger
                  className={clsx(
                    'bg-primary-foreground p-2 rounded-none border-l-primary border-l-4',
                    item.value === tabValue ? 'bg-primary text-white border-l-yellow-500' : ''
                  )}
                >
                  {item?.label}
                </AccordionTrigger>
                <AccordionContent>
                  <div className={'flex flex-col justify-start gap-2 w-full'}>
                    <div className={'grid grid-cols-[1fr_55px] w-full border border-gray-400'}>
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

                    <div className={'grid grid-cols-[1fr_200px] w-full border border-gray-400'}>
                      <div className="col-span-2 bg-blue-100 font-bold text-center p-1.5 border-b border-gray-400">
                        Semester {tabValue !== 'other' && `${(Number(tabValue) - 1) * 2 + 2}`} /
                        Genap
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
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className={'hidden lg:block'}>
          <Tabs
            value={tabValue}
            onValueChange={setTabValue}
            className={'w-full relative !flex-row !items-start gap-5'}
          >
            <TabsList
              className={
                'relative p-0 flex flex-col !h-fit rounded text-start bg-white dark:bg-primary'
              }
            >
              <div className="w-full lg:flex mb-5 bg-primary">
                <FilterSelect
                  name={'slug'}
                  innerClassname={'lg:w-[185px] w-full'}
                  data={
                    curiculum?.map((row) => ({
                      value: row?.slug,
                      label: row?.nama_kurikulum,
                    })) ?? []
                  }
                />
              </div>
              <div className="bg-primary-foreground dark:bg-primary w-full">
                {elements?.map((row, k) => (
                  <TabsTrigger
                    key={k}
                    value={row?.value}
                    className={`!shadow-none !w-full flex justify-start border-l-primary border-l-4
                    !focus-visible:right-0 !m-0 border-y-0 p-2
                    data-[state=active]:bg-primary data-[state=active]:shadow-none rounded-none
                    data-[state=active]:text-white data-[state=active]:border-yellow-500 border-r-0
                   `}
                  >
                    {row?.label}
                  </TabsTrigger>
                ))}
              </div>
            </TabsList>
            {elements?.map((item, k) => (
              <TabsContent className={''} value={item?.value} key={k}>
                <div className={'flex items-start gap-5 w-full'}>
                  <div className={'grid grid-cols-[1fr_200px] w-full border border-gray-400'}>
                    <div className="col-span-2 bg-blue-100 dark:bg-primary font-bold text-center p-1.5 border-b border-gray-400">
                      Semester {tabValue !== 'other' && `${(Number(tabValue) - 1) * 2 + 1}`} /
                      Ganjil
                    </div>
                    {subject?.ganjil?.map((row, k) => (
                      <Fragment key={k}>
                        <p className={'p-1.5'}>{row?.nama_mata_kuliah}</p>
                        <p className={'p-1.5 text-end font-semibold'}>{row?.sks} SKS</p>
                      </Fragment>
                    ))}
                    <p
                      className={
                        'font-semibold p-1.5 bg-blue-100 dark:bg-primary border-t border-gray-400'
                      }
                    >
                      Total
                    </p>
                    <p
                      className={`font-semibold p-1.5 bg-blue-100 dark:bg-primary border-t text-end border-gray-400`}
                    >
                      {TotalSKS(subject?.ganjil)}
                    </p>
                  </div>

                  <div className={'grid grid-cols-[1fr_200px] w-full border border-gray-400'}>
                    <div className="col-span-2 bg-blue-100 dark:bg-primary font-bold text-center p-1.5 border-b border-gray-400">
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
                        'font-semibold p-1.5 bg-blue-100 dark:bg-primary border-t border-gray-400'
                      }
                    >
                      Total
                    </p>
                    <p
                      className={`font-semibold p-1.5 bg-blue-100 dark:bg-primary border-t text-end border-gray-400`}
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
