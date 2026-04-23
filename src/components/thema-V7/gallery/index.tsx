'use client'

import JumbotronTitleV7 from '@/components/thema-V7/component/common/jumbotron'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { useState } from 'react'
import GalleryVideoV6 from '@/components/thema-V6/gallery/video'
import GalleryAlbumV7 from '@/components/thema-V7/profile/gallery/album'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

const GalleryPageV7 = () => {
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
      <JumbotronTitleV7 title={'Kurikulum'} context={'KURIKULUM'} />

      <div className={'bg-primary w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
        <div className="container-sm">
          <BreadcrumbBasic
            className={'text-white! hover:bg-primary!'}
            data={[{ name: 'Beranda', link: '/' }, { name: 'Gallery' }]}
          />
        </div>
      </div>

      <div className="lg:p-5 py-2.5 bg-footer dark:bg-gray-800">
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

export default GalleryPageV7
