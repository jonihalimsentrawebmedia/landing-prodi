import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import { TabsGalleryTheme3 } from '@/components/thema-v3/Gallery/components/Tabs'
import { LayoutTheme3 } from '@/components/thema-v3/component/layout'

export const GalleryTheme3 = () => {
  return (
    <LayoutTheme3>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'KONTAK'} title={'Galeri'} />

        <div className="w-full dark:bg-primary">
          <TabsGalleryTheme3 />
        </div>
      </div>
    </LayoutTheme3>
  )
}
