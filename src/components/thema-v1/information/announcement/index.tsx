import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { Suspense } from 'react'
import { AnnouncementSection } from '@/app/information/announcements/components/setion'

export const InformationAnnouncementTheme1 = () => {
  return (
    <div className={'w-full max-w-[1920px] mx-auto'}>
      <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
      <Suspense>
        <AnnouncementSection />
      </Suspense>
    </div>
  )
}
