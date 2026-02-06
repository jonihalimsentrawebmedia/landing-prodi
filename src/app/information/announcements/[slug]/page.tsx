import { InformationAnnouncementSlugTheme1 } from '@/components/thema-v1/information/announcement/slug'
import { InformationAnnouncementSlugTheme2 } from '@/components/thema-v2/information/announcement/slug'

const DetailAnnouncementPage = () => {
  const theme: string = '2'

  switch (theme) {
    default: {
      return <InformationAnnouncementSlugTheme1 />
    }
    case '1': {
      return <InformationAnnouncementSlugTheme1 />
    }
    case '2': {
      return <InformationAnnouncementSlugTheme2 />
    }
  }
}

export default DetailAnnouncementPage
