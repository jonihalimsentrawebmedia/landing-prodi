import LayoutThemaV2 from '@/components/thema-v2/component/layout'
import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import { AccreditationSection } from '@/components/thema-v2/accreditation/components/section'

export const AccreditationTheme2 = () => {
  return (
    <>
      <LayoutThemaV2>
        <JumbotronTitle title={'Akreditasi'} context={'AKREDITASI'} />
        <AccreditationSection />
      </LayoutThemaV2>
    </>
  )
}
