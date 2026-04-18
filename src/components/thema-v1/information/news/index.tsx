import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { ClientSection } from '@/app/information/news/components/clientSection'

export const InformationNewsTheme1 = () => {
  return (
    <div className={'w-full max-w-[1920px] mx-auto'}>
      <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
      <ClientSection />
    </div>
  )
}
