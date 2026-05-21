import { InformationAnnouncementSlugTheme1 } from '@/components/thema-v1/information/announcement/slug'
import { InformationAnnouncementSlugTheme2 } from '@/components/thema-v2/information/announcement/slug'
import { FetchResAPI } from '@/provider/server'
import { InformationAnnouncementSlugTheme3 } from '@/components/thema-v3/information/announcement/slug'
import { InformationAnnouncementSlugTheme4 } from '@/components/theme-v4/information/announcement/slug'
import DetailAnnouncementPageV5 from '@/components/thema-v5/information/announcement/detail'
import AnnouncementDetailPageV7 from '@/components/thema-V7/information/announcement/detail'
import AnnouncementDetailPageV8 from '@/components/thema-v8/information/announcement/detail'
import AnnouncementDetailPageV9 from '@/components/thema-v9/information/announcement/detail'
import AnnouncementDetailPageV10 from '@/components/thema-v10/information/announcement/detail'
import AnnouncementDetailPageV11 from '@/components/thema-v11/information/announcement/detail'
import AnnouncementDetailPageV13 from '@/components/thema-v13/information/announcement/detail'
import AnnouncementDetailPageV14 from '@/components/thema-v14/information/announcement/detail'

const DetailAnnouncementPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <DetailAnnouncementPageV5 />
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
    case 'THEMA_PRODI_DELAPAN': {
      return <AnnouncementDetailPageV8 />
    }
    case 'THEMA_PRODI_SEMBILAN': {
      return <AnnouncementDetailPageV9 />
    }
    case 'THEMA_PRODI_SEPULUH': {
      return <AnnouncementDetailPageV10 />
    }
    case 'THEMA_PRODI_SEBELAS': {
      return <AnnouncementDetailPageV11 />
    }
    case 'THEMA_PRODI_DUA_BELAS': {
      return <AnnouncementDetailPageV11 />
    }
    case 'THEMA_PRODI_TIGA_BELAS': {
      return <AnnouncementDetailPageV13 />
    }
    case 'THEMA_PRODI_EMPAT_BELAS': {
      return <AnnouncementDetailPageV14 />
    }
  }
}

export default DetailAnnouncementPage
