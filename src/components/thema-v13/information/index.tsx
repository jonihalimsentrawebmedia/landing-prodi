'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import PromotionInformationV11 from '@/components/thema-v11/information/component/promotion'
import NewsHomeSectionV13 from '@/components/thema-v13/homepage/news'
import AgendaAnnouncementInfoV9 from '@/components/thema-v9/information/component/agendaAnnounce'
import JumbotronTitleV13 from '@/components/thema-v13/component/common/jumbotronTitle'

const InformationPageV13 = () => {
  return (
    <>
      <JumbotronTitleV13 title={'Informasi'} context={'INFORMASI'} />
      <div className="w-full bg-primary p-2">
        <div className="container-sm py-5 px-2! lg:px-0">
          <BreadcrumbBasic
            className={'text-white hover:bg-transparent!'}
            data={[{ name: 'Beranda', link: '/' }, { name: 'Informasi' }]}
          />
        </div>
      </div>

      <NewsHomeSectionV13 />
      <AgendaAnnouncementInfoV9 />

      <div className="container-sm">
        <PromotionInformationV11 />
      </div>
    </>
  )
}

export default InformationPageV13
