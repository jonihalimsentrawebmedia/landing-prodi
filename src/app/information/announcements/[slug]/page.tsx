import { InformationAnnouncementSlugTheme1 } from '@/components/thema-v1/information/announcement/slug'
import { InformationAnnouncementSlugTheme2 } from '@/components/thema-v2/information/announcement/slug'
import { FetchResAPI } from '@/provider/server'
import { InformationAnnouncementSlugTheme3 } from '@/components/thema-v3/information/announcement/slug'

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
  }
}

export default DetailAnnouncementPage
