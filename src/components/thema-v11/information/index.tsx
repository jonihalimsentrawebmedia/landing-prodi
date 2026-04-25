'use client'

import InformationAgendaAnnouncementV10 from '@/components/thema-v10/information/component/Agenda'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import JumbotronTitleV11 from '@/components/thema-v11/component/common/jumbotronTitle'
import NewsInformationSectionV11 from '@/components/thema-v11/information/component/news'
import PromotionInformationV11 from '@/components/thema-v11/information/component/promotion'

const InformationPageV11 = () => {
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

      <NewsInformationSectionV11 />
      <InformationAgendaAnnouncementV10 />
      <div className="container-sm">
        <PromotionInformationV11 />
      </div>
    </>
  )
}

export default InformationPageV11
