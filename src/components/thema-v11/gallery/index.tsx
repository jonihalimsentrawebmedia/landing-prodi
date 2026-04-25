'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import GalleryVideoV6 from '@/components/thema-V6/gallery/video'
import GalleryAlbumV7 from '@/components/thema-V7/profile/gallery/album'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import JumbotronTitleV11 from '@/components/thema-v11/component/common/jumbotronTitle'

const GalleryPageV11 = () => {
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
      element: <GalleryAlbumV7 />,
    },
  ]

  return (
    <>
      <JumbotronTitleV11 title={'Galeri'} context={'GALERI'} />
      <div className="container-sm py-5">
        <div className="bg-blue-50 p-1.5 px-2 rounded">
          <BreadcrumbBasic
            className={'text-primary hover:bg-transparent!'}
            data={[{ name: 'Beranda', link: '/' }, { name: 'Galeri' }]}
          />
        </div>
      </div>

      <div className="lg:p-5 py-2.5 dark:bg-gray-800">
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
                    'border border-primary rounded!',
                    'data-[state=active]:bg-primary',
                    'data-[state=active]:text-white'
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
    </>
  )
}

export default GalleryPageV11
