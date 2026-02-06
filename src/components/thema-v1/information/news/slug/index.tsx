import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { DetailSectionNews } from '@/app/information/news/[slug]/components/detailSection'
import { LandingLayout } from '@/components/layout'

export const InformationNewsSlugTheme1 = () => {
  return (
    <LandingLayout>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <DetailSectionNews />
      </div>
    </LandingLayout>
  )
}
