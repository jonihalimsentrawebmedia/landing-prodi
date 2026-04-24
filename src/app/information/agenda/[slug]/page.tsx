import { InformationAgendaSlugTheme1 } from '@/components/thema-v1/information/agenda/slug'
import { InformationAgendaSlugTheme2 } from '@/components/thema-v2/information/agenda/slug'
import { FetchResAPI } from '@/provider/server'
import { InformationAgendaSlugTheme3 } from '@/components/thema-v3/information/agenda/slug'
import { InformationAgendaSlugTheme4 } from '@/components/theme-v4/information/agenda/slug'
import DetailAgendaPgeV5 from '@/components/thema-v5/information/Agenda/detail'
import AgendaDetailPageV7 from '@/components/thema-V7/information/agenda/detail'
import AgendaDetailPageV8 from '@/components/thema-v8/information/agenda/detail'

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
    case 'THEMA_PRODI_TIGA': {
      return <InformationAgendaSlugTheme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <InformationAgendaSlugTheme4 />
    }
    case 'THEMA_PRODI_LIMA': {
      return <DetailAgendaPgeV5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <DetailAgendaPgeV5 />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <AgendaDetailPageV7 />
    }
    case 'THEMA_PRODI_DELAPAN': {
      return <AgendaDetailPageV8 />
    }
  }
}

export default DetailAgendaPage
