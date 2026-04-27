import React from 'react'
import ServiceListV7 from '@/components/thema-V7/homePage/services'
import JumbotronSliderV13 from '@/components/thema-v13/homepage/jumbontron'
import AboutAndLecturer13 from '@/components/thema-v13/homepage/aboutAndLecturer'
import NewsHomeSectionV13 from '@/components/thema-v13/homepage/news'
import AgendaAnnouncementV12 from '@/components/thema-v12/homepage/agendaAnnounce'

const HomeTheme13 = () => {
  return (
    <>
      <JumbotronSliderV13 />
      <ServiceListV7 />
      <AboutAndLecturer13 />
      <NewsHomeSectionV13 />
      <AgendaAnnouncementV12 />
    </>
  )
}

export default HomeTheme13
