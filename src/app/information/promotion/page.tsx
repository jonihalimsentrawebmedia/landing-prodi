import { InformationPromotionTheme1 } from '@/components/thema-v1/information/promotion'
import { InformationPromotionTheme2 } from '@/components/thema-v2/information/promotion'
import { FetchResAPI } from '@/provider/server'
import { InformationPromotionTheme3 } from '@/components/thema-v3/information/promotion'
import { InformationPromotionTheme4 } from '@/components/theme-v4/information/promotion'

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
    case 'THEMA_PRODI_TIGA': {
      return <InformationPromotionTheme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <InformationPromotionTheme4 />
    }
  }
}

export default PromotionPage
