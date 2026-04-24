import { ContactTheme1 } from '@/components/thema-v1/contact'
import { ContactTheme2 } from '@/components/thema-v2/contact'
import { FetchResAPI } from '@/provider/server'
import { ContactTheme3 } from '@/components/thema-v3/contact'
import { ContactTheme4 } from '@/components/theme-v4/contact'
import ContactRegisteredV5 from '@/components/thema-v5/contact'
import ContactRegisteredV6 from '@/components/thema-V6/contact'
import ContactUsePageV7 from '@/components/thema-V7/contact'
import ContactUsePageV8 from '@/components/thema-v8/contact'
import ContactUsePageV9 from '@/components/thema-v9/contact'

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
    case 'THEMA_PRODI_ENAM': {
      return <ContactRegisteredV6 />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <ContactUsePageV7 />
    }
    case 'THEMA_PRODI_DELAPAN': {
      return <ContactUsePageV8 />
    }
    case 'THEMA_PRODI_SEMBILAN': {
      return <ContactUsePageV9 />
    }
  }
}

export default ContactProdiPage
