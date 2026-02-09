import { InformationPromotionSlugTheme1 } from '@/components/thema-v1/information/promotion/slug'
import { InformationPromotionSlugTheme2 } from '@/components/thema-v2/information/promotion/slug'
import { FetchResAPI } from '@/provider/server'
import { InformationPromotionSlugTheme3 } from '@/components/thema-v3/information/promotion/slug'

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
  }
}

export default DetailPromotionPage
