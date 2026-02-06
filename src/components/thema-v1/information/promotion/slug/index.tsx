import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { SectionPromotion } from '@/app/information/promotion/[slug]/component/section'
import { LandingLayout } from '@/components/layout'

export const InformationPromotionSlugTheme1 = () => {
  return (
    <LandingLayout>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <SectionPromotion />
      </div>
    </LandingLayout>
  )
}
