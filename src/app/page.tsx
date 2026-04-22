import PageThemaOneHome from '@/components/thema-v1/home'
import { PageTheme2Home } from '@/components/thema-v2/home'
import { FetchResAPI } from '@/provider/server'
import { HomePageTheme3 } from '@/components/thema-v3/Home'
import HomeTheme4 from '@/components/theme-v4/home'
import HomeTheme5 from '@/components/thema-v5/homePage'
import HomeTheme6 from '@/components/thema-V6/homepage'
import HomeTheme7 from '@/components/thema-V7/component/homePage'

export default async function Home() {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data?.thema

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
    case 'THEMA_PRODI_EMPAT': {
      return <HomeTheme4 />
    }
    case 'THEMA_PRODI_LIMA': {
      return <HomeTheme5 />
    }
    case 'THEMA_PRODI_ENAM': {
      return <HomeTheme6 />
    }
    case 'THEMA_PRODI_TUJUH': {
      return <HomeTheme7 />
    }
  }
}
