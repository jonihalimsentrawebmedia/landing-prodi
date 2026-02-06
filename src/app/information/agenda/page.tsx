import { InformationAgendaTheme1 } from '@/components/thema-v1/information/agenda'
import { InformationAgendaTheme2 } from '@/components/thema-v2/information/agenda'

const AgendaPage = () => {
  const theme: string = '2'

  switch (theme) {
    default: {
      return <InformationAgendaTheme1 />
    }
    case '1': {
      return <InformationAgendaTheme1 />
    }
    case '2': {
      return <InformationAgendaTheme2 />
    }
  }
}

export default AgendaPage
