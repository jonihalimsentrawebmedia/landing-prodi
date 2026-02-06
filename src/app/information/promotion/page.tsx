import { InformationPromotionTheme1 } from '@/components/thema-v1/information/promotion'
import { InformationPromotionTheme2 } from '@/components/thema-v2/information/promotion'
import { FetchResAPI } from '@/provider/server'

const PromotionPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <InformationPromotionTheme1 />
    }
    case 'THEMA_PRODI_SATU': {
      return <InformationPromotionTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <InformationPromotionTheme2 />
    }
  }
}

export default PromotionPage
