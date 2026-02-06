import { ContactTheme1 } from '@/components/thema-v1/contact'
import { ContactTheme2 } from '@/components/thema-v2/contact'
import { FetchResAPI } from '@/provider/server'

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
  }
}

export default ContactProdiPage
