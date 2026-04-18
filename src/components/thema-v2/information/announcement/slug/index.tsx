import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import { DetailSectionAnnouncement } from '@/components/thema-v2/information/announcement/slug/components/section'

export const InformationAnnouncementSlugTheme2 = () => {
  return (
    <div className={'w-full max-w-[1920px] mx-auto'}>
      <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
      <DetailSectionAnnouncement />
    </div>
  )
}
