import LayoutThemaV2 from '@/components/thema-v2/component/layout'
import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import { Suspense } from 'react'
import { AnnouncementSection } from '@/components/thema-v2/information/announcement/components/setion'

export const InformationAnnouncementTheme2 = () => {
  return (
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <Suspense>
          <AnnouncementSection />
        </Suspense>
      </div>
  )
}
