import { InformationAnnouncementTheme1 } from '@/components/thema-v1/information/announcement'
import { InformationAnnouncementTheme2 } from '@/components/thema-v2/information/announcement'
import { FetchResAPI } from '@/provider/server'

const InfoAnnouncementsPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <InformationAnnouncementTheme1 />
    }
    case 'THEMA_PRODI_SATU': {
      return <InformationAnnouncementTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <InformationAnnouncementTheme2 />
    }
  }
}

export default InfoAnnouncementsPage
