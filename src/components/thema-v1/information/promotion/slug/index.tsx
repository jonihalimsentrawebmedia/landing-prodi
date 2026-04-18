import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { SectionPromotion } from '@/app/information/promotion/[slug]/component/section'

export const InformationPromotionSlugTheme1 = () => {
  return (
    <div className={'w-full max-w-[1920px] mx-auto'}>
      <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
      <SectionPromotion />
    </div>
  )
}
