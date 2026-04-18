import { Jumbotron } from '../component/home/jumbotron'
import ListService from '../component/home/listService'
import { TopNewsLanding } from '../component/home/topNews'
import { AgendaAnnouncement } from '../component/home/AgendaAnnouncement'
import { AboutStudyProgram } from '../component/home/AboutStudyProgram'
import { WeAreLecturer } from '../component/home/WeAreLecturer'
import { ContactRegister } from '../component/home/contactRegister'

export const PageTheme2Home = () => {
  return (
    <>
      <Jumbotron />
      <ListService />
      <TopNewsLanding />
      <AgendaAnnouncement />
      <AboutStudyProgram />
      <WeAreLecturer />
      <ContactRegister />
    </>
  )
}
