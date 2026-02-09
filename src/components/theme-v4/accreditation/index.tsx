import { AccreditationSection } from '@/components/thema-v2/accreditation/components/section'
import { JumbotronTitleTheme4 } from '@/components/theme-v4/component/common/jumbontronTitle'
import LayoutBaseTheme4 from '@/components/theme-v4/component/layout'

export const AccreditationTheme4 = () => {
  return (
    <>
      <LayoutBaseTheme4>
        <JumbotronTitleTheme4 title={'Akreditasi'} context={'AKREDITASI'} />
        <AccreditationSection />
      </LayoutBaseTheme4>
    </>
  )
}
