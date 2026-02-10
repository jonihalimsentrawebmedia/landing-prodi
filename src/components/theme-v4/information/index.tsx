import LayoutBaseTheme4 from '@/components/theme-v4/component/layout'
import { JumbotronTitleTheme4 } from '@/components/theme-v4/component/common/jumbontronTitle'
import { PromotionInformation } from '@/components/thema-v3/information/component/PromotionInformation'
import { AgendaAnnouncement } from '@/components/theme-v4/home/component/agendaAnnouncement'
import { NewNewsFourTheme4 } from '@/components/theme-v4/information/component/newNews'

export const InformationTheme4 = () => {
  return (
    <LayoutBaseTheme4>
      <JumbotronTitleTheme4 context={'INFORMASI'} title={'Informasi'} />
      <NewNewsFourTheme4 />
      <AgendaAnnouncement />
      <PromotionInformation />
    </LayoutBaseTheme4>
  )
}
