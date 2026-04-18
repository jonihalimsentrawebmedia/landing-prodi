import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import { DetailSectionNews } from '@/components/thema-v2/information/news/slug/components/detailSection'

export const InformationNewsSlugTheme2 = () => {
  return (
    <div className={'w-full max-w-[1920px] mx-auto'}>
      <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
      <DetailSectionNews />
    </div>
  )
}
