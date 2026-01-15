import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { DetailSectionNews } from '@/app/information/news/[slug]/components/detailSection'

const DetailNewsPage = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <DetailSectionNews />
      </div>
    </>
  )
}

export default DetailNewsPage
