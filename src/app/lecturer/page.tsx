import { LecturerTheme1 } from '@/components/thema-v1/lecturer'
import { LecturerTheme2 } from '@/components/thema-v2/lecturer'
import { FetchResAPI } from '@/provider/server'
import { LecturerTheme3 } from '@/components/thema-v3/lecturer'
import { LecturerTheme4 } from '@/components/theme-v4/lecturer'
import LecturerListPageV5 from '@/components/thema-v5/Lecturer'
import LecturerListPageV6 from '@/components/thema-V6/lecturer'

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
    case 'THEMA_PRODI_TIGA': {
      return <LecturerTheme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <LecturerTheme4 />
    }
    case 'THEMA_PRODI_LIMA': {
      return <LecturerListPageV5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <LecturerListPageV6 />
    }
  }
}

export default LecturerPage
