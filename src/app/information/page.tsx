import { InformationTheme1 } from '@/components/thema-v1/information'
import { InformationTheme2 } from '@/components/thema-v2/information'

const InformationPage = () => {
  const theme: string = '2'
  switch (theme) {
    default: {
      return <InformationTheme1 />
    }
    case '1': {
      return <InformationTheme1 />
    }
    case '2': {
      return <InformationTheme2 />
    }
  }
}

export default InformationPage
