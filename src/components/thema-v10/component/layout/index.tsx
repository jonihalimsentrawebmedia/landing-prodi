import { ReactNode } from 'react'
import HeaderLayoutThemaV10 from '@/components/thema-v10/component/layout/header'
import FooterLayoutV10 from '@/components/thema-v10/component/layout/footer'

interface Props {
  children: ReactNode
}

const LayoutBaseTheme10 = (props: Props) => {
  const { children } = props
  return (
    <>
      <HeaderLayoutThemaV10 />
      <div className="pt-0">{children}</div>
      <FooterLayoutV10 />
    </>
  )
}

export default LayoutBaseTheme10
