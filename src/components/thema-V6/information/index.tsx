'use client'

import ProfileLayout from '@/components/thema-v5/profile/layout'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import InformationSectionNews from '@/components/thema-V6/information/component/news'
import AgendaAnnouncementV6 from '@/components/thema-V6/homepage/AgendeAnnounce'
import PromotionSectionInformationV6 from '@/components/thema-V6/information/component/promotion'

const InformationSectionV6 = () => {
  return (
    <>
      <ProfileLayout title={'Informasi'} context={'INFORMASI'}>
        <div className={'bg-footer w-full max-w-[1920px] mx-auto p-4'}>
          <div className="container-sm">
            <BreadcrumbBasic data={[{ name: 'Beranda', link: '/' }, { name: 'Informasi' }]} />
          </div>
        </div>

        <div className="bg-primary/10">
          <InformationSectionNews />
          <AgendaAnnouncementV6 />
          <PromotionSectionInformationV6 />
        </div>
      </ProfileLayout>
    </>
  )
}

export default InformationSectionV6
