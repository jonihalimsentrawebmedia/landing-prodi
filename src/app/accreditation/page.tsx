import { JumbotronTitle } from '@/components/comon/jumbotronTitle'
import { AccreditationSection } from '@/app/accreditation/components/section'

const AccreditationPage = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'AKREDITASI'} title={'Akreditasi'} />
        <AccreditationSection />
      </div>
    </>
  )
}

export default AccreditationPage
