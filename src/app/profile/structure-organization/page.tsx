import OrganizationProfileTheme1 from '@/components/thema-v1/profile/structure-organization'
import OrganizationProfileTheme2 from '@/components/thema-v2/profile/structure-organization'
import { FetchResAPI } from '@/provider/server'
import { StructureOrganizationTheme3 } from '@/components/thema-v3/profile/structure'
import ProfileOrganizationTheme4 from '@/components/theme-v4/profile/structure-organization'
import StructureOrganizationV5 from '@/components/thema-v5/profile/structure'
import ProfileStructureV6 from '@/components/thema-V6/profile/structure'
import ProfileStructureV7 from '@/components/thema-V7/profile/structure'
import ProfileStructureV8 from '@/components/thema-v8/profile/structure'
import ProfileStructureV9 from '@/components/thema-v9/profile/structure'
import ProfileStructureV10 from '@/components/thema-v10/profile/structure'
import ProfileStructureV11 from '@/components/thema-v11/profile/structure'
import ProfileStructureV13 from '@/components/thema-v13/profile/structure'
import ProfileStructureV14 from '@/components/thema-v14/profile/structure'
import ProfileStructureV15 from '@/components/thema-v15/profile/structure'
import ProfileStructureV16 from '@/components/thema-v16/profile/structure'

const StructureOrganizationPage = async () => {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <StructureOrganizationV5 />
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
    case 'THEMA_PRODI_DELAPAN': {
      return <ProfileStructureV8 />
    }
    case 'THEMA_PRODI_SEMBILAN': {
      return <ProfileStructureV9 />
    }
    case 'THEMA_PRODI_SEPULUH': {
      return <ProfileStructureV10 />
    }
    case 'THEMA_PRODI_SEBELAS': {
      return <ProfileStructureV11 />
    }
    case 'THEMA_PRODI_DUA_BELAS': {
      return <ProfileStructureV11 />
    }
    case 'THEMA_PRODI_TIGA_BELAS': {
      return <ProfileStructureV13 />
    }
    case 'THEMA_PRODI_EMPAT_BELAS': {
      return <ProfileStructureV14 />
    }
    case 'THEMA_PRODI_LIMA_BELAS': {
      return <ProfileStructureV15 />
    }
    case 'THEMA_PRODI_ENAM_BELAS': {
      return <ProfileStructureV16 />
    }
  }
}

export default StructureOrganizationPage
