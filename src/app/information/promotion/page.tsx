import { InformationPromotionTheme1 } from '@/components/thema-v1/information/promotion'
import { InformationPromotionTheme2 } from '@/components/thema-v2/information/promotion'

const PromotionPage = () => {
  const theme: string = '2'
  switch (theme) {
    default: {
      return <InformationPromotionTheme1 />
    }
    case '1': {
      return <InformationPromotionTheme1 />
    }
    case '2': {
      return <InformationPromotionTheme2 />
    }
  }
}

export default PromotionPage
