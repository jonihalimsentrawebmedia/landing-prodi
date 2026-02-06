import { ProfileAboutPageTheme1 } from '@/components/thema-v1/profile'
import { AboutProfileTheme2 } from '@/components/thema-v2/profile'
import { FetchResAPI } from '@/provider/server'

const PageProfileProdi = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <ProfileAboutPageTheme1 />
    }
    case 'THEMA_PRODI_SATU': {
      return <ProfileAboutPageTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <AboutProfileTheme2 />
    }
  }
}

export default PageProfileProdi
