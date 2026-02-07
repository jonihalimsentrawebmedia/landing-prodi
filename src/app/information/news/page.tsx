import { InformationNewsTheme1 } from '@/components/thema-v1/information/news'
import { InformationNewsTheme2 } from '@/components/thema-v2/information/news'
import { FetchResAPI } from '@/provider/server'
import { InformationNewsTheme3 } from '@/components/thema-v3/information/news'

const NewsPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <InformationNewsTheme1 />
    }
    case 'THEMA_PRODI_SATU': {
      return <InformationNewsTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <InformationNewsTheme2 />
    }
    case 'THEMA_PRODI_TIGA': {
      return <InformationNewsTheme3 />
    }
  }
}

export default NewsPage
