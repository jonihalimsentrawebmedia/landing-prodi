import { SliderHomeTheme3 } from './component/section/Jumbotron'
import ListService from '@/components/thema-v2/component/home/listService'
import { NewsLanding } from './component/section/newsLanding'
import { AgendaAnnouncement } from './component/section/agendaAnnouncement'
import { AboutStudyProgramTheme3 } from './component/section/aboutStudyProgram'
import { OurLecturer } from './component/section/OurLecturer'
import { ContactRegisterTheme3 } from './component/section/ContactRegister'

export const HomePageTheme3 = () => {
  return (
    <>
      <SliderHomeTheme3 />
      <ListService />
      <NewsLanding />
      <AgendaAnnouncement />
      <AboutStudyProgramTheme3 />
      <OurLecturer />
      <ContactRegisterTheme3 />
    </>
  )
}
