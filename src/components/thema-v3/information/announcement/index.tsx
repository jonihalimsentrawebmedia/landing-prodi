import { LayoutTheme3 } from '@/components/thema-v3/component/layout'
import { JumbotronTitleTheme3 } from '@/components/thema-v3/component/common/jumbotronTitle'
import { AnnouncementSection } from '@/components/thema-v3/information/announcement/component/section'

export const AnnouncementInformationTheme3 = () => {
  return (
    <LayoutTheme3>
      <JumbotronTitleTheme3 title={'Informasi'} context={'INFORMASI'} />
      <AnnouncementSection />
    </LayoutTheme3>
  )
}
