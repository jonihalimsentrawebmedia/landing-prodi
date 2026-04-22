import { ReactNode } from 'react'
import HeaderLayoutThemaV7 from '@/components/thema-V7/component/layout/header'
import FooterLayoutV7 from '@/components/thema-V7/component/layout/footer'

interface Props {
  children: ReactNode
}

const LayoutBaseTheme7 = (props: Props) => {
  const { children } = props
  return (
    <>
      <HeaderLayoutThemaV7 />
      <div className="pt-0">{children}</div>
      <FooterLayoutV7 />
    </>
  )
}

export default LayoutBaseTheme7
