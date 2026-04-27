import { ReactNode } from 'react'
import FooterLayoutV10 from '@/components/thema-v10/component/layout/footer'
import HeaderLayoutThemaV13 from '@/components/thema-v13/component/header'

interface Props {
  children: ReactNode
}

const LayoutBaseTheme13 = (props: Props) => {
  const { children } = props
  return (
    <>
      <HeaderLayoutThemaV13 />
      <div className="pt-0">{children}</div>
      <FooterLayoutV10 />
    </>
  )
}

export default LayoutBaseTheme13
