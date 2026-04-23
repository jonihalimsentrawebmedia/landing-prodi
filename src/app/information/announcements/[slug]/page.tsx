import { InformationAnnouncementSlugTheme1 } from '@/components/thema-v1/information/announcement/slug'
import { InformationAnnouncementSlugTheme2 } from '@/components/thema-v2/information/announcement/slug'
import { FetchResAPI } from '@/provider/server'
import { InformationAnnouncementSlugTheme3 } from '@/components/thema-v3/information/announcement/slug'
import { InformationAnnouncementSlugTheme4 } from '@/components/theme-v4/information/announcement/slug'
import DetailAnnouncementPageV5 from '@/components/thema-v5/information/announcement/detail'
import AnnouncementDetailPageV7 from '@/components/thema-V7/information/announcement/detail'

const DetailAnnouncementPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <InformationAnnouncementSlugTheme1 />
    }
    case 'THEMA_PRODI_SATU': {
      return <InformationAnnouncementSlugTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <InformationAnnouncementSlugTheme2 />
    }
    case 'THEMA_PRODI_TIGA': {
      return <InformationAnnouncementSlugTheme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <InformationAnnouncementSlugTheme4 />
    }
    case 'THEMA_PRODI_LIMA': {
      return <DetailAnnouncementPageV5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <DetailAnnouncementPageV5 />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <AnnouncementDetailPageV7 />
    }
  }
}

export default DetailAnnouncementPage
