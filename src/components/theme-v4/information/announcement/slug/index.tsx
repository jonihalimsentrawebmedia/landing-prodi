import { JumbotronTitleTheme4 } from '@/components/theme-v4/component/common/jumbontronTitle'
import { DetailAnnouncementTheme4 } from '@/components/theme-v4/information/announcement/slug/component/detail'
import LayoutBaseTheme4 from '@/components/theme-v4/component/layout'

export const InformationAnnouncementSlugTheme4 = () => {
  return (
    <LayoutBaseTheme4>
      <JumbotronTitleTheme4 title={'Informasi'} context={'INFORMASI'} />
      <DetailAnnouncementTheme4 />
    </LayoutBaseTheme4>
  )
}
