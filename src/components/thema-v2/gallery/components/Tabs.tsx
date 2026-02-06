'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Suspense, useEffect, useState } from 'react'
import { VideoSection } from '@/app/gallery/components/videoSection'
import { AlbumSection } from '@/app/gallery/components/albumSection'
import { useRouter } from 'next/navigation'
import { AlbumListSkeleton, VideoSectionSkeleton } from './skeleton'

export const TabsGallery = () => {
  const [value, setValue] = useState('video')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true)
  }, [])

  const tabsData = [
    {
      label: 'Video',
      value: 'video',
      element: (
        <Suspense fallback={<VideoSectionSkeleton />}>
          <VideoSection />
        </Suspense>
      ),
    },
    {
      label: 'Foto',
      value: 'foto',
      element: (
        <Suspense fallback={<AlbumListSkeleton />}>
          <AlbumSection />
        </Suspense>
      ),
    },
  ]

  const router = useRouter()

  const HandlerTabs = (value: string) => {
    setValue(value)
    const Params = new URLSearchParams()
    Params.delete('slug')
    router.push(`?${Params.toString()}`)
  }

  return (
    <>
      {isClient && (
        <Tabs
          value={value}
          onValueChange={(e) => HandlerTabs(e)}
          className={'w-full container py-5'}
        >
          <TabsList className={'w-full rounded-none bg-white dark:bg-primary p-0'}>
            {tabsData.map((tab, k) => (
              <TabsTrigger
                key={k}
                value={tab?.value}
                className={`rounded-none !border-x-0 !shadow-none data-[state=active]:bg-primary-foreground
              border-b-2 border-b-gray-200 data-[state=active]:border-b-primary
              data-[state=active]:text-primary
              dark:data-[state=active]:border-b-yellow-500 border-t-0
              `}
              >
                {tab?.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabsData.map((tab, k) => (
            <TabsContent key={k} value={tab?.value}>
              {tab?.element}
            </TabsContent>
          ))}
        </Tabs>
      )}
    </>
  )
}
