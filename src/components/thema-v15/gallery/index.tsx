'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import GalleryVideoV6 from '@/components/thema-V6/gallery/video'
import GalleryAlbumV7 from '@/components/thema-V7/profile/gallery/album'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { JumbotronTitleV15 } from '@/components/thema-v15/component/common/jumbotronTitle'

const GalleryPageV15 = () => {
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
      <JumbotronTitleV15 title="Galeri" context="GALERI" />

      <div className="bg-primary w-full">
        <div className="container-sm p-2">
          <BreadcrumbBasic
            className="text-white! hover:bg-[#1F7A63]!"
            data={[{ name: 'Beranda', link: '/' }, { name: 'Galeri' }]}
          />
        </div>
      </div>

      <div className="container-sm lg:max-w-[1280px] mx-auto py-5">
        <div className="flex items-center gap-4">
          <h2 className="text-[#1F7A63] text-[24px] font-semibold shrink-0">Galeri</h2>
          <div className="h-px bg-[#C8C8C8] flex-1" />
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

export default GalleryPageV15
