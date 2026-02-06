import OrganizationProfileTheme1 from '@/components/thema-v1/profile/structure-organization'
import OrganizationProfileTheme2 from '@/components/thema-v2/profile/structure-organization'

const StructureOrganizationPage = () => {
  const theme: string = '2'

  switch (theme) {
    default: {
      return <OrganizationProfileTheme1 />
    }
    case '1': {
      return <OrganizationProfileTheme1 />
    }
    case '2': {
      return <OrganizationProfileTheme2 />
    }
  }
}

export default StructureOrganizationPage
