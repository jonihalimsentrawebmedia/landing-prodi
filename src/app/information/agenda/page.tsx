import { InformationAgendaTheme1 } from '@/components/thema-v1/information/agenda'
import { InformationAgendaTheme2 } from '@/components/thema-v2/information/agenda'
import { FetchResAPI } from '@/provider/server'
import { InformationAgendaTheme3 } from '@/components/thema-v3/information/agenda'
import { InformationAgendaTheme4 } from '@/components/theme-v4/information/agenda'
import AgendaInformationPageV5 from '@/components/thema-v5/information/Agenda'
import AgendaInformationPageV6 from '@/components/thema-V6/information/agenda'
import AgendaInformationPageV7 from '@/components/thema-V7/information/agenda'
import AgendaInformationPageV8 from '@/components/thema-v8/information/agenda'
import AgendaInformationPageV9 from '@/components/thema-v9/information/agenda'
import AgendaInformationPageV10 from '@/components/thema-v10/information/agenda'
import AgendaInformationPageV11 from '@/components/thema-v11/information/agenda'
import AgendaInformationPageV13 from '@/components/thema-v13/information/agenda'
import AgendaInformationPageV14 from '@/components/thema-v14/information/agenda'
import AgendaInformationPageV15 from '@/components/thema-v15/information/agenda'
import AgendaInformationPageV16 from '@/components/thema-v16/information/agenda'

const AgendaPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <AgendaInformationPageV5 />
    }
    case 'THEMA_PRODI_SATU': {
      return <InformationAgendaTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <InformationAgendaTheme2 />
    }
    case 'THEMA_PRODI_TIGA': {
      return <InformationAgendaTheme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <InformationAgendaTheme4 />
    }
    case 'THEMA_PRODI_LIMA': {
      return <AgendaInformationPageV5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <AgendaInformationPageV6 />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <AgendaInformationPageV7 />
    }
    case 'THEMA_PRODI_DELAPAN': {
      return <AgendaInformationPageV8 />
    }
    case 'THEMA_PRODI_SEMBILAN': {
      return <AgendaInformationPageV9 />
    }
    case 'THEMA_PRODI_SEPULUH': {
      return <AgendaInformationPageV10 />
    }
    case 'THEMA_PRODI_SEBELAS': {
      return <AgendaInformationPageV11 />
    }
    case 'THEMA_PRODI_DUA_BELAS': {
      return <AgendaInformationPageV11 />
    }
    case 'THEMA_PRODI_TIGA_BELAS': {
      return <AgendaInformationPageV13 />
    }
    case 'THEMA_PRODI_EMPAT_BELAS': {
      return <AgendaInformationPageV14 />
    }
    case 'THEMA_PRODI_LIMA_BELAS': {
      return <AgendaInformationPageV15 />
    }
    case 'THEMA_PRODI_ENAM_BELAS': {
      return <AgendaInformationPageV16 />
    }
  }
}

export default AgendaPage
