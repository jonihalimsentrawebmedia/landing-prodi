import LayoutThemaV2 from '@/components/thema-v2/component/layout'
import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'

export const LecturerTheme2 = () => {
  return (
    <LayoutThemaV2>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'DOSEN'} title={'Dosen'} />
      </div>
    </LayoutThemaV2>
  )
}
