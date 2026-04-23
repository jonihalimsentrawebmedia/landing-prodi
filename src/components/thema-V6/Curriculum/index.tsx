'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { ICurriculum } from '@/app/curriculum/data/types'
import { FilterSelect } from '@/components/common/filter/select'
import { Separator } from '@/components/ui/separator'
import { useRouter, useSearchParams } from 'next/navigation'
import { UseGetCurriculumSubject } from '@/app/curriculum/hooks'
import CurriculumAccordion from '@/components/thema-V6/Curriculum/tableData'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import { useEffect } from 'react'

interface Props {
  data: ICurriculum[]
}

const CurriculumPageV6 = (props: Props) => {
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
      <ProfileLayout title={'KURIKULUM'} context={'KURIKULUM'}>
        <div className={'bg-footer w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
          <div className="container-sm">
            <BreadcrumbBasic
              data={[{ name: 'Beranda', link: '/' }, { name: 'Kontak & Pendaftaran' }]}
            />
          </div>
        </div>
        <div className="bg-primary/10">
          <div className="lg:p-5 py-2.5 container-sm">
            <FilterSelect
              label={'Kurikulum'}
              name={'slug'}
              innerClassname={'text-primary! max-w-[200px] w-full'}
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

            {data && <CurriculumAccordion data={subject ?? []} />}
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}

export default CurriculumPageV6
