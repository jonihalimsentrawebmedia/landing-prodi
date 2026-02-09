'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Suspense, useEffect, useState } from 'react'
import { VideoSection } from './videoSection'
import { AlbumSection } from './albumSection'
import { useRouter } from 'next/navigation'
import { AlbumListSkeleton, VideoSectionSkeleton } from './skeleton'
import { clsx } from 'clsx'

export const TabsGalleryTheme4 = () => {
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
          <TabsList
            className={
              'w-full rounded-none dark:bg-primary p-0 border-b-primary border-b-2 bg-white'
            }
          >
            {tabsData.map((tab, k) => (
              <TabsTrigger
                key={k}
                value={tab?.value}
                className={clsx(
                  'rounded-none !shadow-none data-[state=active]:bg-primary data-[state=active]:text-white'
                )}
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
