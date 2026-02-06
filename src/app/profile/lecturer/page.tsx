import { ProfileLecturerTheme1 } from '@/components/thema-v1/profile/lecturer'
import { LecturerProfileTheme2 } from '@/components/thema-v2/profile/lecturer'
import { FetchResAPI } from '@/provider/server'

const LecturerProfilePage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <ProfileLecturerTheme1 />
    }
    case 'THEMA_PRODI_SATU': {
      return <ProfileLecturerTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <LecturerProfileTheme2 />
    }
  }
}

export default LecturerProfilePage
