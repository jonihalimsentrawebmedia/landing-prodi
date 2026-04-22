import { ReactNode } from 'react'
import HeaderLayoutThemaV6 from '@/components/thema-V6/component/layout/header'
import FooterLayoutV6 from '@/components/thema-V6/component/layout/footer'

interface Props {
  children: ReactNode
}

const LayoutBaseTheme6 = (props: Props) => {
  const { children } = props
  return (
    <>
      <HeaderLayoutThemaV6 />
      <div className="pt-0">{children}</div>
      <FooterLayoutV6 />
    </>
  )
}

export default LayoutBaseTheme6
