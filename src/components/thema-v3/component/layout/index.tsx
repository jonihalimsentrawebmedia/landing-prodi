import { ReactNode } from 'react'
import { HeaderLayoutTheme3 } from '@/components/thema-v3/component/layout/header'
import { FooterLayoutTheme3 } from '@/components/thema-v3/component/layout/footer'

interface Props {
  children: ReactNode
}

export const LayoutTheme3 = (props: Props) => {
  const { children } = props
  return (
    <>
      <HeaderLayoutTheme3 />
      <div className="pt-[88px] lg:pt-[88px]">{children}</div>
      <FooterLayoutTheme3 />
    </>
  )
}
