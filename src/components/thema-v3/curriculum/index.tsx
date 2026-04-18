import { LayoutTheme3 } from '@/components/thema-v3/component/layout'
import { JumbotronTitleTheme3 } from '@/components/thema-v3/component/common/jumbotronTitle'
import { ICurriculum } from '@/app/curriculum/data/types'
import { Suspense } from 'react'
import { TabsCurriculumSectionTheme3 } from '@/components/thema-v3/curriculum/component/section'

interface Props {
  data: ICurriculum[]
}

export const CurriculumTheme3 = (props: Props) => {
  const { data: listCurriculum } = props
  return (
    <>
      <JumbotronTitleTheme3 context={'KURIKULUM'} title={'Kurikulum'} />
      <Suspense>
        <TabsCurriculumSectionTheme3 curiculum={listCurriculum} />
      </Suspense>
    </>
  )
}
