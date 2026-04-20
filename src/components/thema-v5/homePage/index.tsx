import React from 'react'
import { JumbotronSlider5 } from '@/components/thema-v5/homePage/jumbotron'
import ServiceListV5 from '@/components/thema-v5/homePage/listService'
import AboutSectionProfileV5 from '@/components/thema-v5/homePage/aboutSection'
import NewsListSectionV5 from '@/components/thema-v5/homePage/newsList'
import AgendaAnnouncementV5 from '@/components/thema-v5/homePage/agendaAnnoucement'
import OurLecturerV5 from '@/components/thema-v5/homePage/ourLecturer'

const HomeTheme5 = () => {
  return (
    <>
      <JumbotronSlider5 />
      <ServiceListV5 />
      <AboutSectionProfileV5 />
      <NewsListSectionV5 />
      <AgendaAnnouncementV5 />
      <OurLecturerV5 />
    </>
  )
}

export default HomeTheme5
