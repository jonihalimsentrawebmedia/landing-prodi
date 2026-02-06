import { ProfileAboutPageTheme1 } from '@/components/thema-v1/profile'
import { AboutProfileTheme2 } from '@/components/thema-v2/profile'

const PageProfileProdi = () => {
  const theme: string = '2'

  switch (theme) {
    default: {
      return <ProfileAboutPageTheme1 />
    }
    case '1': {
      return <ProfileAboutPageTheme1 />
    }
    case '2': {
      return <AboutProfileTheme2 />
    }
  }
}

export default PageProfileProdi
