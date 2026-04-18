import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { ListDataLecturer } from './component/listData'

export const LecturerTheme1 = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'DOSEN'} title={'Dosen'} />
        <ListDataLecturer />
      </div>
    </>
  )
}
