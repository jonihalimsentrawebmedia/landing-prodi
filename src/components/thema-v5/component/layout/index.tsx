import { ReactNode } from 'react'
import HeaderLayoutTheme5 from '@/components/thema-v5/component/layout/header/header'
import FooterLayoutV5 from '@/components/thema-v5/component/layout/footer'

interface Props {
  children: ReactNode
}

const LayoutBaseTheme5 = (props: Props) => {
  const { children } = props
  return (
    <>
      <HeaderLayoutTheme5 />
      <div className="pt-0 lg:pt-px">{children}</div>
      <FooterLayoutV5 />
    </>
  )
}

export default LayoutBaseTheme5
