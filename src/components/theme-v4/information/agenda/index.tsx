import { JumbotronTitleTheme4 } from '@/components/theme-v4/component/common/jumbontronTitle'
import LayoutBaseTheme4 from '@/components/theme-v4/component/layout'
import { AgendaSectionTheme4 } from '@/components/theme-v4/information/agenda/component/listData'

export const InformationAgendaTheme4 = () => {
  return (
    <LayoutBaseTheme4>
      <JumbotronTitleTheme4 context={'PROFIL'} title={'Informasi'} />
      <AgendaSectionTheme4 />
    </LayoutBaseTheme4>
  )
}
