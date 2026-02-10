import LayoutBaseTheme4 from '@/components/theme-v4/component/layout'
import { JumbotronTitleTheme4 } from '@/components/theme-v4/component/common/jumbontronTitle'
import { DetailPromotionTheme4 } from '@/components/theme-v4/information/promotion/slug/component/detail'

export const InformationPromotionSlugTheme4 = () => {
  return (
    <LayoutBaseTheme4>
      <JumbotronTitleTheme4 context={'INFORMASI'} title={'Informasi'} />
      <DetailPromotionTheme4 />
    </LayoutBaseTheme4>
  )
}
