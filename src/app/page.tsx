import PageThemaOneHome from '@/components/thema-v1/home'
import { PageTheme2Home } from '@/components/thema-v2/home'
import { FetchResAPI } from '@/provider/server'
import { HomePageTheme3 } from '@/components/thema-v3/Home'

export default async function Home() {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data.thema

  switch (theme) {
    default: {
      return <PageThemaOneHome />
    }
    case 'THEMA_PRODI_SATU': {
      return <PageThemaOneHome />
    }
    case 'THEMA_PRODI_DUA': {
      return <PageTheme2Home />
    }
    case 'THEMA_PRODI_TIGA': {
      return <HomePageTheme3 />
    }
  }
}
