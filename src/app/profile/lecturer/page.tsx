import { ProfileLecturerTheme1 } from '@/components/thema-v1/profile/lecturer'
import { LecturerProfileTheme2 } from '@/components/thema-v2/profile/lecturer'
import { FetchResAPI } from '@/provider/server'
import { ProfileLecturerThem3 } from '@/components/thema-v3/profile/lecturer'
import { ProfileLecturerTheme4 } from '@/components/theme-v4/profile/lecturer'
import LecturerProdiListV5 from '@/components/thema-v5/profile/lecturer'
import ProfileLecturerV6 from '@/components/thema-V6/profile/lecturer'
import ProfileSectionPage7 from '@/components/thema-V7/profile/lecturer'
import LecturerProfilePageV8 from '@/components/thema-v8/profile/lecturer'
import LecturerProfilePageV9 from '@/components/thema-v9/profile/lecturer'
import LecturerProfilePageV10 from '@/components/thema-v10/profile/lecturer'
import LecturerProfilePageV11 from '@/components/thema-v11/profile/lecturer'
import LecturerProfilePageV13 from '@/components/thema-v13/profile/lecturer'
import LecturerProfilePageV14 from '@/components/thema-v14/profile/lecturer'

const LecturerProfilePage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <LecturerProdiListV5 />
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
    case 'THEMA_PRODI_LIMA': {
      return <LecturerProdiListV5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <ProfileLecturerV6 />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <ProfileSectionPage7 />
    }
    case 'THEMA_PRODI_DELAPAN': {
      return <LecturerProfilePageV8 />
    }
    case 'THEMA_PRODI_SEMBILAN': {
      return <LecturerProfilePageV9 />
    }
    case 'THEMA_PRODI_SEPULUH': {
      return <LecturerProfilePageV10 />
    }
    case 'THEMA_PRODI_SEBELAS': {
      return <LecturerProfilePageV11 />
    }
    case 'THEMA_PRODI_DUA_BELAS': {
      return <LecturerProfilePageV11 />
    }
    case 'THEMA_PRODI_TIGA_BELAS': {
      return <LecturerProfilePageV13 />
    }
    case 'THEMA_PRODI_EMPAT_BELAS': {
      return <LecturerProfilePageV14 />
    }
  }
}

export default LecturerProfilePage
