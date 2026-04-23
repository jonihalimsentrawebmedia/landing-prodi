import { InformationTheme1 } from '@/components/thema-v1/information'
import { InformationTheme2 } from '@/components/thema-v2/information'
import { FetchResAPI } from '@/provider/server'
import { InformationTheme3 } from '@/components/thema-v3/information'
import { InformationTheme4 } from '@/components/theme-v4/information'
import InformationPageSectionV5 from '@/components/thema-v5/information'
import InformationSectionV6 from '@/components/thema-V6/information'
import InformationSectionV7 from '@/components/thema-V7/information'

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
    case 'THEMA_PRODI_TIGA': {
      return <InformationTheme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <InformationTheme4 />
    }
    case 'THEMA_PRODI_LIMA': {
      return <InformationPageSectionV5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <InformationSectionV6 />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <InformationSectionV7 />
    }
  }
}

export default InformationPage
