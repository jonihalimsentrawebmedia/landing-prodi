import LayoutBaseTheme4 from '@/components/theme-v4/component/layout'
import { JumbotronTitleTheme4 } from '@/components/theme-v4/component/common/jumbontronTitle'
import { ListLecturerTheme4 } from './component/index'

export const LecturerTheme4 = () => {
  return (
    <LayoutBaseTheme4>
      <JumbotronTitleTheme4 context={'PROFIL'} title={'Dosen'} />
      <ListLecturerTheme4 />
    </LayoutBaseTheme4>
  )
}
