import { HomeSlider } from '@/app/homepage/components/section/homeSlider'
import SectionServices from '@/app/homepage/components/section/service'
import { NewNewsSection } from '@/app/homepage/components/section/newNews'
import { AnnouncementAgenda } from '@/app/homepage/components/section/AnnouncementAgenda'
import { AboutProdiSection } from '@/app/homepage/components/section/aboutProdi'
import { LecturerProdiSection } from '@/app/homepage/components/section/Lecturer'
import { QuestionSection } from '@/app/homepage/components/section/question'

export default function Home() {
  return (
    <div>
      <HomeSlider />
      <SectionServices />
      <NewNewsSection />
      <AnnouncementAgenda />
      <AboutProdiSection />
      <LecturerProdiSection />
      <QuestionSection />
    </div>
  )
}
