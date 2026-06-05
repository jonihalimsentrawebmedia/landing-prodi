import { ContactProfileTheme1 } from '@/components/thema-v1/profile/contact'
import { ContactProfileTheme2 } from '@/components/thema-v2/profile/contact'
import { FetchResAPI } from '@/provider/server'
import { ProfileContactTheme3 } from '@/components/thema-v3/profile/contact'
import { ProfileContactTheme4 } from '@/components/theme-v4/profile/contact'
import ContactUsProfileV5 from '@/components/thema-v5/profile/contact-us'
import ProfileContactV6 from '@/components/thema-V6/profile/contact'
import ProfileContactV7 from '@/components/thema-V7/profile/contact'
import ProfileContactV8 from '@/components/thema-v8/profile/contact'
import ProfileContactV9 from '@/components/thema-v9/profile/contact'
import ProfileContactV10 from '@/components/thema-v10/profile/contact'
import ProfileContactV11 from '@/components/thema-v11/profile/contact'
import ProfileContactV13 from '@/components/thema-v13/profile/contact'
import ProfileContactV14 from '@/components/thema-v14/profile/contact'
import ProfileContactV15 from '@/components/thema-v15/profile/contact'

const ProfileContactUsPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <ContactUsProfileV5 />
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
    case 'THEMA_PRODI_LIMA': {
      return <ContactUsProfileV5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <ProfileContactV6 />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <ProfileContactV7 />
    }
    case 'THEMA_PRODI_DELAPAN': {
      return <ProfileContactV8 />
    }
    case 'THEMA_PRODI_SEMBILAN': {
      return <ProfileContactV9 />
    }
    case 'THEMA_PRODI_SEPULUH': {
      return <ProfileContactV10 />
    }
    case 'THEMA_PRODI_SEBELAS': {
      return <ProfileContactV11 />
    }
    case 'THEMA_PRODI_DUA_BELAS': {
      return <ProfileContactV11 />
    }
    case 'THEMA_PRODI_TIGA_BELAS': {
      return <ProfileContactV13 />
    }
    case 'THEMA_PRODI_EMPAT_BELAS': {
      return <ProfileContactV14 />
    }
    case 'THEMA_PRODI_LIMA_BELAS': {
      return <ProfileContactV15 />
    }
  }
}

export default ProfileContactUsPage
