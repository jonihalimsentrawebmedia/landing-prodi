import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { TabsGallery } from '@/app/gallery/components/Tabs'
import { LandingLayout } from '@/components/layout'

export const GalleryTheme1 = () => {
  
  return (
    <LandingLayout>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'KONTAK'} title={'Galeri'} />

        <div className="bg-primary dark:bg-gray-900 w-full">
          <TabsGallery />
        </div>
      </div>
    </LandingLayout>
  )
}
