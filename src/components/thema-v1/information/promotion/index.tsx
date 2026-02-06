import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { Suspense } from 'react'
import { SectionPromotion } from '@/app/information/promotion/component/section'
import { LandingLayout } from '@/components/layout'

export const InformationPromotionTheme1 = () => {
  return (
    <LandingLayout>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <Suspense>
          <SectionPromotion />
        </Suspense>
      </div>
    </LandingLayout>
  )
}
