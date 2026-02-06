import { GalleryTheme1 } from '@/components/thema-v1/gallery'
import { GalleryTheme2 } from '@/components/thema-v2/gallery'

const GalleryPage = () => {
  const theme: string = '2'
  switch (theme) {
    default: {
      return <GalleryTheme1 />
    }
    case '1': {
      return <GalleryTheme1 />
    }
    case '2': {
      return <GalleryTheme2 />
    }
  }
}

export default GalleryPage
