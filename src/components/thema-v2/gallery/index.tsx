import { TabsGallery } from '@/components/thema-v2/gallery/components/Tabs'
import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import LayoutThemaV2 from '@/components/thema-v2/component/layout'

export const GalleryTheme2 = () => {
  return (
    <LayoutThemaV2>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'KONTAK'} title={'Galeri'} />

        <div className="w-full dark:bg-primary">
          <TabsGallery />
        </div>
      </div>
    </LayoutThemaV2>
  )
}
