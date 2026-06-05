import { AccreditationTheme1 } from '@/components/thema-v1/accreditation'
import { AccreditationTheme2 } from '@/components/thema-v2/accreditation'
import { FetchResAPI } from '@/provider/server'
import { AccreditationTheme3 } from '@/components/thema-v3/accreditation'
import { AccreditationTheme4 } from '@/components/theme-v4/accreditation'
import AccreditationPageV5 from '@/components/thema-v5/Accrreditation'
import AccreditationPageV6 from '@/components/thema-V6/Accreditation'
import AccreditationPageV7 from '@/components/thema-V7/Accreditation'
import AccreditationPageV8 from '@/components/thema-v8/Accreditation'
import AccreditationPageV9 from '@/components/thema-v9/Accreditation'
import AccreditationPageV10 from '@/components/thema-v10/Accreditation'
import AccreditationPageV11 from '@/components/thema-v11/Accreditation'
import AccreditationPageV13 from '@/components/thema-v13/Accreditation'
import AccreditationPageV14 from '@/components/thema-v14/accreditation'
import AccreditationPageV15 from '@/components/thema-v15/accreditation'
import AccreditationPageV16 from '@/components/thema-v16/accreditation'

const AccreditationPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <AccreditationPageV5 />
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
    case 'THEMA_PRODI_LIMA': {
      return <AccreditationPageV5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <AccreditationPageV6 />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <AccreditationPageV7 />
    }
    case 'THEMA_PRODI_DELAPAN': {
      return <AccreditationPageV8 />
    }
    case 'THEMA_PRODI_SEMBILAN': {
      return <AccreditationPageV9 />
    }
    case 'THEMA_PRODI_SEPULUH': {
      return <AccreditationPageV10 />
    }
    case 'THEMA_PRODI_SEBELAS': {
      return <AccreditationPageV11 />
    }
    case 'THEMA_PRODI_DUA_BELAS': {
      return <AccreditationPageV11 />
    }
    case 'THEMA_PRODI_TIGA_BELAS': {
      return <AccreditationPageV13 />
    }
    case 'THEMA_PRODI_EMPAT_BELAS': {
      return <AccreditationPageV14 />
    }
    case 'THEMA_PRODI_LIMA_BELAS': {
      return <AccreditationPageV15 />
    }
    case 'THEMA_PRODI_ENAM_BELAS': {
      return <AccreditationPageV16 />
    }
  }
}

export default AccreditationPage
