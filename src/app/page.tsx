import PageThemaOneHome from '@/components/thema-v1/home'
import { PageTheme2Home } from '@/components/thema-v2/home'

export default function Home() {
  const theme: string = '2'
  switch (theme) {
    default: {
      return <PageThemaOneHome />
    }
    case '1': {
      return <PageThemaOneHome />
    }
    case '2': {
      return <PageTheme2Home />
    }
  }
}
