import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { Suspense } from 'react'
import { ClientSectionCurriculum } from '@/app/curriculum/components/clientSection'
import { LandingLayout } from '@/components/layout'
import { ICurriculum } from '@/app/curriculum/data/types'

interface Props {
  data: ICurriculum[]
}

export const CurriculumTheme1 = (props: Props) => {
  const { data } = props
  return (
    <LandingLayout>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'KURIKULUM'} title={'Kurikulum'} />
        <Suspense>
          <ClientSectionCurriculum curriculum={data} />
        </Suspense>
      </div>
    </LandingLayout>
  )
}
