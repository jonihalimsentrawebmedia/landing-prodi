import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { SectionAgenda } from '@/app/information/agenda/[slug]/component/section'

export const InformationAgendaSlugTheme1 = () => {
  return (
    <div className={'w-full max-w-[1920px] mx-auto'}>
      <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
      <SectionAgenda />
    </div>
  )
}
