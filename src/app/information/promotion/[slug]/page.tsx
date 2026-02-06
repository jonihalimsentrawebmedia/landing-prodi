import { InformationPromotionSlugTheme1 } from '@/components/thema-v1/information/promotion/slug'
import { InformationPromotionSlugTheme2 } from '@/components/thema-v2/information/promotion/slug'

const DetailPromotionPage = () => {
  const theme: string = '2'

  switch (theme) {
    default: {
      return <InformationPromotionSlugTheme1 />
    }
    case '1': {
      return <InformationPromotionSlugTheme1 />
    }
    case '2': {
      return <InformationPromotionSlugTheme2 />
    }
  }
}

export default DetailPromotionPage
