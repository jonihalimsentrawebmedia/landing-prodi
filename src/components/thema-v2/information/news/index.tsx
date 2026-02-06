import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import LayoutThemaV2 from '@/components/thema-v2/component/layout'
import { Suspense } from 'react'
import { NewsInformationAllSkeleton } from '@/components/thema-v2/information/news/components/skeleton'
import { MoreNews } from '@/components/thema-v2/information/news/components/MoreNews'

export const InformationNewsTheme2 = () => {
  return (
    <LayoutThemaV2>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <Suspense fallback={<NewsInformationAllSkeleton />}>
          <MoreNews />
        </Suspense>
      </div>
    </LayoutThemaV2>
  )
}
