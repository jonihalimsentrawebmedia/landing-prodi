import { LayoutTheme3 } from '@/components/thema-v3/component/layout'
import { ListLecturerTheme3 } from '@/components/thema-v3/lecturer/component'
import { JumbotronTitleTheme3 } from '@/components/thema-v3/component/common/jumbotronTitle'

export const LecturerTheme3 = () => {
  return (
    <LayoutTheme3>
      <JumbotronTitleTheme3 context={'PROFIL'} title={'Dosen'} />
      <ListLecturerTheme3 />
    </LayoutTheme3>
  )
}
