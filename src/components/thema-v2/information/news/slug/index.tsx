import LayoutThemaV2 from '@/components/thema-v2/component/layout'
import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import { DetailSectionNews } from '@/components/thema-v2/information/news/slug/components/detailSection'

export const InformationNewsSlugTheme2 = () => {
  return (
    <LayoutThemaV2>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <DetailSectionNews />
      </div>
    </LayoutThemaV2>
  )
}
