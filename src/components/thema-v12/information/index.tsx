'use client'

import InformationAgendaAnnouncementV10 from '@/components/thema-v10/information/component/Agenda'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import JumbotronTitleV11 from '@/components/thema-v11/component/common/jumbotronTitle'
import PromotionInformationV11 from '@/components/thema-v11/information/component/promotion'
import NewsHomeSectionV12 from '@/components/thema-v12/homepage/news'

const InformationPageV12 = () => {
  return (
    <>
      <JumbotronTitleV11 title={'Informasi'} context={'INFORMASI'} />
      <div className="container-sm py-5">
        <div className="bg-blue-50 p-1.5 px-2 rounded">
          <BreadcrumbBasic
            className={'text-primary hover:bg-transparent!'}
            data={[{ name: 'Beranda', link: '/' }, { name: 'Informasi' }]}
          />
        </div>
      </div>

      <NewsHomeSectionV12 />
      <InformationAgendaAnnouncementV10 />
      <div className="container-sm">
        <PromotionInformationV11 />
      </div>
    </>
  )
}

export default InformationPageV12
