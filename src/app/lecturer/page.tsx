import { LecturerTheme1 } from '@/components/thema-v1/lecturer'
import { LecturerTheme2 } from '@/components/thema-v2/lecturer'
import { FetchResAPI } from '@/provider/server'

const LecturerPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <LecturerTheme1 />
    }
    case 'THEMA_PRODI_SATU': {
      return <LecturerTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <LecturerTheme2 />
    }
  }
}

export default LecturerPage
