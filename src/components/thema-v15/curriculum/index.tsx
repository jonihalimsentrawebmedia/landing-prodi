'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { ICurriculum } from '@/app/curriculum/data/types'
import { FilterSelect } from '@/components/common/filter/select'
import { Separator } from '@/components/ui/separator'
import { useRouter, useSearchParams } from 'next/navigation'
import { UseGetCurriculumSubject } from '@/app/curriculum/hooks'
import CurriculumAccordion from '@/components/thema-V6/Curriculum/tableData'
import { useEffect } from 'react'
import { JumbotronTitleV15 } from '@/components/thema-v15/component/common/jumbotronTitle'

interface Props {
  data: ICurriculum[]
}

const CurriculumPageV15 = (props: Props) => {
  const { data } = props
  const searchParams = useSearchParams()
  const curriculum = searchParams.get('slug')
  const { data: subject } = UseGetCurriculumSubject({
    slug: curriculum ?? '',
  })

  const router = useRouter()

  useEffect(() => {
    if (!curriculum) {
      const Params = new URLSearchParams()
      Params.append('slug', data?.[0]?.slug)
      router.push(`?${Params.toString()}`)
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curriculum, subject])

  return (
    <>
      <JumbotronTitleV15 title="Kurikulum" context="KURIKULUM" />

      <div className="bg-primary w-full">
        <div className="container-sm p-2">
          <BreadcrumbBasic
            className="text-white! hover:bg-[#1F7A63]!"
            data={[{ name: 'Beranda', link: '/' }, { name: 'Kurikulum' }]}
          />
        </div>
      </div>

      <div className="container-sm lg:max-w-[1280px] mx-auto py-5">
        <FilterSelect
          label="Kurikulum"
          name="slug"
          innerClassname="text-prmary max-w-[200px] w-full"
          data={
            data?.map((row) => ({
              label: row?.nama_kurikulum,
              value: row?.slug,
            })) ?? []
          }
        />

        <Separator className="my-5 border-[#C8C8C8]" />

        <div className="flex items-center gap-4">
          <h2 className="text-primary text-[24px] font-semibold shrink-0">
            Kurikulum{' '}
            {data?.find((row) => row?.slug === curriculum)?.nama_kurikulum}
          </h2>
          <div className="h-px bg-[#C8C8C8] flex-1" />
        </div>

        <div className="mt-5">
          {data && <CurriculumAccordion data={subject ?? []} />}
        </div>
      </div>
    </>
  )
}

export default CurriculumPageV15
