'use client'

import { JumbotronTitleV15 } from '@/components/thema-v15/component/common/jumbotronTitle'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import NewsHomeSectionV12 from '@/components/thema-v12/homepage/news'
import React from 'react'
import AgendaAnnouncementInformationV15 from './component/agendaAnnouncement'
import PromotionInformationV11 from '@/components/thema-v11/information/component/promotion'

const InformationPageV15 = () => {
  return (
    <>
      <JumbotronTitleV15 title={'Informasi'} context={'INFORMASI'} />
      <div className={'bg-primary w-full'}>
        <div className="container-sm p-2">
          <BreadcrumbBasic
            className={'text-white! hover:bg-[#1F7A63]!'}
            data={[{ name: 'Beranda', link: '/' }, { name: 'Informasi' }]}
          />
        </div>
      </div>

      <NewsHomeSectionV12 />
      <AgendaAnnouncementInformationV15 />
      <div className="container-sm lg:max-w-[1280px] mx-auto">
        <PromotionInformationV11 />
      </div>
    </>
  )
}
export default InformationPageV15
