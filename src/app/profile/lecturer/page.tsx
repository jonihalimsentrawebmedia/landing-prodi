import { ProfileLecturerTheme1 } from '@/components/thema-v1/profile/lecturer'
import { LecturerProfileTheme2 } from '@/components/thema-v2/profile/lecturer'

const LecturerProfilePage = () => {
  const theme: string = '2'

  switch (theme) {
    default: {
      return <ProfileLecturerTheme1 />
    }
    case '1': {
      return <ProfileLecturerTheme1 />
    }
    case '2': {
      return <LecturerProfileTheme2 />
    }
  }
}

export default LecturerProfilePage
