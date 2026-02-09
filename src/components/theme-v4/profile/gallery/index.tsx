import { LayoutProfileTheme4 } from '../layout'
import { GalleryProfileSection } from './components/section'
import { Suspense } from 'react'

export const ProfileGalleryTheme4 = () => {
  return (
    <LayoutProfileTheme4>
      <Suspense>
        <GalleryProfileSection />
      </Suspense>
    </LayoutProfileTheme4>
  )
}
