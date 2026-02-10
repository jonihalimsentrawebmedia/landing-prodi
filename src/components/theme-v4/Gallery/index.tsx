import { JumbotronTitleTheme4 } from '@/components/theme-v4/component/common/jumbontronTitle'
import LayoutBaseTheme4 from '@/components/theme-v4/component/layout'
import { TabsGalleryTheme4 } from './components/Tabs'

export const GalleryTheme4 = () => {
  return (
    <LayoutBaseTheme4>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitleTheme4 context={'KONTAK'} title={'Galeri'} />

        <div className="w-full dark:bg-primary/50">
          <TabsGalleryTheme4 />
        </div>
      </div>
    </LayoutBaseTheme4>
  )
}
