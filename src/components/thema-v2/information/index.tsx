import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import { TopNewsLanding } from '@/components/thema-v2/component/home/topNews'
import { AnnouncementInformation } from '@/components/thema-v2/information/component/Announcement'
import { AgendaInformation } from '@/components/thema-v2/information/component/Agenda'
import { PromotionInformation } from '@/components/thema-v2/information/component/promotion'

export const InformationTheme2 = () => {
  return (
    <>
      <JumbotronTitle title={'Informasi'} context={'INFORMASI'} />
      <TopNewsLanding />
      <AnnouncementInformation />
      <AgendaInformation />
      <PromotionInformation />
    </>
  )
}
