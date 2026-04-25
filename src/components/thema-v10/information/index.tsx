'use client'

import InformationNewsSectionV10 from '@/components/thema-v10/information/component/news'
import InformationAgendaAnnouncementV10 from '@/components/thema-v10/information/component/Agenda'
import PromotionInformationV9 from '@/components/thema-v9/information/component/promotion'
import JumbotronTitleV10 from '@/components/thema-v10/component/common/jumbotronTitle'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'

const InformationPageV10 = () => {
  return (
    <>
      <JumbotronTitleV10 title={'Informasi'} context={'INFORMASI'} />
      <div className="container-sm py-5">
        <div className="bg-blue-50 p-1.5 px-2 rounded">
          <BreadcrumbBasic
            className={'text-primary hover:bg-transparent!'}
            data={[{ name: 'Beranda', link: '/' }, { name: 'Informasi' }]}
          />
        </div>
      </div>

      <InformationNewsSectionV10 />
      <InformationAgendaAnnouncementV10 />
      <div className="container-sm">
        <PromotionInformationV9 />
      </div>
    </>
  )
}

export default InformationPageV10
