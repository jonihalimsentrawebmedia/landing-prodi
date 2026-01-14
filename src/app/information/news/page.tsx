import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { SectionNews } from '@/app/information/news/components/section'
import { MoreNews } from '@/app/information/news/components/MoreNews'

const NewsPage = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
        <SectionNews />
        <MoreNews/>
      </div>
    </>
  )
}

export default NewsPage
