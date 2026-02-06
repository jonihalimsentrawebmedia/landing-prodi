import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import { SectionAgenda } from '@/components/thema-v2/information/agenda/slug/component/section'
import LayoutThemaV2 from '@/components/thema-v2/component/layout'

export const InformationAgendaSlugTheme2 = () => {
  return (
    <LayoutThemaV2>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <SectionAgenda />
      </div>
    </LayoutThemaV2>
  )
}
