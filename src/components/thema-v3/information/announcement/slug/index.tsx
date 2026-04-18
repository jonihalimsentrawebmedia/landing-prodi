import { DetailAnnouncementTheme3 } from './component/section'
import { JumbotronTitleTheme3 } from '@/components/thema-v3/component/common/jumbotronTitle'

export const InformationAnnouncementSlugTheme3 = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitleTheme3 context={'INFORMASI'} title={'Informasi'} />
        <DetailAnnouncementTheme3 />
      </div>
    </>
  )
}
