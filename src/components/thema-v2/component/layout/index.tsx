'use client'

import { ReactNode } from 'react'
import { HeaderLayout } from '@/components/thema-v2/component/layout/header'
import { FooterLayout } from '@/components/thema-v2/component/layout/footer'

interface Props {
  children: ReactNode
}

const LayoutThemaV2 = ({ children }: Props) => {
  return (
    <>
      <HeaderLayout />
      <div className="pt-[56px] lg:pt-[80px]">{children}</div>
      <FooterLayout />
    </>
  )
}

export default LayoutThemaV2
