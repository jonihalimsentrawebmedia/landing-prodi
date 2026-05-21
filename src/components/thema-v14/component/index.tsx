import { ReactNode } from 'react'
import FooterLayoutV10 from '@/components/thema-v10/component/layout/footer'
import HeaderLayoutThemaV14 from '@/components/thema-v14/component/header'

interface Props {
  children: ReactNode
}

const LayoutBaseTheme14 = (props: Props) => {
  const { children } = props
  return (
    <>
      <HeaderLayoutThemaV14 />
      <div className="pt-0">{children}</div>
      <FooterLayoutV10 />
    </>
  )
}

export default LayoutBaseTheme14
