import { LecturerTheme1 } from '@/components/thema-v1/lecturer'
import { LecturerTheme2 } from '@/components/thema-v2/lecturer'
import { FetchResAPI } from '@/provider/server'
import { LecturerTheme3 } from '@/components/thema-v3/lecturer'
import { LecturerTheme4 } from '@/components/theme-v4/lecturer'
import LecturerListPageV5 from '@/components/thema-v5/Lecturer'
import LecturerListPageV6 from '@/components/thema-V6/lecturer'
import LecturerListPageV7 from '@/components/thema-V7/lecturer'
import LecturerListPageV8 from '@/components/thema-v8/lecturer'
import LecturerListPageV9 from '@/components/thema-v9/lecturer'
import LecturerListPageV10 from '@/components/thema-v10/lecturer'
import LecturerListPageV11 from '@/components/thema-v11/lecturer'

const LecturerPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <LecturerListPageV5 />
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
    case 'THEMA_PRODI_TUJUH': {
      return <LecturerListPageV7 />
    }
    case 'THEMA_PRODI_DELAPAN': {
      return <LecturerListPageV8 />
    }
    case 'THEMA_PRODI_SEMBILAN': {
      return <LecturerListPageV9 />
    }
    case 'THEMA_PRODI_SEPULUH': {
      return <LecturerListPageV10 />
    }
    case 'THEMA_PRODI_SEBELAS': {
      return <LecturerListPageV11 />
    }
    case 'THEMA_PRODI_DUA_BELAS': {
      return <LecturerListPageV11 />
    }
  }
}

export default LecturerPage
