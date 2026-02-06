import { LandingLayout } from '@/components/layout'
import { JumbotronTitle } from '@/components/common/jumbotronTitle'

export const LecturerTheme1 = () => {
  return (
    <>
      <LandingLayout>
        <div className={'w-full max-w-[1920px] mx-auto'}>
          <JumbotronTitle context={'DOSEN'} title={'Dosen'} />
        </div>
      </LandingLayout>
    </>
  )
}
