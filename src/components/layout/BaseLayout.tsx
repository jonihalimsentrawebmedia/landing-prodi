import { ReactNode } from 'react'
import { FetchResAPI } from '@/provider/server'
import LayoutThemaV2 from '@/components/thema-v2/component/layout'
import { LayoutTheme3 } from '@/components/thema-v3/component/layout'
import LayoutBaseTheme4 from '@/components/theme-v4/component/layout'
import { LandingLayout } from '@/components/layout/index'
import LayoutBaseTheme5 from '@/components/thema-v5/component/layout'
import LayoutBaseTheme6 from '@/components/thema-V6/component/layout'

interface props {
  children: ReactNode
}

const LayoutBase = async (props: props) => {
  const { children } = props
  const theme = await FetchResAPI('/public-prodi/public')
  const themes = theme?.data?.thema ?? {}

  switch (themes) {
    default: {
      return <LandingLayout>{children}</LandingLayout>
    }
    case 'THEMA_PRODI_SATU': {
      return <LandingLayout>{children}</LandingLayout>
    }
    case 'THEMA_PRODI_DUA': {
      return <LayoutThemaV2>{children}</LayoutThemaV2>
    }
    case 'THEMA_PRODI_TIGA': {
      return <LayoutTheme3>{children}</LayoutTheme3>
    }
    case 'THEMA_PRODI_EMPAT': {
      return <LayoutBaseTheme4>{children}</LayoutBaseTheme4>
    }
    case 'THEMA_PRODI_LIMA': {
      return <LayoutBaseTheme5>{children}</LayoutBaseTheme5>
    }
    case 'THEMA_PRODI_ENAM': {
      return <LayoutBaseTheme6>{children}</LayoutBaseTheme6>
    }
  }
}

export default LayoutBase
