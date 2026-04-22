import { InformationPromotionTheme1 } from '@/components/thema-v1/information/promotion'
import { InformationPromotionTheme2 } from '@/components/thema-v2/information/promotion'
import { FetchResAPI } from '@/provider/server'
import { InformationPromotionTheme3 } from '@/components/thema-v3/information/promotion'
import { InformationPromotionTheme4 } from '@/components/theme-v4/information/promotion'
import InformationPromotionV5 from '@/components/thema-v5/information/promotion'
import InformationPromotionV6 from '@/components/thema-V6/promotion'

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
    case 'THEMA_PRODI_LIMA': {
      return <InformationPromotionV5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <InformationPromotionV6 />
    }
  }
}

export default PromotionPage
