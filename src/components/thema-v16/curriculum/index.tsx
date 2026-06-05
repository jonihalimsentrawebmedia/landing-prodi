'use client'

import { ICurriculum } from '@/app/curriculum/data/types'
import { FilterSelect } from '@/components/common/filter/select'
import { Separator } from '@/components/ui/separator'
import { useRouter, useSearchParams } from 'next/navigation'
import { UseGetCurriculumSubject } from '@/app/curriculum/hooks'
import CurriculumAccordion from '@/components/thema-V6/Curriculum/tableData'
import { useEffect } from 'react'
import { JumbotronTitleV16 } from '@/components/thema-v16/component/jumbotronTitle'
import { cn } from '@/lib/utils'

interface Props {
  data: ICurriculum[]
}

const CurriculumPageV16 = (props: Props) => {
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
      <JumbotronTitleV16
        data={[{ name: 'Beranda', link: '/' }, { name: 'Kurikulum' }]}
        title="Kurikulum"
        context="KURIKULUM"
      />

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

        <div className="flex items-center gap-2 w-full pt-5">
          <div className="border-l-4 border-b-4 border-[#CDA327] px-4 py-2">
            <h2
              className={cn(
                'text-[25px] leading-[38px] font-normal text-[#0F766E] whitespace-nowrap'
              )}
            >
              Kurikulum {data?.find((row) => row?.slug === curriculum)?.nama_kurikulum}
            </h2>
          </div>
        </div>

        <div className="mt-5">{data && <CurriculumAccordion data={subject ?? []} />}</div>
      </div>
    </>
  )
}

export default CurriculumPageV16
