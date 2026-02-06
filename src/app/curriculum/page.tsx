import { FetchResAPI } from '@/provider/server'
import { CurriculumTheme1 } from '@/components/thema-v1/curriculum'
import { CurriculumTHeme2 } from '@/components/thema-v2/curriculum'

const CurriculumPage = async () => {
  const data = await FetchResAPI('/public-prodi/kurikulum?page=0&limit=0')
  const theme: string = '2'

  switch (theme) {
    default: {
      return <CurriculumTheme1 data={data?.data} />
    }
    case '1': {
      return <CurriculumTheme1 data={data?.data} />
    }
    case '2': {
      return <CurriculumTHeme2 data={data?.data} />
    }
  }
}

export default CurriculumPage
