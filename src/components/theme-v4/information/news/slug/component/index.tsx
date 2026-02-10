import { JumbotronTitleTheme4 } from '@/components/theme-v4/component/common/jumbontronTitle'
import LayoutBaseTheme4 from '@/components/theme-v4/component/layout'
import { DetailNewsSectionTheme4 } from '@/components/theme-v4/information/news/slug/component/detailNews'

export const InformationNewsSlugTheme4 = () => {
  return (
    <LayoutBaseTheme4>
      <JumbotronTitleTheme4 context={'PROFIL'} title={'Informasi'} />
      <DetailNewsSectionTheme4 />
    </LayoutBaseTheme4>
  )
}
