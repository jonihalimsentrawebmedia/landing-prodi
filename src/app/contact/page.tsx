import { ContactTheme1 } from '@/components/thema-v1/contact'
import { ContactTheme2 } from '@/components/thema-v2/contact'

const ContactProdiPage = () => {
  const theme: string = '2'
  switch (theme) {
    default: {
      return <ContactTheme1 />
    }
    case '1': {
      return <ContactTheme1 />
    }
    case '2': {
      return <ContactTheme2 />
    }
  }
}

export default ContactProdiPage
