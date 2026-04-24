import { ReactNode } from 'react'
import HeaderLayoutThemaV9 from '@/components/thema-v9/component/layout/header'
import FooterLayoutV9 from '@/components/thema-v9/component/layout/footer'

interface Props {
  children: ReactNode
}

const LayoutBaseTheme9 = (props: Props) => {
  const { children } = props
  return (
    <>
      <HeaderLayoutThemaV9 />
      <div className="pt-0">{children}</div>
      <FooterLayoutV9 />
    </>
  )
}

export default LayoutBaseTheme9
