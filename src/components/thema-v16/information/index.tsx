'use client'

import { JumbotronTitleV16 } from '@/components/thema-v16/component/jumbotronTitle'
import NewsHomeSectionV12 from '@/components/thema-v12/homepage/news'
import React from 'react'
import AgendaAnnouncementInformationV16 from './component/agendaAnnouncement'
import PromotionInformationV11 from '@/components/thema-v11/information/component/promotion'

const InformationPageV16 = () => {
  return (
    <>
      <JumbotronTitleV16
        title={'Informasi'}
        context={'INFORMASI'}
        data={[{ name: 'Beranda', link: '/' }, { name: 'Informasi' }]}
      />

      <div className="container-sm lg:max-w-[1280px] mx-auto space-y-2 mt-8">
        <NewsHomeSectionV12 />
      </div>

      <AgendaAnnouncementInformationV16 />

      <div className="container-sm lg:max-w-[1280px] mx-auto pb-10">
        <PromotionInformationV11 />
      </div>
    </>
  )
}
export default InformationPageV16
