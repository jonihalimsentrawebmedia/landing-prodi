import { StaffProfileTheme1 } from '@/components/thema-v1/profile/staff'
import { StaffProfileTheme2 } from '@/components/thema-v2/profile/staff'
import { FetchResAPI } from '@/provider/server'

const StaffProfilePage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <StaffProfileTheme1 />
    }
    case 'THEMA_PRODI_SATU': {
      return <StaffProfileTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <StaffProfileTheme2 />
    }
  }
}

export default StaffProfilePage
