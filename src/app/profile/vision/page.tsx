import VisionTheme1Page from '@/components/thema-v1/profile/vision'
import VisionTheme2Page from '@/components/thema-v2/profile/vision'

const VisionProfilePage = () => {
  const theme: string = '2'

  switch (theme) {
    default: {
      return <VisionTheme1Page />
    }

    case '1': {
      return <VisionTheme1Page />
    }
    case '2': {
      return <VisionTheme2Page />
    }
  }
}

export default VisionProfilePage
