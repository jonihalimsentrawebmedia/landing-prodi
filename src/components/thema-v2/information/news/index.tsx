import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import { Suspense } from 'react'
import { NewsInformationAllSkeleton } from '@/components/thema-v2/information/news/components/skeleton'
import { MoreNews } from '@/components/thema-v2/information/news/components/MoreNews'

export const InformationNewsTheme2 = () => {
  return (
    <div className={'w-full max-w-[1920px] mx-auto'}>
      <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
      <Suspense fallback={<NewsInformationAllSkeleton />}>
        <MoreNews />
      </Suspense>
    </div>
  )
}
