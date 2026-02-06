import { ProfileNewsTheme1 } from '@/components/thema-v1/profile/news'
import { NewsProfileTheme2 } from '@/components/thema-v2/profile/news'
import { FetchResAPI } from '@/provider/server'

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
  }
}

export default NewsProfilePage
