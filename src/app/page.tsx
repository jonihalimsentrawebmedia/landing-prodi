import PageThemaOneHome from '@/components/thema-v1/home'
import { PageTheme2Home } from '@/components/thema-v2/home'
import { FetchResAPI } from '@/provider/server'
import { HomePageTheme3 } from '@/components/thema-v3/Home'
import HomeTheme4 from '@/components/theme-v4/home'
import HomeTheme5 from '@/components/thema-v5/homePage'
import HomeTheme6 from '@/components/thema-V6/homepage'
import HomeTheme7 from '@/components/thema-V7/homePage'
import HomeTheme8 from '@/components/thema-v8/homepage'
import HomeTheme9 from '@/components/thema-v9/homepage'
import HomeTheme10 from '@/components/thema-v10/homepage'
import HomeTheme11 from '@/components/thema-v11/homepage'
import HomeTheme12 from '@/components/thema-v12/homepage'
import HomeTheme13 from '@/components/thema-v13/homepage'
import HomeTheme14 from '@/components/thema-v14/homepage'
import HomeTheme15 from '@/components/thema-v15/homepage'

export default async function Home() {
  const themes = await FetchResAPI('/public-prodi/public')
  const theme: string = themes?.data?.thema

  switch (theme) {
    default: {
      return <HomeTheme5 />
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
    case 'THEMA_PRODI_DELAPAN': {
      return <HomeTheme8 />
    }
    case 'THEMA_PRODI_SEMBILAN': {
      return <HomeTheme9 />
    }
    case 'THEMA_PRODI_SEPULUH': {
      return <HomeTheme10 />
    }
    case 'THEMA_PRODI_SEBELAS': {
      return <HomeTheme11 />
    }
    case 'THEMA_PRODI_DUA_BELAS': {
      return <HomeTheme12 />
    }
    case 'THEMA_PRODI_TIGA_BELAS': {
      return <HomeTheme13 />
    }
    case 'THEMA_PRODI_EMPAT_BELAS': {
      return <HomeTheme14 />
    }
    case 'THEMA_PRODI_LIMA_BELAS': {
      return <HomeTheme15 />
    }
  }
}
