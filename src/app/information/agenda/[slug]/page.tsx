import { InformationAgendaSlugTheme1 } from '@/components/thema-v1/information/agenda/slug'
import { InformationAgendaSlugTheme2 } from '@/components/thema-v2/information/agenda/slug'
import { FetchResAPI } from '@/provider/server'

const DetailAgendaPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <InformationAgendaSlugTheme1 />
    }
    case 'THEMA_PRODI_SATU': {
      return <InformationAgendaSlugTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <InformationAgendaSlugTheme2 />
    }
  }
}

export default DetailAgendaPage
