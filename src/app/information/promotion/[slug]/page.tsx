import { InformationPromotionSlugTheme1 } from '@/components/thema-v1/information/promotion/slug'
import { InformationPromotionSlugTheme2 } from '@/components/thema-v2/information/promotion/slug'
import { FetchResAPI } from '@/provider/server'
import { InformationPromotionSlugTheme3 } from '@/components/thema-v3/information/promotion/slug'
import { InformationPromotionSlugTheme4 } from '@/components/theme-v4/information/promotion/slug'
import DetailPromotionV5 from '@/components/thema-v5/information/promotion/detail'
import DetailPromotionV7 from '@/components/thema-V7/information/promotion/detail'
import DetailPromotionV8 from '@/components/thema-v8/information/promotion/detail'
import DetailPromotionV9 from '@/components/thema-v9/information/promotion/detail'
import DetailPromotionV10 from '@/components/thema-v10/information/promotion/detail'
import DetailPromotionPageV11 from '@/components/thema-v11/information/promotion/detail'

const DetailPromotionPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <DetailPromotionV5 />
    }
    case 'THEMA_PRODI_SATU': {
      return <InformationPromotionSlugTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <InformationPromotionSlugTheme2 />
    }
    case 'THEMA_PRODI_TIGA': {
      return <InformationPromotionSlugTheme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <InformationPromotionSlugTheme4 />
    }
    case 'THEMA_PRODI_LIMA': {
      return <DetailPromotionV5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <DetailPromotionV5 />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <DetailPromotionV7 />
    }
    case 'THEMA_PRODI_DELAPAN': {
      return <DetailPromotionV8 />
    }
    case 'THEMA_PRODI_SEMBILAN': {
      return <DetailPromotionV9 />
    }
    case 'THEMA_PRODI_SEPULUH': {
      return <DetailPromotionV10 />
    }
    case 'THEMA_PRODI_SEBELAS': {
      return <DetailPromotionPageV11 />
    }
    case 'THEMA_PRODI_DUA_BELAS': {
      return <DetailPromotionPageV11 />
    }
  }
}

export default DetailPromotionPage
