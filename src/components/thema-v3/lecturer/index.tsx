import { ListLecturerTheme3 } from '@/components/thema-v3/lecturer/component'
import { JumbotronTitleTheme3 } from '@/components/thema-v3/component/common/jumbotronTitle'

export const LecturerTheme3 = () => {
  return (
    <>
      <JumbotronTitleTheme3 context={'PROFIL'} title={'Dosen'} />
      <ListLecturerTheme3 />
    </>
  )
}
