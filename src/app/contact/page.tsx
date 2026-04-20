import { ContactTheme1 } from '@/components/thema-v1/contact'
import { ContactTheme2 } from '@/components/thema-v2/contact'
import { FetchResAPI } from '@/provider/server'
import { ContactTheme3 } from '@/components/thema-v3/contact'
import { ContactTheme4 } from '@/components/theme-v4/contact'
import ContactRegisteredV5 from '@/components/thema-v5/contact'

const ContactProdiPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <ContactTheme1 />
    }
    case 'THEMA_PRODI_SATU': {
      return <ContactTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <ContactTheme2 />
    }
    case 'THEMA_PRODI_TIGA': {
      return <ContactTheme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <ContactTheme4 />
    }
    case 'THEMA_PRODI_LIMA': {
      return <ContactRegisteredV5 />
    }
  }
}

export default ContactProdiPage
