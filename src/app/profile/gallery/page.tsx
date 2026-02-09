import { GalleryProfileTheme1 } from '@/components/thema-v1/profile/gallery'
import { GalleryProfileTheme2 } from '@/components/thema-v2/profile/gallery'
import { FetchResAPI } from '@/provider/server'
import { ProfileGalleryTheme3 } from '@/components/thema-v3/profile/gallery'
import { ProfileGalleryTheme4 } from '@/components/theme-v4/profile/gallery'

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
    case 'THEMA_PRODI_TIGA': {
      return <ProfileGalleryTheme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <ProfileGalleryTheme4 />
    }
  }
}

export default GalleryProfilePage
