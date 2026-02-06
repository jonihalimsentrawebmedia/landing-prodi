import { UnitPageTheme1 } from '@/components/thema-v1/profile/unit'
import { UnitPageTheme2 } from '@/components/thema-v2/profile/unit'

const ProfileUnitPage = () => {
  const theme: string = '2'

  switch (theme) {
    default: {
      return <UnitPageTheme1 />
    }

    case '1': {
      return <UnitPageTheme1 />
    }
    case '2': {
      return <UnitPageTheme2 />
    }
  }
}

export default ProfileUnitPage
