import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import { SectionPromotionSlug } from '@/components/thema-v2/information/promotion/slug/component/section'
import LayoutThemaV2 from '@/components/thema-v2/component/layout'

export const InformationPromotionSlugTheme2 = () => {
  return (
    <LayoutThemaV2>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <SectionPromotionSlug />
      </div>
    </LayoutThemaV2>
  )
}
