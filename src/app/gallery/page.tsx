import { GalleryTheme1 } from '@/components/thema-v1/gallery'
import { GalleryTheme2 } from '@/components/thema-v2/gallery'
import { FetchResAPI } from '@/provider/server'

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
  }
}

export default GalleryPage
