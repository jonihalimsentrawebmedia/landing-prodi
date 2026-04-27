import { ProfileNewsTheme1 } from '@/components/thema-v1/profile/news'
import { NewsProfileTheme2 } from '@/components/thema-v2/profile/news'
import { FetchResAPI } from '@/provider/server'
import { ProfileNewsTheme3 } from '@/components/thema-v3/profile/news'
import { ProfileNewsTheme4 } from '@/components/theme-v4/profile/news'
import NewsProfileSectionV5 from '@/components/thema-v5/profile/news'
import ProfileNewsV6 from '@/components/thema-V6/profile/news'
import ProfileNewsV7 from '@/components/thema-V7/profile/news'
import ProfileNewsV8 from '@/components/thema-v8/profile/news'
import ProfileNewsV9 from '@/components/thema-v9/profile/news'
import ProfileNewsV10 from '@/components/thema-v10/profile/news'
import ProfileNewsV11 from '@/components/thema-v11/profile/news'
import ProfileNewsV13 from '@/components/thema-v13/profile/news'

const NewsProfilePage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <NewsProfileSectionV5 />
    }
    case 'THEMA_PRODI_SATU': {
      return <ProfileNewsTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <NewsProfileTheme2 />
    }
    case 'THEMA_PRODI_TIGA': {
      return <ProfileNewsTheme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <ProfileNewsTheme4 />
    }
    case 'THEMA_PRODI_LIMA': {
      return <NewsProfileSectionV5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <ProfileNewsV6 />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <ProfileNewsV7 />
    }
    case 'THEMA_PRODI_DELAPAN': {
      return <ProfileNewsV8 />
    }
    case 'THEMA_PRODI_SEMBILAN': {
      return <ProfileNewsV9 />
    }
    case 'THEMA_PRODI_SEPULUH': {
      return <ProfileNewsV10 />
    }
    case 'THEMA_PRODI_SEBELAS': {
      return <ProfileNewsV11 />
    }
    case 'THEMA_PRODI_DUA_BELAS': {
      return <ProfileNewsV11 />
    }
    case 'THEMA_PRODI_TIGA_BELAS': {
      return <ProfileNewsV13 />
    }
  }
}

export default NewsProfilePage
