import { JumbotronTitleTheme3 } from '@/components/thema-v3/component/common/jumbotronTitle'
import { LayoutTheme3 } from '@/components/thema-v3/component/layout'
import { NewsDetailSection } from '@/components/thema-v3/information/news/slug/component/section'

export const InformationNewsSlugTheme3 = () => {
  return (
    <>
      <LayoutTheme3>
        <JumbotronTitleTheme3 title={'Informasi'} context={'INFORMASI'} />
        <NewsDetailSection />
      </LayoutTheme3>
    </>
  )
}
