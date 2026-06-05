import { InformationTheme1 } from '@/components/thema-v1/information'
import { InformationTheme2 } from '@/components/thema-v2/information'
import { FetchResAPI } from '@/provider/server'
import { InformationTheme3 } from '@/components/thema-v3/information'
import { InformationTheme4 } from '@/components/theme-v4/information'
import InformationPageSectionV5 from '@/components/thema-v5/information'
import InformationSectionV6 from '@/components/thema-V6/information'
import InformationSectionV7 from '@/components/thema-V7/information'
import InformationSectionV8 from '@/components/thema-v8/information'
import InformationSectionV9 from '@/components/thema-v9/information'
import InformationPageV10 from '@/components/thema-v10/information'
import InformationPageV11 from '@/components/thema-v11/information'
import InformationPageV12 from '@/components/thema-v12/information'
import InformationPageV13 from '@/components/thema-v13/information'
import InformationPageV14 from '@/components/thema-v14/information'
import InformationPageV15 from '@/components/thema-v15/information'

const InformationPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <InformationPageSectionV5 />
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
    case 'THEMA_PRODI_DELAPAN': {
      return <InformationSectionV8 />
    }
    case 'THEMA_PRODI_SEMBILAN': {
      return <InformationSectionV9 />
    }
    case 'THEMA_PRODI_SEPULUH': {
      return <InformationPageV10 />
    }
    case 'THEMA_PRODI_SEBELAS': {
      return <InformationPageV11 />
    }
    case 'THEMA_PRODI_DUA_BELAS': {
      return <InformationPageV12 />
    }
    case 'THEMA_PRODI_TIGA_BELAS': {
      return <InformationPageV13 />
    }
    case 'THEMA_PRODI_EMPAT_BELAS': {
      return <InformationPageV14 />
    }
    case 'THEMA_PRODI_LIMA_BELAS': {
      return <InformationPageV15 />
    }
  }
}

export default InformationPage
