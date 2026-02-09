import { FetchResAPI } from '@/provider/server'
import { CurriculumTheme1 } from '@/components/thema-v1/curriculum'
import { CurriculumTHeme2 } from '@/components/thema-v2/curriculum'
import { CurriculumTheme3 } from '@/components/thema-v3/curriculum'
import { CurriculumTheme4 } from '@/components/theme-v4/curriculum'

const CurriculumPage = async () => {
  const data = await FetchResAPI('/public-prodi/kurikulum?page=0&limit=0')

  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <CurriculumTheme1 data={data?.data} />
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
  }
}

export default CurriculumPage
