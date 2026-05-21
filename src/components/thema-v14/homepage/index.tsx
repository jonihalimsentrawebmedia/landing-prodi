import React from 'react'
import JumbotronSliderV14 from '@/components/thema-v14/homepage/jumbontron'
import ServiceListV5 from '@/components/thema-v5/homePage/listService'
import ShortDetailProdi14 from '@/components/thema-v14/homepage/shortDetail'
import NewsHomeSectionV12 from '@/components/thema-v12/homepage/news'
import AgendaAnnouncementHomeV14 from '@/components/thema-v14/homepage/agendaAnnouncement'
import OurLecturerHomeV14 from '@/components/thema-v14/homepage/ourLecturer'

const HomeTheme14 = () => {
  return (
    <>
      <JumbotronSliderV14 />
      <ServiceListV5 />
      <ShortDetailProdi14 />
      <NewsHomeSectionV12 />
      <AgendaAnnouncementHomeV14 />
      <OurLecturerHomeV14 />
    </>
  )
}

export default HomeTheme14
