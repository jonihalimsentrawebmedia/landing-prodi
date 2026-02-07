import ProfileLayoutTheme3 from '@/components/thema-v3/profile/layout'
import { GalleryProfileSection } from '@/components/thema-v2/profile/gallery/components/section'
import { Suspense } from 'react'

export const ProfileGalleryTheme3 = () => {
  return (
    <ProfileLayoutTheme3>
      <Suspense>
        <GalleryProfileSection />
      </Suspense>
    </ProfileLayoutTheme3>
  )
}
