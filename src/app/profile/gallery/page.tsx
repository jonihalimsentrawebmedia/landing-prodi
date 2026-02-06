import { GalleryProfileTheme1 } from '@/components/thema-v1/profile/gallery'
import { GalleryProfileTheme2 } from '@/components/thema-v2/profile/gallery'

const GalleryProfilePage = () => {
  const theme: string = '2'

  switch (theme) {
    default: {
      return <GalleryProfileTheme1 />
    }
    case '1': {
      return <GalleryProfileTheme1 />
    }
    case '2': {
      return <GalleryProfileTheme2 />
    }
  }
}

export default GalleryProfilePage
