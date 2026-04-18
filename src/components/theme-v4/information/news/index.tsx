import { FourNewsNews } from './component/fourNewsNews'
import { JumbotronTitleTheme4 } from '@/components/theme-v4/component/common/jumbontronTitle'

export const InformationNewsTheme4 = () => {
  return (
    <>
      <JumbotronTitleTheme4 context={'PROFIL'} title={'Informasi'} />
      <FourNewsNews />
    </>
  )
}
