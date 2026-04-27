import { GalleryTheme1 } from '@/components/thema-v1/gallery'
import { GalleryTheme2 } from '@/components/thema-v2/gallery'
import { FetchResAPI } from '@/provider/server'
import { GalleryTheme3 } from '@/components/thema-v3/Gallery'
import { GalleryTheme4 } from '@/components/theme-v4/Gallery'
import GalleryPageV5 from '@/components/thema-v5/gallery'
import GalleryPageV6 from '@/components/thema-V6/gallery'
import GalleryPageV7 from '@/components/thema-V7/gallery'
import GalleryPageV8 from '@/components/thema-v8/Gallery'
import GalleryPageV9 from '@/components/thema-v9/Gallery'
import GalleryPageV10 from '@/components/thema-v10/gallery'
import GalleryPageV11 from '@/components/thema-v11/gallery'
import GalleryPageV13 from '@/components/thema-v13/gallery'

const GalleryPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <GalleryPageV5 />
    }
    case 'THEMA_PRODI_SATU': {
      return <GalleryTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <GalleryTheme2 />
    }
    case 'THEMA_PRODI_TIGA': {
      return <GalleryTheme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <GalleryTheme4 />
    }
    case 'THEMA_PRODI_LIMA': {
      return <GalleryPageV5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <GalleryPageV6 />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <GalleryPageV7 />
    }
    case 'THEMA_PRODI_DELAPAN': {
      return <GalleryPageV8 />
    }
    case 'THEMA_PRODI_SEMBILAN': {
      return <GalleryPageV9 />
    }
    case 'THEMA_PRODI_SEPULUH': {
      return <GalleryPageV10 />
    }
    case 'THEMA_PRODI_SEBELAS': {
      return <GalleryPageV11 />
    }
    case 'THEMA_PRODI_DUA_BELAS': {
      return <GalleryPageV11 />
    }
    case 'THEMA_PRODI_TIGA_BELAS': {
      return <GalleryPageV13 />
    }
  }
}

export default GalleryPage
