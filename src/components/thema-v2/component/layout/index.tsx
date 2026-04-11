'use client'

import { ReactNode } from 'react'
import { HeaderLayout } from '@/components/thema-v2/component/layout/header'
import { FooterLayout } from '@/components/thema-v2/component/layout/footer'
import RunningTextNews from '@/components/thema-v2/component/layout/header/RunningTextNews'

interface Props {
  children: ReactNode
}

const LayoutThemaV2 = ({ children }: Props) => {
  return (
    <>
      <div className="max-w-[1920px] relative mx-auto">
        <div className="fixed top-0 z-50 w-full">
          <RunningTextNews />
          <HeaderLayout />
        </div>
        <div className="pt-[56px] lg:pt-[158px]">{children}</div>
        <FooterLayout />
      </div>
    </>
  )
}

export default LayoutThemaV2
