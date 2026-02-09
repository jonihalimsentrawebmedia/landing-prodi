import { FourNewsNews } from './component/fourNewsNews'
import { JumbotronTitleTheme4 } from '@/components/theme-v4/component/common/jumbontronTitle'
import LayoutBaseTheme4 from '@/components/theme-v4/component/layout'

export const InformationNewsTheme4 = () => {
  return (
    <LayoutBaseTheme4>
      <JumbotronTitleTheme4 context={'PROFIL'} title={'Informasi'} />
      <FourNewsNews />
    </LayoutBaseTheme4>
  )
}
