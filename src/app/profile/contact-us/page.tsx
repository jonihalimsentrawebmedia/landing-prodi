import { ContactProfileTheme1 } from '@/components/thema-v1/profile/contact'
import { ContactProfileTheme2 } from '@/components/thema-v2/profile/contact'

const ProfileContactUsPage = () => {
  const theme: string = '2'

  switch (theme) {
    default: {
      return <ContactProfileTheme1 />
    }
    case '1': {
      return <ContactProfileTheme1 />
    }
    case '2': {
      return <ContactProfileTheme2 />
    }
  }
}

export default ProfileContactUsPage
