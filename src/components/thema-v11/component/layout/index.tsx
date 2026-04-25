import { ReactNode } from 'react'
import FooterLayoutV10 from '@/components/thema-v10/component/layout/footer'
import HeaderLayoutThemaV11 from '@/components/thema-v11/component/layout/header'

interface Props {
  children: ReactNode
}

const LayoutBaseTheme11 = (props: Props) => {
  const { children } = props
  return (
    <>
      <HeaderLayoutThemaV11 />
      <div className="pt-0">{children}</div>
      <FooterLayoutV10 />
    </>
  )
}

export default LayoutBaseTheme11
