import { ListDataAnnouncement } from '@/components/theme-v4/information/announcement/component/listData'
import { JumbotronTitleTheme4 } from '@/components/theme-v4/component/common/jumbontronTitle'
import LayoutBaseTheme4 from '@/components/theme-v4/component/layout'

export const InformationAnnouncementTheme4 = () => {
  return (
    <>
      <LayoutBaseTheme4>
        <JumbotronTitleTheme4 context={'PROFIL'} title={'Informasi'} />
        <ListDataAnnouncement />
      </LayoutBaseTheme4>
    </>
  )
}
