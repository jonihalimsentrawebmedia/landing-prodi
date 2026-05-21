'use client'

import { JumbotronTitleV14 } from '@/components/thema-v14/component/common/jumbotronTitle'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import NewsHomeSectionV12 from '@/components/thema-v12/homepage/news'
import React from 'react'
import AgendaAnnouncementInformationV14 from './component/agendaAnnouncement'
import PromotionInformationV11 from '@/components/thema-v11/information/component/promotion'

const InformationPageV14 = () => {
  return (
    <>
      <JumbotronTitleV14 title={'Informasi'} context={'INFORMASI'} />
      <div className={'bg-footer w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
        <div className="container-sm px-2!">
          <BreadcrumbBasic
            className={'text-white! hover:bg-primary!'}
            data={[{ name: 'Beranda', link: '/' }, { name: 'Informasi' }]}
          />
        </div>
      </div>

      <NewsHomeSectionV12 />
      <AgendaAnnouncementInformationV14 />
      <div className="container-sm">
        <PromotionInformationV11 />
      </div>
    </>
  )
}
export default InformationPageV14
