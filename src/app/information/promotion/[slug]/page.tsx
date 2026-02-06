import { InformationPromotionSlugTheme1 } from '@/components/thema-v1/information/promotion/slug'
import { InformationPromotionSlugTheme2 } from '@/components/thema-v2/information/promotion/slug'
import { FetchResAPI } from '@/provider/server'

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
  }
}

export default DetailPromotionPage
