import { ContactProfileTheme1 } from '@/components/thema-v1/profile/contact'
import { ContactProfileTheme2 } from '@/components/thema-v2/profile/contact'
import { FetchResAPI } from '@/provider/server'
import { ProfileContactTheme3 } from '@/components/thema-v3/profile/contact'
import { ProfileContactTheme4 } from '@/components/theme-v4/profile/contact'

const ProfileContactUsPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <ContactProfileTheme1 />
    }
    case 'THEMA_PRODI_SATU': {
      return <ContactProfileTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <ContactProfileTheme2 />
    }
    case 'THEMA_PRODI_TIGA': {
      return <ProfileContactTheme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <ProfileContactTheme4 />
    }
  }
}

export default ProfileContactUsPage
