import { InformationAgendaSlugTheme1 } from '@/components/thema-v1/information/agenda/slug'
import { InformationAgendaSlugTheme2 } from '@/components/thema-v2/information/agenda/slug'

const DetailAgendaPage = () => {
  const theme: string = '2'

  switch (theme) {
    default: {
      return <InformationAgendaSlugTheme1 />
    }
    case '1': {
      return <InformationAgendaSlugTheme1 />
    }
    case '2': {
      return <InformationAgendaSlugTheme2 />
    }
  }
}

export default DetailAgendaPage
