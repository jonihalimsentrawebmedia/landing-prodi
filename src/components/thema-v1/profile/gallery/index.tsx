import { Suspense } from 'react'
import { GalleryProfileSection } from '@/app/profile/gallery/components/section'
import ProfileLayoutTheme1 from '@/components/thema-v1/profile/layout'

export const GalleryProfileTheme1 = () => {
  return (
    <>
      <ProfileLayoutTheme1>
        <Suspense>
          <GalleryProfileSection />
        </Suspense>
      </ProfileLayoutTheme1>
    </>
  )
}
