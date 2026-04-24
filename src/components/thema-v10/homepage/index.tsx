import React from 'react'
import ServiceListV7 from '@/components/thema-V7/homePage/services'
import JumbotronSliderV10 from '@/components/thema-v10/homepage/slider'
import AboutProfileHomeV10 from '@/components/thema-v10/homepage/about'
import NewsHomeSectionV10 from '@/components/thema-v10/homepage/news'
import AgendaAnnouncementV10 from '@/components/thema-v10/homepage/HomeAgendaAnnounce'
import OurLecturerSectionV10 from '@/components/thema-v10/homepage/lecturer'

const HomeTheme10 = () => {
  return (
    <>
      <JumbotronSliderV10 />
      <ServiceListV7 />
      <AboutProfileHomeV10 />
      <NewsHomeSectionV10 />
      <AgendaAnnouncementV10 />
      <OurLecturerSectionV10 />
    </>
  )
}

export default HomeTheme10
