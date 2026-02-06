import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { ClientSection } from '@/app/information/news/components/clientSection'
import { LandingLayout } from '@/components/layout'

export const InformationNewsTheme1 = () => {
  return (
    <LandingLayout>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <ClientSection />
      </div>
    </LandingLayout>
  )
}
