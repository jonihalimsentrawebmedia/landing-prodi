import { JumbotronTitleTheme3 } from '@/components/thema-v3/component/common/jumbotronTitle'
import { LayoutTheme3 } from '@/components/thema-v3/component/layout'
import { NewsSectionDataTheme3 } from '@/components/thema-v3/information/news/component'

export const InformationNewsTheme3 = () => {
  return (
    <LayoutTheme3>
      <JumbotronTitleTheme3 title={'Informasi'} context={'INFORMASI'} />
      <NewsSectionDataTheme3 />
    </LayoutTheme3>
  )
}
