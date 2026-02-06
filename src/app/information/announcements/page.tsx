import { InformationAnnouncementTheme1 } from '@/components/thema-v1/information/announcement'
import { InformationAnnouncementTheme2 } from '@/components/thema-v2/information/announcement'

const InfoAnnouncementsPage = () => {
  const theme: string = '2'

  switch (theme) {
    default: {
      return <InformationAnnouncementTheme1 />
    }
    case '1': {
      return <InformationAnnouncementTheme1 />
    }
    case '2': {
      return <InformationAnnouncementTheme2 />
    }
  }
}

export default InfoAnnouncementsPage
