import React from 'react'
import { JumbotronSlider5 } from '@/components/thema-v5/homePage/jumbotron'
import ServiceListV5 from '@/components/thema-v5/homePage/listService'
import SectionAboutV6 from '@/components/thema-V6/homepage/About'
import NewsHomeSectionV6 from '@/components/thema-V6/homepage/news'
import AgendaAnnouncementV6 from '@/components/thema-V6/homepage/AgendeAnnounce'
import OurLecturerSection from '@/components/thema-V6/homepage/Lecturer'

const HomeTheme6 = () => {
  return (
    <>
      <JumbotronSlider5 />
      <ServiceListV5 />
      <SectionAboutV6 />
      <NewsHomeSectionV6 />
      <AgendaAnnouncementV6 />
      <OurLecturerSection />
    </>
  )
}

export default HomeTheme6
