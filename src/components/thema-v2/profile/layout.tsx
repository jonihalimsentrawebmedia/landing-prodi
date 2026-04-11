import { ReactNode } from 'react'
import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import LayoutThemaV2 from '@/components/thema-v2/component/layout'

const LayoutAboutTheme2 = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <LayoutThemaV2>
        <JumbotronTitle title={'Tentang Prodi'} context={'PROFIL'} />
        <div>{children}</div>
      </LayoutThemaV2>
    </>
  )
}

export default LayoutAboutTheme2
