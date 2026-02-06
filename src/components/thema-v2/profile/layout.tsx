import { SideMenu } from './component/sideMenu'
import { ReactNode } from 'react'
import { AccordionMenu } from './component/accordionMenu'
import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import LayoutThemaV2 from '@/components/thema-v2/component/layout'

const LayoutAboutTheme2 = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <LayoutThemaV2>
        <JumbotronTitle title={'Tentang Prodi'} context={'PROFIL'} />
        <div className="container lg:flex gap-x-5 py-5 items-start hidden">
          <SideMenu />
          <div className={'w-full'}>{children}</div>
        </div>

        <AccordionMenu>{children}</AccordionMenu>
      </LayoutThemaV2>
    </>
  )
}

export default LayoutAboutTheme2
