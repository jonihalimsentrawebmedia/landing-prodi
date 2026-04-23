import { InformationNewsTheme1 } from '@/components/thema-v1/information/news'
import { InformationNewsTheme2 } from '@/components/thema-v2/information/news'
import { FetchResAPI } from '@/provider/server'
import { InformationNewsTheme3 } from '@/components/thema-v3/information/news'
import { InformationNewsTheme4 } from '@/components/theme-v4/information/news'
import NewsInformationV5 from '@/components/thema-v5/information/news'
import NewsInformationPageV6 from '@/components/thema-V6/information/news'
import NewsInformationPageV7 from '@/components/thema-V7/information/news'

const NewsPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data?.thema

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
    case 'THEMA_PRODI_EMPAT': {
      return <InformationNewsTheme4 />
    }
    case 'THEMA_PRODI_LIMA': {
      return <NewsInformationV5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <NewsInformationPageV6 />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <NewsInformationPageV7 />
    }
  }
}

export default NewsPage
