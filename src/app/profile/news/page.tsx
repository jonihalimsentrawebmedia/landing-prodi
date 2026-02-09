import { ProfileNewsTheme1 } from '@/components/thema-v1/profile/news'
import { NewsProfileTheme2 } from '@/components/thema-v2/profile/news'
import { FetchResAPI } from '@/provider/server'
import { ProfileNewsTheme3 } from '@/components/thema-v3/profile/news'
import { ProfileNewsTheme4 } from '@/components/theme-v4/profile/news'

const NewsProfilePage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <ProfileNewsTheme1 />
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
  }
}

export default NewsProfilePage
