import OrganizationProfileTheme1 from '@/components/thema-v1/profile/structure-organization'
import OrganizationProfileTheme2 from '@/components/thema-v2/profile/structure-organization'
import { FetchResAPI } from '@/provider/server'

const StructureOrganizationPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <OrganizationProfileTheme1 />
    }
    case 'THEMA_PRODI_SATU': {
      return <OrganizationProfileTheme1 />
    }
    case 'THEMA_PRODI_DUA': {
      return <OrganizationProfileTheme2 />
    }
  }
}

export default StructureOrganizationPage
