import { JumbotronTitleTheme3 } from '@/components/thema-v3/component/common/jumbotronTitle'
import { SectionPromotion } from '@/components/thema-v2/information/promotion/component/section'
import { Suspense } from 'react'

export const InformationPromotionTheme3 = () => {
  return (
    <>
      <JumbotronTitleTheme3 context={'INFORMASI'} title={'Informasi'} />
      <Suspense>
        <SectionPromotion />
      </Suspense>
    </>
  )
}
