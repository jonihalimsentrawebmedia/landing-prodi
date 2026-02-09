import { LayoutTheme3 } from '@/components/thema-v3/component/layout'
import { JumbotronTitleTheme3 } from '@/components/thema-v3/component/common/jumbotronTitle'
import { AgendaDetailTheme3 } from '@/components/thema-v3/information/agenda/slug/component/section'

export const InformationAgendaSlugTheme3 = () => {
  return (
    <LayoutTheme3>
      <JumbotronTitleTheme3 context={'INFORMASI'} title={'Informasi'} />
      <AgendaDetailTheme3 />
    </LayoutTheme3>
  )
}
