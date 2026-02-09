import { ICurriculum } from '@/app/curriculum/data/types'
import { Suspense } from 'react'
import { TabsCurriculumSectionTheme4 } from './component/section'
import { JumbotronTitleTheme4 } from '@/components/theme-v4/component/common/jumbontronTitle'
import LayoutBaseTheme4 from '@/components/theme-v4/component/layout'

interface Props {
  data: ICurriculum[]
}

export const CurriculumTheme4 = (props: Props) => {
  const { data: listCurriculum } = props
  return (
    <LayoutBaseTheme4>
      <JumbotronTitleTheme4 context={'KURIKULUM'} title={'Kurikulum'} />
      <Suspense>
        <TabsCurriculumSectionTheme4 curiculum={listCurriculum} />
      </Suspense>
    </LayoutBaseTheme4>
  )
}
