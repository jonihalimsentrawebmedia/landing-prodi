import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { DetailSectionAnnouncement } from '@/app/information/announcements/[slug]/components/section'
import { LandingLayout } from '@/components/layout'

export const InformationAnnouncementSlugTheme1 = () => {
  return (
    <LandingLayout>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <DetailSectionAnnouncement />
      </div>
    </LandingLayout>
  )
}
