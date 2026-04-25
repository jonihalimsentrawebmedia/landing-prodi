import { FetchResAPI } from '@/provider/server'
import { CurriculumTheme1 } from '@/components/thema-v1/curriculum'
import { CurriculumTHeme2 } from '@/components/thema-v2/curriculum'
import { CurriculumTheme3 } from '@/components/thema-v3/curriculum'
import { CurriculumTheme4 } from '@/components/theme-v4/curriculum'
import CurriculumPageV5 from '@/components/thema-v5/Curriculum'
import CurriculumPageV6 from '@/components/thema-V6/Curriculum'
import CurriculumPageV7 from '@/components/thema-V7/curriculum'
import CurriculumPageV8 from '@/components/thema-v8/Curriculum'
import CurriculumPageV9 from '@/components/thema-v9/Curriculum'
import CurriculumPageV10 from '@/components/thema-v10/Curriculum'
import CurriculumPageV11 from '@/components/thema-v11/Curriculum'

const CurriculumPage = async () => {
  const data = await FetchResAPI('/public-prodi/kurikulum?page=0&limit=0')

  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <CurriculumPageV5 data={data?.data} />
    }
    case 'THEMA_PRODI_SATU': {
      return <CurriculumTheme1 data={data?.data} />
    }
    case 'THEMA_PRODI_DUA': {
      return <CurriculumTHeme2 data={data?.data} />
    }
    case 'THEMA_PRODI_TIGA': {
      return <CurriculumTheme3 data={data?.data} />
    }
    case 'THEMA_PRODI_EMPAT': {
      return <CurriculumTheme4 data={data?.data} />
    }
    case 'THEMA_PRODI_LIMA': {
      return <CurriculumPageV5 data={data?.data} />
    }
    case 'THEMA_PRODI_ENAM': {
      return <CurriculumPageV6 data={data?.data} />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <CurriculumPageV7 data={data?.data} />
    }
    case 'THEMA_PRODI_DELAPAN': {
      return <CurriculumPageV8 data={data?.data} />
    }
    case 'THEMA_PRODI_SEMBILAN': {
      return <CurriculumPageV9 data={data?.data} />
    }
    case 'THEMA_PRODI_SEPULUH': {
      return <CurriculumPageV10 data={data?.data} />
    }
    case 'THEMA_PRODI_SEBELAS': {
      return <CurriculumPageV11 data={data?.data} />
    }
  }
}

export default CurriculumPage
