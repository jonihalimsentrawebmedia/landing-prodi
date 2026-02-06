import { AccreditationTheme1 } from '@/components/thema-v1/accreditation'
import { AccreditationTheme2 } from '@/components/thema-v2/accreditation'

const AccreditationPage = () => {
  const theme: string = '2'

  switch (theme) {
    default: {
      return <AccreditationTheme1 />
    }
    case '1': {
      return <AccreditationTheme1 />
    }
    case '2': {
      return <AccreditationTheme2 />
    }
  }
}

export default AccreditationPage
