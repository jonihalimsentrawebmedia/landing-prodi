import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import { Suspense } from 'react'
import { SectionPromotion } from '@/components/thema-v2/information/promotion/component/section'

export const InformationPromotionTheme2 = () => {
  return (
    <div className={'w-full max-w-[1920px] mx-auto'}>
      <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
      <Suspense>
        <SectionPromotion />
      </Suspense>
    </div>
  )
}
