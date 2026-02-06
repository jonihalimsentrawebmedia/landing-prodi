import { InformationNewsSlugTheme1 } from '@/components/thema-v1/information/news/slug'
import { InformationNewsSlugTheme2 } from '@/components/thema-v2/information/news/slug'
import { FetchResAPI } from '@/provider/server'

const DetailNewsPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <InformationNewsSlugTheme1 />
    }
    case 'THEMA_PRODI_SATU': {
      return <InformationNewsSlugTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <InformationNewsSlugTheme2 />
    }
  }
}

export default DetailNewsPage
