import { LayoutTheme3 } from '@/components/thema-v3/component/layout'
import { JumbotronTitleTheme3 } from '@/components/thema-v3/component/common/jumbotronTitle'
import { DetailPromotionTheme3 } from '@/components/thema-v3/information/promotion/slug/component/section'

export const InformationPromotionSlugTheme3 = () => {
  return (
    <LayoutTheme3>
      <JumbotronTitleTheme3 context={'INFORMASI'} title={'Informasi'} />
      <DetailPromotionTheme3 />
    </LayoutTheme3>
  )
}
