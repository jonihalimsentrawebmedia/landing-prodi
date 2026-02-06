import { GalleryProfileTheme1 } from '@/components/thema-v1/profile/gallery'
import { GalleryProfileTheme2 } from '@/components/thema-v2/profile/gallery'
import { FetchResAPI } from '@/provider/server'

const GalleryProfilePage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <GalleryProfileTheme1 />
    }
    case 'THEMA_PRODI_SATU': {
      return <GalleryProfileTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <GalleryProfileTheme2 />
    }
  }
}

export default GalleryProfilePage
