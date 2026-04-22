import { InformationPromotionSlugTheme1 } from '@/components/thema-v1/information/promotion/slug'
import { InformationPromotionSlugTheme2 } from '@/components/thema-v2/information/promotion/slug'
import { FetchResAPI } from '@/provider/server'
import { InformationPromotionSlugTheme3 } from '@/components/thema-v3/information/promotion/slug'
import { InformationPromotionSlugTheme4 } from '@/components/theme-v4/information/promotion/slug'
import DetailPromotionV5 from '@/components/thema-v5/information/promotion/detail'

const DetailPromotionPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <InformationPromotionSlugTheme1 />
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
  }
}

export default DetailPromotionPage
