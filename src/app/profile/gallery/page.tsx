import { GalleryProfileSection } from '@/app/profile/gallery/components/section'
import { Suspense } from 'react'

const GalleryProfilePage = () => {
  return (
    <>
      <Suspense>
        <GalleryProfileSection />
      </Suspense>
    </>
  )
}

export default GalleryProfilePage
