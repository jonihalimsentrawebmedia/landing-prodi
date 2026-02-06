import { InformationAgendaTheme1 } from '@/components/thema-v1/information/agenda'
import { InformationAgendaTheme2 } from '@/components/thema-v2/information/agenda'
import { FetchResAPI } from '@/provider/server'

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
  }
}

export default AgendaPage
