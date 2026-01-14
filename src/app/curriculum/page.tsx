import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { Suspense } from 'react'
import { ClientSectionCurriculum } from '@/app/curriculum/components/clientSection'

const CurriculumPage = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'KURIKULUM'} title={'Kurikulum'} />
        <Suspense>
          <ClientSectionCurriculum />
        </Suspense>
      </div>
    </>
  )
}

export default CurriculumPage
