import { UnitPageTheme1 } from '@/components/thema-v1/profile/unit'
import { UnitPageTheme2 } from '@/components/thema-v2/profile/unit'
import { FetchResAPI } from '@/provider/server'

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
  }
}

export default ProfileUnitPage
