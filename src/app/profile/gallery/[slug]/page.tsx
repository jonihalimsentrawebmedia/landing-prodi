import { GallerySlugTheme1 } from '@/components/thema-v1/profile/gallery/slug'
import { SLugGalleryTheme2 } from '@/components/thema-v2/profile/gallery/slug'

const AlbumPhotoSlugPage = () => {
  const theme: string = '2'

  switch (theme) {
    default: {
      return <GallerySlugTheme1 />
    }
    case '1': {
      return <GallerySlugTheme1 />
    }
    case '2': {
      return <SLugGalleryTheme2 />
    }
  }
}

export default AlbumPhotoSlugPage
