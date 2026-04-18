import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { AccreditationSection } from '@/app/accreditation/components/section'

export const AccreditationTheme1 = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'AKREDITASI'} title={'Akreditasi'} />
        <AccreditationSection />
      </div>
    </>
  )
}
