import { InformationNewsTheme1 } from '@/components/thema-v1/information/news'
import { InformationNewsTheme2 } from '@/components/thema-v2/information/news'

const NewsPage = () => {
  const theme: string = '2'

  switch (theme) {
    default: {
      return <InformationNewsTheme1 />
    }
    case '1': {
      return <InformationNewsTheme1 />
    }
    case '2': {
      return <InformationNewsTheme2 />
    }
  }
}

export default NewsPage
