import { ReactNode } from 'react'
import { FetchResAPI } from '@/provider/server'
import LayoutThemaV2 from '@/components/thema-v2/component/layout'
import { LayoutTheme3 } from '@/components/thema-v3/component/layout'
import LayoutBaseTheme4 from '@/components/theme-v4/component/layout'
import { LandingLayout } from '@/components/layout/index'
import LayoutBaseTheme5 from '@/components/thema-v5/component/layout'
import LayoutBaseTheme6 from '@/components/thema-V6/component/layout'
import LayoutBaseTheme7 from '@/components/thema-V7/component/layout'
import LayoutBaseTheme8 from '@/components/thema-v8/component/layout'
import LayoutBaseTheme9 from '@/components/thema-v9/component/layout'
import LayoutBaseTheme10 from '@/components/thema-v10/component/layout'
import LayoutBaseTheme11 from '@/components/thema-v11/component/layout'
import LayoutBaseTheme12 from '@/components/thema-v12/component/layout'

interface props {
  children: ReactNode
}

const LayoutBase = async (props: props) => {
  const { children } = props
  const theme = await FetchResAPI('/public-prodi/public')
  const themes = theme?.data?.thema ?? {}
  console.log(themes)

  switch (themes) {
    default: {
      return <LayoutBaseTheme5>{children}</LayoutBaseTheme5>
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
    case 'THEMA_PRODI_TUJUH': {
      return <LayoutBaseTheme7>{children}</LayoutBaseTheme7>
    }
    case 'THEMA_PRODI_DELAPAN': {
      return <LayoutBaseTheme8>{children}</LayoutBaseTheme8>
    }
    case 'THEMA_PRODI_SEMBILAN': {
      return <LayoutBaseTheme9>{children}</LayoutBaseTheme9>
    }
    case 'THEMA_PRODI_SEPULUH': {
      return <LayoutBaseTheme10>{children}</LayoutBaseTheme10>
    }
    case 'THEMA_PRODI_SEBELAS': {
      return <LayoutBaseTheme11>{children}</LayoutBaseTheme11>
    }
    case 'THEMA_PRODI_DUA_BELAS': {
      return <LayoutBaseTheme12>{children}</LayoutBaseTheme12>
    }
  }
}

export default LayoutBase
