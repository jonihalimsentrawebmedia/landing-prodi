import { InformationNewsSlugTheme1 } from '@/components/thema-v1/information/news/slug'
import { InformationNewsSlugTheme2 } from '@/components/thema-v2/information/news/slug'
import { FetchResAPI } from '@/provider/server'
import { InformationNewsSlugTheme3 } from '@/components/thema-v3/information/news/slug'
import { InformationNewsSlugTheme4 } from '@/components/theme-v4/information/news/slug/component'
import DetailNewsPageV5 from '@/components/thema-v5/information/news/detail'
import DetailNewsPageV7 from '@/components/thema-V7/information/news/detail'
import DetailNewsPageV8 from '@/components/thema-v8/information/news/detail'
import DetailNewsPageV9 from '@/components/thema-v9/information/news/detail'
import DetailNewsPageV10 from '@/components/thema-v10/information/news/detail'
import DetailNewsPageV11 from '@/components/thema-v11/information/news/detail'
import DetailNewsPageV13 from '@/components/thema-v13/information/news/detail'
import DetailNewsPageV14 from '@/components/thema-v14/information/news/detail'

const DetailNewsPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <DetailNewsPageV5 />
    }
    case 'THEMA_PRODI_SATU': {
      return <InformationNewsSlugTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <InformationNewsSlugTheme2 />
    }
    case 'THEMA_PRODI_TIGA': {
      return <InformationNewsSlugTheme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <InformationNewsSlugTheme4 />
    }
    case 'THEMA_PRODI_LIMA': {
      return <DetailNewsPageV5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <DetailNewsPageV5 />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <DetailNewsPageV7 />
    }
    case 'THEMA_PRODI_DELAPAN': {
      return <DetailNewsPageV8 />
    }
    case 'THEMA_PRODI_SEMBILAN': {
      return <DetailNewsPageV9 />
    }
    case 'THEMA_PRODI_SEPULUH': {
      return <DetailNewsPageV10 />
    }
    case 'THEMA_PRODI_SEBELAS': {
      return <DetailNewsPageV11 />
    }
    case 'THEMA_PRODI_DUA_BELAS': {
      return <DetailNewsPageV11 />
    }
    case 'THEMA_PRODI_TIGA_BELAS': {
      return <DetailNewsPageV13 />
    }
    case 'THEMA_PRODI_EMPAT_BELAS': {
      return <DetailNewsPageV14 />
    }
  }
}

export default DetailNewsPage
