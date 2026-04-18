'use client'

import { SideMenu } from '@/components/thema-v2/profile/component/sideMenu'
import { AccordionMenu } from '@/components/thema-v2/profile/component/accordionMenu'
import { ReactNode } from 'react'
import { JumbotronTitleTheme4 } from '@/components/theme-v4/component/common/jumbontronTitle'

export const LayoutProfileTheme4 = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <JumbotronTitleTheme4 title={'Tentang Prodi'} context={'INFORMASI'} />
      <div className="container lg:flex gap-x-5 py-5 items-start hidden">
        <SideMenu />
        <div className={'w-full'}>{children}</div>
      </div>

      <AccordionMenu>{children}</AccordionMenu>
    </>
  )
}
