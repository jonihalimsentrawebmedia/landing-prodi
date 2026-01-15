import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { AnnouncementSection } from '@/app/information/announcements/components/setion'
import { Suspense } from 'react'

const InfoAnnouncementsPage = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <Suspense>
          <AnnouncementSection />
        </Suspense>
      </div>
    </>
  )
}

export default InfoAnnouncementsPage
