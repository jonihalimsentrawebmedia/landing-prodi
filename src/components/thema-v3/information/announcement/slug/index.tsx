import { LayoutTheme3 } from '@/components/thema-v3/component/layout'
import { DetailAnnouncementTheme3 } from './component/section'
import { JumbotronTitleTheme3 } from '@/components/thema-v3/component/common/jumbotronTitle'

export const InformationAnnouncementSlugTheme3 = () => {
  return (
    <LayoutTheme3>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitleTheme3 context={'INFORMASI'} title={'Informasi'} />
        <DetailAnnouncementTheme3 />
      </div>
    </LayoutTheme3>
  )
}
