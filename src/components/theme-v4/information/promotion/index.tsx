import LayoutBaseTheme4 from '@/components/theme-v4/component/layout'
import { JumbotronTitleTheme4 } from '@/components/theme-v4/component/common/jumbontronTitle'
import { SectionPromotionTheme4 } from '@/components/theme-v4/information/promotion/component/ListData'

export const InformationPromotionTheme4 = () => {
  return (
    <LayoutBaseTheme4>
      <JumbotronTitleTheme4 context={'INFORMASI'} title={'Informasi'} />
      <SectionPromotionTheme4 />
    </LayoutBaseTheme4>
  )
}
