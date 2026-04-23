import OrganizationProfileTheme1 from '@/components/thema-v1/profile/structure-organization'
import OrganizationProfileTheme2 from '@/components/thema-v2/profile/structure-organization'
import { FetchResAPI } from '@/provider/server'
import { StructureOrganizationTheme3 } from '@/components/thema-v3/profile/structure'
import ProfileOrganizationTheme4 from '@/components/theme-v4/profile/structure-organization'
import StructureOrganizationV5 from '@/components/thema-v5/profile/structure'
import ProfileStructureV6 from '@/components/thema-V6/profile/structure'
import ProfileStructureV7 from '@/components/thema-V7/profile/structure'

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
    case 'THEMA_PRODI_TIGA': {
      return <StructureOrganizationTheme3 />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <ProfileOrganizationTheme4 />
    }
    case 'THEMA_PRODI_LIMA': {
      return <StructureOrganizationV5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <ProfileStructureV6 />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <ProfileStructureV7 />
    }
  }
}

export default StructureOrganizationPage
