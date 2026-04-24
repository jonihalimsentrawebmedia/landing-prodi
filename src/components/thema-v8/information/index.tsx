'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import InformationNewsV7 from '@/components/thema-V7/information/component/news'
import AgendaAnnouncementV7 from '@/components/thema-V7/information/component/AgendaAnnounce'
import PromotionInformationV7 from '@/components/thema-V7/information/component/promotion'
import JumbotronTitleV8 from '@/components/thema-v8/component/common/jumbotronTitle'

const InformationSectionV8 = () => {
  return (
    <>
      <JumbotronTitleV8 title={'Informasi'} context={'INFORMASI'} />
      <div className="bg-footer">
        <div className="container-sm py-5">
          <div className="bg-blue-50 p-1.5 px-2 rounded">
            <BreadcrumbBasic
              className={'text-primary hover:bg-transparent!'}
              data={[{ name: 'Beranda', link: '/' }, { name: 'Informasi' }]}
            />
          </div>
        </div>
      </div>

      <div className="bg-footer dark:bg-gray-800">
        <div className="container-sm lg:py-8 py-5 space-y-5">
          <InformationNewsV7 />
        </div>
        <AgendaAnnouncementV7 />
        <div className="container-sm">
          <PromotionInformationV7 />
        </div>
      </div>
    </>
  )
}

export default InformationSectionV8
