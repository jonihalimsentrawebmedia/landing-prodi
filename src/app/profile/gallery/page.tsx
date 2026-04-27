import { GalleryProfileTheme1 } from '@/components/thema-v1/profile/gallery'
import { GalleryProfileTheme2 } from '@/components/thema-v2/profile/gallery'
import { FetchResAPI } from '@/provider/server'
import { ProfileGalleryTheme3 } from '@/components/thema-v3/profile/gallery'
import { ProfileGalleryTheme4 } from '@/components/theme-v4/profile/gallery'
import ProfileGalleryV5 from '@/components/thema-v5/profile/gallery'
import ProfileGallerySectionV6 from '@/components/thema-V6/profile/Gallery'
import ProfileGallerySectionV7 from '@/components/thema-V7/profile/gallery'
import ProfileGallerySectionV8 from '@/components/thema-v8/profile/gallery'
import ProfileGallerySectionV9 from '@/components/thema-v9/profile/gallery'
import ProfileGallerySectionV10 from '@/components/thema-v10/profile/gallery'
import ProfileGallerySectionV11 from '@/components/thema-v11/profile/gallery'
import ProfileGallerySectionV13 from '@/components/thema-v13/profile/gallery'

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
    case 'THEMA_PRODI_LIMA': {
      return <ProfileGalleryV5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <ProfileGallerySectionV6 />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <ProfileGallerySectionV7 />
    }
    case 'THEMA_PRODI_DELAPAN': {
      return <ProfileGallerySectionV8 />
    }
    case 'THEMA_PRODI_SEMBILAN': {
      return <ProfileGallerySectionV9 />
    }
    case 'THEMA_PRODI_SEPULUH': {
      return <ProfileGallerySectionV10 />
    }
    case 'THEMA_PRODI_SEBELAS': {
      return <ProfileGallerySectionV11 />
    }
    case 'THEMA_PRODI_DUA_BELAS': {
      return <ProfileGallerySectionV11 />
    }
    case 'THEMA_PRODI_TIGA_BELAS': {
      return <ProfileGallerySectionV13 />
    }
  }
}

export default GalleryProfilePage
