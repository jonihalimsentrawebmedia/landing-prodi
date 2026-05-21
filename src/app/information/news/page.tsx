import { InformationNewsTheme1 } from '@/components/thema-v1/information/news'
import { InformationNewsTheme2 } from '@/components/thema-v2/information/news'
import { FetchResAPI } from '@/provider/server'
import { InformationNewsTheme3 } from '@/components/thema-v3/information/news'
import { InformationNewsTheme4 } from '@/components/theme-v4/information/news'
import NewsInformationV5 from '@/components/thema-v5/information/news'
import NewsInformationPageV6 from '@/components/thema-V6/information/news'
import NewsInformationPageV7 from '@/components/thema-V7/information/news'
import NewsInformationPageV8 from '@/components/thema-v8/information/news'
import NewsInformationPageV9 from '@/components/thema-v9/information/news'
import NewsInformationPageV10 from '@/components/thema-v10/information/news'
import NewsInformationPageV11 from '@/components/thema-v11/information/news'
import NewsInformationPageV13 from '@/components/thema-v13/information/news'
import NewsInformationPageV14 from '@/components/thema-v14/information/news'

const NewsPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data?.thema

  switch (theme) {
    default: {
      return <NewsInformationV5 />
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
    case 'THEMA_PRODI_DELAPAN': {
      return <NewsInformationPageV8 />
    }
    case 'THEMA_PRODI_SEMBILAN': {
      return <NewsInformationPageV9 />
    }
    case 'THEMA_PRODI_SEPULUH': {
      return <NewsInformationPageV10 />
    }
    case 'THEMA_PRODI_SEBELAS': {
      return <NewsInformationPageV11 />
    }
    case 'THEMA_PRODI_DUA_BELAS': {
      return <NewsInformationPageV11 />
    }
    case 'THEMA_PRODI_TIGA_BELAS': {
      return <NewsInformationPageV13 />
    }
    case 'THEMA_PRODI_EMPAT_BELAS': {
      return <NewsInformationPageV14 />
    }
  }
}

export default NewsPage
