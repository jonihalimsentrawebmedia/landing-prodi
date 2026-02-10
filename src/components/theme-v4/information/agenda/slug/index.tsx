import { JumbotronTitleTheme4 } from '@/components/theme-v4/component/common/jumbontronTitle'
import LayoutBaseTheme4 from '@/components/theme-v4/component/layout'
import { DetailAgendaTheme4 } from '@/components/theme-v4/information/agenda/slug/component/detail'

export const InformationAgendaSlugTheme4 = () => {
  return (
    <>
      <LayoutBaseTheme4>
        <JumbotronTitleTheme4 context={'INFORMASI'} title={'Informasi'} />
        <DetailAgendaTheme4 />
      </LayoutBaseTheme4>
    </>
  )
}
