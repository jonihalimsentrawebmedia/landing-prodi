import { ProfileLecturerTheme1 } from '@/components/thema-v1/profile/lecturer'
import { LecturerProfileTheme2 } from '@/components/thema-v2/profile/lecturer'
import { FetchResAPI } from '@/provider/server'
import { ProfileLecturerThem3 } from '@/components/thema-v3/profile/lecturer'
import { ProfileLecturerTheme4 } from '@/components/theme-v4/profile/lecturer'

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
    case 'THEMA_PRODI_TIGA': {
      return <ProfileLecturerThem3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <ProfileLecturerTheme4 />
    }
  }
}

export default LecturerProfilePage
