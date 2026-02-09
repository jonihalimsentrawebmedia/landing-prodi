import { LayoutTheme3 } from '@/components/thema-v3/component/layout'
import { JumbotronTitleTheme3 } from '@/components/thema-v3/component/common/jumbotronTitle'
import { AgendaSectionTheme3 } from '@/components/thema-v3/information/agenda/component/section'

export const InformationAgendaTheme3 = () => {
  return (
    <LayoutTheme3>
      <JumbotronTitleTheme3 context={'INFORMASI'} title={'Informasi'} />
      <AgendaSectionTheme3 />
    </LayoutTheme3>
  )
}
