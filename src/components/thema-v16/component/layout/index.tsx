import { ReactNode } from 'react'
import HeaderLayoutThemaV11 from '@/components/thema-v11/component/layout/header'
import FooterLayoutV16 from '@/components/thema-v16/component/layout/footer'

interface Props {
  children: ReactNode
}

const LayoutBaseTheme16 = (props: Props) => {
  const { children } = props
  return (
    <>
      <HeaderLayoutThemaV11 />
      <div className="pt-0">{children}</div>
      <FooterLayoutV16 />
    </>
  )
}

export default LayoutBaseTheme16
