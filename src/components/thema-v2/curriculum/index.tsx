import { TabsCurriculumSection } from '@/components/thema-v2/curriculum/component/section'
import { Suspense } from 'react'
import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import { ICurriculum } from '@/app/curriculum/data/types'

interface Props {
  data: ICurriculum[]
}

export const CurriculumTHeme2 = (props: Props) => {
  const { data: listCurriculum } = props
  return (
    <>
      <JumbotronTitle title={'Kurikulum'} context={'KURIKULUM'} />
      <Suspense>
        <TabsCurriculumSection curiculum={listCurriculum} />
      </Suspense>
    </>
  )
}
