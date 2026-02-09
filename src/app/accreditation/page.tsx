import { AccreditationTheme1 } from '@/components/thema-v1/accreditation'
import { AccreditationTheme2 } from '@/components/thema-v2/accreditation'
import { FetchResAPI } from '@/provider/server'
import { AccreditationTheme3 } from '@/components/thema-v3/accreditation'
import { AccreditationTheme4 } from '@/components/theme-v4/accreditation'

const AccreditationPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <AccreditationTheme1 />
    }
    case 'THEMA_PRODI_SATU': {
      return <AccreditationTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <AccreditationTheme2 />
    }
    case 'THEMA_PRODI_TIGA': {
      return <AccreditationTheme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <AccreditationTheme4 />
    }
  }
}

export default AccreditationPage
