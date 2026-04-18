import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import { SectionPromotionSlug } from '@/components/thema-v2/information/promotion/slug/component/section'

export const InformationPromotionSlugTheme2 = () => {
  return (
    <div className={'w-full max-w-[1920px] mx-auto'}>
      <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
      <SectionPromotionSlug />
    </div>
  )
}
