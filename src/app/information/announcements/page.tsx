import { InformationAnnouncementTheme1 } from '@/components/thema-v1/information/announcement'
import { InformationAnnouncementTheme2 } from '@/components/thema-v2/information/announcement'
import { FetchResAPI } from '@/provider/server'
import { AnnouncementInformationTheme3 } from '@/components/thema-v3/information/announcement'
import { InformationAnnouncementTheme4 } from '@/components/theme-v4/information/announcement'
import AnnouncementInformationV5 from '@/components/thema-v5/information/announcement'
import AnnouncementInformationV6 from '@/components/thema-V6/information/announcement'
import AnnouncementInformationPage7 from '@/components/thema-V7/information/announcement'
import AnnouncementInformationPage8 from '@/components/thema-v8/information/announcement'

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
    case 'THEMA_PRODI_TIGA': {
      return <AnnouncementInformationTheme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <InformationAnnouncementTheme4 />
    }
    case 'THEMA_PRODI_LIMA': {
      return <AnnouncementInformationV5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <AnnouncementInformationV6 />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <AnnouncementInformationPage7 />
    }
    case 'THEMA_PRODI_DELAPAN': {
      return <AnnouncementInformationPage8 />
    }
  }
}

export default InfoAnnouncementsPage
