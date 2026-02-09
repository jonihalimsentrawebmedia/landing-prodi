import { StaffProfileTheme1 } from '@/components/thema-v1/profile/staff'
import { StaffProfileTheme2 } from '@/components/thema-v2/profile/staff'
import { FetchResAPI } from '@/provider/server'
import { ProfileStaffTheme3 } from '@/components/thema-v3/profile/staff'
import { ProfileStaffTheme4 } from '@/components/theme-v4/profile/staff'

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
    case 'THEMA_PRODI_TIGA': {
      return <ProfileStaffTheme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <ProfileStaffTheme4 />
    }
  }
}

export default StaffProfilePage
