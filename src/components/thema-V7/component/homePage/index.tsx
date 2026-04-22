import React from 'react'
import JumbotronSlider7 from '@/components/thema-V7/component/homePage/jumbtron'
import AboutSectionV7 from '@/components/thema-V7/component/homePage/about'
import ServiceListV7 from '@/components/thema-V7/component/homePage/services'
import NewsHomeSectionV7 from '@/components/thema-V7/component/homePage/news'
import AgendaAnnouncementV7 from '@/components/thema-V7/component/homePage/AgendaAnnounce'
import OurLecturerSectionV7 from '@/components/thema-V7/component/homePage/lecturer'

const HomeTheme7 = () => {
  return (
    <>
      <JumbotronSlider7 />
      <AboutSectionV7 />
      <ServiceListV7 />
      <NewsHomeSectionV7 />
      <AgendaAnnouncementV7 />
      <OurLecturerSectionV7 />
    </>
  )
}

export default HomeTheme7
