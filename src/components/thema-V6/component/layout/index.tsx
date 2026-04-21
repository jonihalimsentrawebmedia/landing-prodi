import { ReactNode } from 'react'
import HeaderLayoutThemaV6 from '@/components/thema-V6/component/layout/header'

interface Props {
  children: ReactNode
}

const LayoutBaseTheme6 = (props: Props) => {
  const { children } = props
  return (
    <>
      <HeaderLayoutThemaV6 />
      <div className="pt-0 lg:pt-px">{children}</div>
    </>
  )
}

export default LayoutBaseTheme6
