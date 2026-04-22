import { GalleryTheme1 } from '@/components/thema-v1/gallery'
import { GalleryTheme2 } from '@/components/thema-v2/gallery'
import { FetchResAPI } from '@/provider/server'
import { GalleryTheme3 } from '@/components/thema-v3/Gallery'
import { GalleryTheme4 } from '@/components/theme-v4/Gallery'
import GalleryPageV5 from '@/components/thema-v5/gallery'
import GalleryPageV6 from '@/components/thema-V6/gallery'

const GalleryPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <GalleryTheme1 />
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
  }
}

export default GalleryPage
