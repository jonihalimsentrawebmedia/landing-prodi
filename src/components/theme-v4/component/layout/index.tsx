import { HeaderLayoutTheme4 } from './header/index'
import { ReactNode } from 'react'
import { FooterLayoutTheme4 } from '@/components/theme-v4/component/layout/footer'

interface Props {
  children: ReactNode
}

const LayoutBaseTheme4 = (props: Props) => {
  const { children } = props
  return (
    <>
      <HeaderLayoutTheme4 />
      <div className="lg:pt-16">{children}</div>
      <FooterLayoutTheme4 />
    </>
  )
}

export default LayoutBaseTheme4
