import React from 'react'
import JumbotronSliderV9 from '@/components/thema-v9/homepage/jumbonTronSlider'
import ServiceListV7 from '@/components/thema-V7/homePage/services'
import AboutProfileHomeV8 from '@/components/thema-v8/homepage/About'
import NewsHomeSectionV9 from '@/components/thema-v9/homepage/news'
import AgendaAnnouncementV9 from '@/components/thema-v9/homepage/agendaAnnounce'
import OurLecturerSectionV9 from '@/components/thema-v9/homepage/lecturer'

const HomeTheme9 = () => {
  return (
    <>
      <JumbotronSliderV9 />
      <ServiceListV7 />
      <AboutProfileHomeV8 />
      <NewsHomeSectionV9 />
      <AgendaAnnouncementV9 />
      <OurLecturerSectionV9 />
    </>
  )
}

export default HomeTheme9
