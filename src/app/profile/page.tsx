import { ProfileAboutPageTheme1 } from '@/components/thema-v1/profile'
import { AboutProfileTheme2 } from '@/components/thema-v2/profile'
import { FetchResAPI } from '@/provider/server'
import { ProfileAboutTheme3 } from '@/components/thema-v3/profile'
import { ProfileAboutTheme4 } from '@/components/theme-v4/profile'
import ProfilePageV5 from '@/components/thema-v5/profile'
import ProfileSectionV6 from '@/components/thema-V6/profile'
import ProfileSectionPage7 from '@/components/thema-V7/profile'

const PageProfileProdi = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema
  console.log(theme)

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
    case 'THEMA_PRODI_TIGA': {
      return <ProfileAboutTheme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <ProfileAboutTheme4 />
    }
    case 'THEMA_PRODI_LIMA': {
      return <ProfilePageV5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <ProfileSectionV6 />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <ProfileSectionPage7 />
    }
  }
}

export default PageProfileProdi
