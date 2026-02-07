import { JumbotronTitleTheme3 } from '@/components/thema-v3/component/common/jumbotronTitle'
import { LayoutTheme3 } from '@/components/thema-v3/component/layout'
import { AccreditationSectionTheme3 } from '@/components/thema-v3/accreditation/component/section'

export const AccreditationTheme3 = () => {
  return (
    <LayoutTheme3>
      <JumbotronTitleTheme3 title={'Akreditasi'} context={'AKREDITASI'} />
      <AccreditationSectionTheme3 />
    </LayoutTheme3>
  )
}
