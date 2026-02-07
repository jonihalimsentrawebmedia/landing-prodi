import VisionTheme1Page from '@/components/thema-v1/profile/vision'
import VisionTheme2Page from '@/components/thema-v2/profile/vision'
import { FetchResAPI } from '@/provider/server'
import { ProfileVisionTheme3 } from '@/components/thema-v3/profile/vission'

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
  }
}

export default VisionProfilePage
