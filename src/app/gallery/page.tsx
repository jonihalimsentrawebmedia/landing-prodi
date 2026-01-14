import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { TabsGallery } from '@/app/gallery/components/Tabs'

const GalleryPage = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'KONTAK'} title={'Galeri'} />

        <div className="bg-primary w-full">
          <TabsGallery />
        </div>
      </div>
    </>
  )
}

export default GalleryPage
