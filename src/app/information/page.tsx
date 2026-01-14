import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { NewsSection } from '@/app/information/components/newsSection'
import { AgendaAnnouncementSection } from '@/app/information/components/AgendaAnnouncement'
import { PromotionSection } from '@/app/information/components/promotionSection'

const InformationPage = () => {
  return (
    <div className={'w-full max-w-[1920px] mx-auto'}>
      <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
      <NewsSection />
      <AgendaAnnouncementSection />
      <PromotionSection />
    </div>
  )
}

export default InformationPage
