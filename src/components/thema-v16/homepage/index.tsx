import JumbotronSliderV16 from '@/components/thema-v16/homepage/jumbotronSlider'
import ServiceListV5 from '@/components/thema-v5/homePage/listService'
import ShortDetailProdi14 from '@/components/thema-v14/homepage/shortDetail'
import NewsHomeSectionV12 from '@/components/thema-v12/homepage/news'
import React from 'react'
import AgendaAnnouncementHomeV15 from '@/components/thema-v15/homepage/agendaAnnouncement'
import ContentLecturerV16 from '@/components/thema-v16/homepage/lecturerHomeV16'

const HomeTheme16 = () => {
  return (
    <>
      <JumbotronSliderV16 />
      <ServiceListV5 />
      <ShortDetailProdi14 />
      <NewsHomeSectionV12 />
      <AgendaAnnouncementHomeV15 />
      <ContentLecturerV16 />
    </>
  )
}

export default HomeTheme16
