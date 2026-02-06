import LayoutAboutTheme2 from '@/components/thema-v2/profile/layout'
import { GalleryProfileSection } from '@/components/thema-v2/profile/gallery/components/section'
import { Suspense } from 'react'

export const GalleryProfileTheme2 = () => {
  return (
    <LayoutAboutTheme2>
      <Suspense>
        <GalleryProfileSection />
      </Suspense>
    </LayoutAboutTheme2>
  )
}
