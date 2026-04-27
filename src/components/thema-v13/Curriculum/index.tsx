'use client'

import { ICurriculum, IElement } from '@/app/curriculum/data/types'
import { useRouter, useSearchParams } from 'next/navigation'
import { UseGetCurriculumDetail, UseGetCurriculumSubject } from '@/app/curriculum/hooks'
import { useEffect, useMemo, useRef } from 'react'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { FilterSelect } from '@/components/common/filter/select'
import { Separator } from '@/components/ui/separator'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import { NumberToOrdinalID } from '@/helper'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { clsx } from 'clsx'
import JumbotronTitleV13 from '@/components/thema-v13/component/common/jumbotronTitle'

interface Props {
  data: ICurriculum[]
}

const CurriculumPageV13 = (props: Props) => {
  const { data } = props
  const searchParams = useSearchParams()
  const curriculum = searchParams.get('slug')
  const year = searchParams.get('year') ?? ''

  const { detail } = UseGetCurriculumDetail(curriculum ?? '')
  const { subject } = UseGetCurriculumSubject({
    slug: curriculum ?? '',
    tahun: year,
    type: year === 'other' ? 'PILIHAN' : 'WAJIB',
  })

  const router = useRouter()
  const isInitialMount = useRef(true)

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

    // eslint-disable-next-line react-hooks/preserve-manual-memoization
  }, [detail])

  useEffect(() => {
    if (!data?.length) return
    if (curriculum) return // sudah ada, jangan override

    if (isInitialMount.current) {
      isInitialMount.current = false

      const params = new URLSearchParams(searchParams.toString())
      params.set('slug', data[0]?.slug ?? '')
      if (!year) params.set('year', '1')

      router.replace(`?${params.toString()}`, { scroll: false })
    }
  }, [data, curriculum, year, searchParams, router])

  const TotalSKS = (data?: { sks: number }[]) => {
    if (!data || data.length === 0) return 0
    return data.reduce((total, item) => total + (Number(item?.sks) || 0), 0)
  }

  return (
    <>
      <JumbotronTitleV13 title={'Kurikulum'} context={'KURIKULUM'} />
      <div className="w-full bg-primary p-2">
        <div className="container-sm py-5 px-2! lg:px-0">
          <BreadcrumbBasic
            className={'text-white hover:bg-transparent!'}
            data={[{ name: 'Beranda', link: '/' }, { name: 'Kurikulum' }]}
          />
        </div>
      </div>

      <div className="py-5">
        <div className="py-2.5 container-sm">
          <FilterSelect
            label={'Kurikulum'}
            name={'slug'}
            innerClassname={'text-primary! lg:max-w-[200px] w-full'}
            data={
              data?.map((row) => ({
                label: row?.nama_kurikulum,
                value: row?.slug,
              })) ?? []
            }
          />

          <Separator className={'my-5 border-white'} />

          <TitleLine
            text={`Kurikulum ${data?.find((row) => row?.slug === curriculum)?.nama_kurikulum}`}
          />

          <Tabs
            className={'w-full h-full mt-5 flex-col! lg:flex-row! gap-5'}
            value={year}
            onValueChange={(v) => {
              const Params = new URLSearchParams(searchParams.toString())
              Params.set('year', v)
              router.push(`?${Params.toString()}`, { scroll: false })
            }}
          >
            <TabsList
              className={clsx(
                'w-full h-full flex-col! bg-transparent lg:max-w-[200px]',
                'lg:flex-col! justify-start overflow-x-scroll lg:overflow-x-visible',
                'flex-row!'
              )}
            >
              {elements?.map((row, k) => (
                <TabsTrigger
                  key={k}
                  value={row?.value}
                  className={cn(
                    'shadow-none rounded-none w-full p-2',
                    'data-[state=active]:bg-primary data-[state=active]:text-white',
                    'data-[state=active]:rounded-lg'
                  )}
                >
                  <p className="w-full text-start">{row?.label}</p>
                </TabsTrigger>
              ))}
            </TabsList>
            {elements?.map((row, k) => (
              <TabsContent key={k} value={row?.value} className={'border-l-2 border-l-yellow-500 pl-4'}>
                <div className="flex flex-col lg:flex-row items-start gap-5">
                  <Accordion type={'single'} collapsible className={'w-full'} value={'ganjil'}>
                    <AccordionItem value={'ganjil'}>
                      <AccordionTrigger
                        className={'bg-primary p-2 px-2 text-white rounded-none hover:no-underline'}
                      >
                        <div className="flex items-center justify-between w-full">
                          <p>Semester {row?.value}</p>
                          <p>{TotalSKS(subject?.ganjil)}</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className={'px-4 border-2 bg-white'}>
                        <ul className={'flex flex-col'}>
                          {subject?.ganjil?.map((row, k) => (
                            <li
                              key={k}
                              className={'flex items-center justify-between relative py-1.5 pl-4'}
                            >
                              <div
                                className={cn(
                                  'w-[2px] bg-primary absolute left-0 top-0 ',
                                  subject?.ganjil.length - 1 === k ? 'h-1/2' : 'h-full'
                                )}
                              />
                              <div className="w-[10px] bg-primary absolute left-0 top-3.5 h-[2px]" />
                              <p>{row?.nama_mata_kuliah}</p>
                              <p>{row?.sks} SKS</p>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type={'single'} collapsible className={'w-full'} value={'genap'}>
                    <AccordionItem value={'genap'}>
                      <AccordionTrigger
                        className={'bg-primary p-2 px-2 text-white rounded-none hover:no-underline'}
                      >
                        <div className="flex items-center justify-between w-full">
                          <p>Semester {row?.value}</p>
                          <p>{TotalSKS(subject?.genap)}</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className={'px-4 border-2 bg-white'}>
                        <ul className={'flex flex-col'}>
                          {subject?.genap?.map((row, k) => (
                            <li
                              key={k}
                              className={'flex items-center justify-between relative py-1.5 pl-4'}
                            >
                              <div
                                className={cn(
                                  'w-[2px] bg-primary absolute left-0 top-0 ',
                                  subject?.genap.length - 1 === k ? 'h-1/2' : 'h-full'
                                )}
                              />
                              <div className="w-[10px] bg-primary absolute left-0 top-3.5 h-[2px]" />
                              <p>{row?.nama_mata_kuliah}</p>
                              <p>{row?.sks} SKS</p>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default CurriculumPageV13
