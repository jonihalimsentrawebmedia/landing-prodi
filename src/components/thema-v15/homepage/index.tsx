import React from 'react'
import ServiceListV5 from '@/components/thema-v5/homePage/listService'
import JumbotronSliderV15 from '@/components/thema-v15/homepage/jumbtronSlider'
import ShortDetailProdi14 from '@/components/thema-v14/homepage/shortDetail'
import NewsLandingV15 from '@/components/thema-v15/homepage/newsLanding'
import AgendaAnnouncementHomeV15 from '@/components/thema-v15/homepage/agendaAnnouncement'
import OurLecturerHomeV14 from '@/components/thema-v14/homepage/ourLecturer'

const HomeTheme15 = () => {
  return (
    <>
      <JumbotronSliderV15 />
      <ServiceListV5 />
      <ShortDetailProdi14 />
      <NewsLandingV15 />
      <AgendaAnnouncementHomeV15 />
      <OurLecturerHomeV14 />
    </>
  )
}

export default HomeTheme15
