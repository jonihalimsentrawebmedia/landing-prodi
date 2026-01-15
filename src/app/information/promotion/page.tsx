import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { SectionPromotion } from '@/app/information/promotion/component/section'
import { Suspense } from 'react'

const PromotionPage = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <Suspense>
          <SectionPromotion />
        </Suspense>
      </div>
    </>
  )
}

export default PromotionPage
