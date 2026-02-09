import { UnitPageTheme1 } from '@/components/thema-v1/profile/unit'
import { UnitPageTheme2 } from '@/components/thema-v2/profile/unit'
import { FetchResAPI } from '@/provider/server'
import { ProfileUnitTHeme3 } from '@/components/thema-v3/profile/unit'
import { ProfileUnitTheme4 } from '@/components/theme-v4/profile/unit'

const ProfileUnitPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <UnitPageTheme1 />
    }

    case 'THEMA_PRODI_SATU': {
      return <UnitPageTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <UnitPageTheme2 />
    }
    case 'THEMA_PRODI_TIGA': {
      return <ProfileUnitTHeme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <ProfileUnitTheme4 />
    }
  }
}

export default ProfileUnitPage
