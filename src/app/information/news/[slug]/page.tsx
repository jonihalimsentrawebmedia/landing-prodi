import { InformationNewsSlugTheme1 } from '@/components/thema-v1/information/news/slug'
import { InformationNewsSlugTheme2 } from '@/components/thema-v2/information/news/slug'

const DetailNewsPage = () => {
  const theme: string = '2'

  switch (theme) {
    default: {
      return <InformationNewsSlugTheme1 />
    }
    case '1': {
      return <InformationNewsSlugTheme1 />
    }
    case '2': {
      return <InformationNewsSlugTheme2 />
    }
  }
}

export default DetailNewsPage
