import { ProfileNewsTheme1 } from '@/components/thema-v1/profile/news'
import { NewsProfileTheme2 } from '@/components/thema-v2/profile/news'

const NewsProfilePage = () => {
  const theme: string = '2'

  switch (theme) {
    default: {
      return <ProfileNewsTheme1 />
    }
    case '1': {
      return <ProfileNewsTheme1 />
    }
    case '2': {
      return <NewsProfileTheme2 />
    }
  }
}

export default NewsProfilePage
