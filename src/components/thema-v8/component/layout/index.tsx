import { ReactNode } from 'react'
import FooterLayoutV7 from '@/components/thema-V7/component/layout/footer'
import HeaderLayoutThemaV8 from '@/components/thema-v8/component/layout/header'

interface Props {
  children: ReactNode
}

const LayoutBaseTheme8 = (props: Props) => {
  const { children } = props
  return (
    <>
      <HeaderLayoutThemaV8 />
      <div>{children}</div>
      <FooterLayoutV7 />
    </>
  )
}

export default LayoutBaseTheme8
