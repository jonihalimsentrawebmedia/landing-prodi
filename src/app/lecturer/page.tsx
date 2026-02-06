import { LecturerTheme1 } from '@/components/thema-v1/lecturer'
import { LecturerTheme2 } from '@/components/thema-v2/lecturer'

const LecturerPage = () => {
  const theme: string = '2'
  switch (theme) {
    default: {
      return <LecturerTheme1 />
    }
    case '1': {
      return <LecturerTheme1 />
    }
    case '2': {
      return <LecturerTheme2 />
    }
  }
}

export default LecturerPage
