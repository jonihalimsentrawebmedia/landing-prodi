import LayoutBaseTheme4 from '../component/layout/index'
import { SliderLandingTheme4 } from './component/sliderLanding'
import ListService from '@/components/thema-v2/component/home/listService'
import { NewNewsLanding } from './component/newNewsLanding'
import { AgendaAnnouncement } from './component/agendaAnnouncement'
import { AboutProdi } from './component/AboutProdi'
import { OurLecturer } from '@/components/theme-v4/home/component/OurLecturer'
import { ContactRegister } from '@/components/theme-v4/home/component/Contact'

const HomeTheme4 = () => {
  return (
    <LayoutBaseTheme4>
      <SliderLandingTheme4 />
      <div className="pt-22">
        <ListService />
      </div>
      <NewNewsLanding />
      <AgendaAnnouncement />
      <AboutProdi />
      <OurLecturer />
      <ContactRegister />
    </LayoutBaseTheme4>
  )
}

export default HomeTheme4
