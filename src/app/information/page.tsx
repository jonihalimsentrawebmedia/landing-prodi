import { InformationTheme1 } from '@/components/thema-v1/information'
import { InformationTheme2 } from '@/components/thema-v2/information'
import { FetchResAPI } from '@/provider/server'

const InformationPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <InformationTheme1 />
    }
    case 'THEMA_PRODI_SATU': {
      return <InformationTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <InformationTheme2 />
    }
  }
}

export default InformationPage
