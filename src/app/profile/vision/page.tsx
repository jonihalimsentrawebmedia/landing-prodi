import VisionTheme1Page from '@/components/thema-v1/profile/vision'
import VisionTheme2Page from '@/components/thema-v2/profile/vision'
import { FetchResAPI } from '@/provider/server'
import { ProfileVisionTheme3 } from '@/components/thema-v3/profile/vission'
import ProfileVisionTheme4 from '@/components/theme-v4/profile/vision'
import VisionMissionGoalsV5 from '@/components/thema-v5/profile/vision'
import ProfileVisionV6 from '@/components/thema-V6/profile/vision'
import ProfileVisionV7 from '@/components/thema-V7/profile/vision'

const VisionProfilePage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <VisionTheme1Page />
    }

    case 'THEMA_PRODI_SATU': {
      return <VisionTheme1Page />
    }
    case 'THEMA_PRODI_DUA': {
      return <VisionTheme2Page />
    }
    case 'THEMA_PRODI_TIGA': {
      return <ProfileVisionTheme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <ProfileVisionTheme4 />
    }
    case 'THEMA_PRODI_LIMA': {
      return <VisionMissionGoalsV5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <ProfileVisionV6 />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <ProfileVisionV7 />
    }
  }
}

export default VisionProfilePage
