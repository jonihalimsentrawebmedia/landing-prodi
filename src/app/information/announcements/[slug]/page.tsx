import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { DetailSectionAnnouncement } from '@/app/information/announcements/[slug]/components/section'

const DetailAnnouncementPage = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <DetailSectionAnnouncement />
      </div>
    </>
  )
}

export default DetailAnnouncementPage
