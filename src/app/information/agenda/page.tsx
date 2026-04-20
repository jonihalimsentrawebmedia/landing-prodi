import { InformationAgendaTheme1 } from '@/components/thema-v1/information/agenda'
import { InformationAgendaTheme2 } from '@/components/thema-v2/information/agenda'
import { FetchResAPI } from '@/provider/server'
import { InformationAgendaTheme3 } from '@/components/thema-v3/information/agenda'
import { InformationAgendaTheme4 } from '@/components/theme-v4/information/agenda'
import AgendaInformationPageV5 from '@/components/thema-v5/information/Agenda'

const AgendaPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <InformationAgendaTheme1 />
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
  }
}

export default AgendaPage
