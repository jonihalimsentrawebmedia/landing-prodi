'use client'

import GalleryVideoV6 from '@/components/thema-V6/gallery/video'
import GalleryAlbumV7 from '@/components/thema-V7/profile/gallery/album'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { JumbotronTitleV16 } from '@/components/thema-v16/component/jumbotronTitle'

const GalleryPageV16 = () => {
  const [selectedTab, setSelectedTab] = useState('video')

  const GalleryData = [
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
      <JumbotronTitleV16
        data={[{ name: 'Beranda', link: '/' }, { name: 'Galeri' }]}
        title="Galeri"
        context="GALERI"
      />

      <div className="container-sm lg:max-w-[1280px] mx-auto py-5">
        <div className="flex items-center gap-2 w-full pt-5">
          <div className="border-l-4 border-b-4 border-[#CDA327] px-4 py-2">
            <h2
              className={cn(
                'text-[25px] leading-[38px] font-normal text-[#0F766E] whitespace-nowrap'
              )}
            >
              Galeri
            </h2>
          </div>
        </div>

        <div className="mt-5">
          <Tabs
            className="bg-transparent w-full"
            value={selectedTab}
            onValueChange={setSelectedTab}
          >
            <TabsList className="w-full bg-transparent flex gap-3">
              {GalleryData?.map((row, k) => (
                <TabsTrigger
                  key={k}
                  value={row?.value}
                  className={cn(
                    'border border-primary rounded-lg! text-primary data-[state=active]:bg-primary data-[state=active]:text-white'
                  )}
                >
                  {row?.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {GalleryData?.map((row, k) => (
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

export default GalleryPageV16
