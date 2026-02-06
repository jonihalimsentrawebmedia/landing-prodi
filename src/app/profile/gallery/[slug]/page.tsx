import { GallerySlugTheme1 } from '@/components/thema-v1/profile/gallery/slug'
import { SLugGalleryTheme2 } from '@/components/thema-v2/profile/gallery/slug'
import { FetchResAPI } from '@/provider/server'

const AlbumPhotoSlugPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <GallerySlugTheme1 />
    }
    case 'THEMA_PRODI_SATU': {
      return <GallerySlugTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <SLugGalleryTheme2 />
    }
  }
}

export default AlbumPhotoSlugPage
