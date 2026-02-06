import { StaffProfileTheme1 } from '@/components/thema-v1/profile/staff'
import { StaffProfileTheme2 } from '@/components/thema-v2/profile/staff'

const StaffProfilePage = () => {
  const theme: string = '2'
  switch (theme) {
    default: {
      return <StaffProfileTheme1 />
    }
    case '1': {
      return <StaffProfileTheme1 />
    }
    case '2': {
      return <StaffProfileTheme2 />
    }
  }
}

export default StaffProfilePage
