import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { Suspense } from 'react'
import { ClientSectionCurriculum } from '@/app/curriculum/components/clientSection'
import { ICurriculum } from '@/app/curriculum/data/types'

interface Props {
  data: ICurriculum[]
}

export const CurriculumTheme1 = (props: Props) => {
  const { data } = props
  return (
    <div className={'w-full max-w-[1920px] mx-auto'}>
      <JumbotronTitle context={'KURIKULUM'} title={'Kurikulum'} />
      <Suspense>
        <ClientSectionCurriculum curriculum={data} />
      </Suspense>
    </div>
  )
}
