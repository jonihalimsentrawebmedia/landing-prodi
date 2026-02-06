import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import { DetailSectionAnnouncement } from '@/components/thema-v2/information/announcement/slug/components/section'
import LayoutThemaV2 from '@/components/thema-v2/component/layout'

export const InformationAnnouncementSlugTheme2 = () => {
  return (
    <LayoutThemaV2>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <DetailSectionAnnouncement />
      </div>
    </LayoutThemaV2>
  )
}
