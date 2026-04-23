'use client'

import JumbotronTitleV7 from '@/components/thema-V7/component/common/jumbotron'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import InformationNewsV7 from '@/components/thema-V7/information/component/news'
import AgendaAnnouncementV7 from '@/components/thema-V7/information/component/AgendaAnnounce'
import PromotionInformationV7 from '@/components/thema-V7/information/component/promotion'

const InformationSectionV7 = () => {
  return (
    <>
      <JumbotronTitleV7 title={'Informasi'} context={'INFORMASI'} />
      <div className={'bg-primary w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
        <div className="container-sm">
          <BreadcrumbBasic
            className={'text-white! hover:bg-primary!'}
            data={[{ name: 'Beranda', link: '/' }, { name: 'Informasi' }]}
          />
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

export default InformationSectionV7
