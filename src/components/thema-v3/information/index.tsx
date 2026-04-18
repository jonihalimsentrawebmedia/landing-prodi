import { JumbotronTitleTheme3 } from '@/components/thema-v3/component/common/jumbotronTitle'
import { InformationNews } from './component/InfomationNews'
import { AgendaAnnouncement } from '../Home/component/section/agendaAnnouncement'
import { PromotionInformation } from './component/PromotionInformation'

export const InformationTheme3 = () => {
  return (
    <>
      <JumbotronTitleTheme3 context={'INFORMASI'} title={'Informasi'} />
      <InformationNews />
      <AgendaAnnouncement />
      <PromotionInformation />
    </>
  )
}
