import React from 'react'
import AboutSectionV7 from '@/components/thema-V7/homePage/about'
import ServiceListV7 from '@/components/thema-V7/homePage/services'
import JumbotronSliderV11 from '@/components/thema-v11/homepage/JumbotronSliderV11'
import AgendaAnnouncementV10 from '@/components/thema-v10/homepage/HomeAgendaAnnounce'
import OurLecturerSectionV10 from '@/components/thema-v10/homepage/lecturer'
import NewsHomeSectionV11 from '@/components/thema-v11/homepage/news'

const HomeTheme11 = () => {
  return (
    <>
      <JumbotronSliderV11 />
      <AboutSectionV7 />
      <ServiceListV7 />
      <NewsHomeSectionV11 />
      <AgendaAnnouncementV10 />
      <OurLecturerSectionV10 />
    </>
  )
}

export default HomeTheme11
