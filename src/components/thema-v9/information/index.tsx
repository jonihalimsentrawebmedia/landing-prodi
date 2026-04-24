'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import JumbotronTitleV9 from '@/components/thema-v9/component/common/jumbotronTitle'
import NewsHomeSectionV9 from '@/components/thema-v9/homepage/news'
import AgendaAnnouncementInfoV9 from '@/components/thema-v9/information/component/agendaAnnounce'
import PromotionInformationV9 from '@/components/thema-v9/information/component/promotion'

const InformationSectionV9 = () => {
  return (
    <>
      <JumbotronTitleV9 title={'Informasi'} context={'INFORMASI'} />
      <div className="bg-primary">
        <div className="container-sm py-5">
          <div className="p-1.5 px-2 rounded">
            <BreadcrumbBasic
              className={'text-white hover:bg-transparent!'}
              data={[{ name: 'Beranda', link: '/' }, { name: 'Informasi' }]}
            />
          </div>
        </div>
      </div>

      <div className="bg-primary/10 dark:bg-gray-800">
        <NewsHomeSectionV9 />
        <AgendaAnnouncementInfoV9 />
        <div className="container-sm">
          <PromotionInformationV9 />
        </div>
      </div>
    </>
  )
}

export default InformationSectionV9
