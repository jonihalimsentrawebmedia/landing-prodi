'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import GalleryAlbumV6 from '@/components/thema-V6/gallery/Album'
import GalleryVideoV6 from '@/components/thema-V6/gallery/video'

const GalleryPageV6 = () => {
  const [selectedTab, setSelectedTab] = useState('video')

  const TabsData = [
    {
      name: 'Video',
      value: 'video',
      element: <GalleryVideoV6 />,
    },
    {
      name: 'Foto',
      value: 'photo',
      element: <GalleryAlbumV6 />,
    },
  ]

  return (
    <>
      <ProfileLayout title={'Galeri'} context={'GALERI'}>
        <div className="bg-footer w-full max-w-[1920px] mx-auto py-2 lg:p-4">
          <div className="container-sm">
            <BreadcrumbBasic data={[{ name: 'Beranda', link: '/' }, { name: 'Galeri' }]} />
          </div>
        </div>

        <div className="lg:p-5 py-2.5 bg-primary/10 dark:bg-gray-800">
          <div className="container-sm">
            <Tabs
              className={'bg-transparent w-full'}
              value={selectedTab}
              onValueChange={setSelectedTab}
            >
              <TabsList className={'w-full bg-transparent flex gap-5'}>
                {TabsData?.map((row, k) => (
                  <TabsTrigger
                    key={k}
                    value={row?.value}
                    className={cn(
                      'border border-footer rounded!',
                      'data-[state=active]:bg-footer',
                      'data-[state=active]:text-primary'
                    )}
                  >
                    {row?.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {TabsData?.map((row, k) => (
                <TabsContent key={k} value={row?.value}>
                  {row?.element}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}

export default GalleryPageV6
