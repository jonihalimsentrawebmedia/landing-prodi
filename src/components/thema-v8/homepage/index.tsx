import React from 'react'
import JumbotronSliderV8 from '@/components/thema-v8/homepage/jumbotron'
import ServiceListV7 from '@/components/thema-V7/homePage/services'
import AboutProfileHomeV8 from '@/components/thema-v8/homepage/About'
import NewsHomeSectionV8 from '@/components/thema-v8/homepage/news'
import AgendaAnnouncementV8 from '@/components/thema-v8/homepage/agendaAnnounce'
import OurLecturerSectionV8 from '@/components/thema-v8/homepage/lecturer'

const HomeTheme8 = () => {
  return (
    <>
      <JumbotronSliderV8 />
      <ServiceListV7 />
      <AboutProfileHomeV8 />
      <NewsHomeSectionV8 />
      <AgendaAnnouncementV8 />
      <OurLecturerSectionV8 />
    </>
  )
}

export default HomeTheme8
