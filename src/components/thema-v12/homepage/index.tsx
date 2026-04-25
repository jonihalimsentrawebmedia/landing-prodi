import React from 'react'
import ServiceListV7 from '@/components/thema-V7/homePage/services'
import OurLecturerSectionV10 from '@/components/thema-v10/homepage/lecturer'
import AboutProfileHomeV8 from '@/components/thema-v8/homepage/About'
import JumbotronSliderV12 from '@/components/thema-v12/homepage/jumbotron'
import NewsHomeSectionV12 from '@/components/thema-v12/homepage/news'
import AgendaAnnouncementV12 from '@/components/thema-v12/homepage/agendaAnnounce'

const HomeTheme12 = () => {
  return (
    <>
      <JumbotronSliderV12 />
      <AboutProfileHomeV8 />
      <ServiceListV7 />
      <NewsHomeSectionV12 />
      <AgendaAnnouncementV12 />
      <OurLecturerSectionV10 />
    </>
  )
}

export default HomeTheme12
