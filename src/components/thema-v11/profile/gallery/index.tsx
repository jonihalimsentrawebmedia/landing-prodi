'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import ContentAboutV10 from '@/components/thema-v10/profile/contentAbout'
import { usePathname, useRouter } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import { useEffect, useRef, useState } from 'react'
import GalleryVideo from '@/components/thema-v5/gallery/video'
import GalleryAlbumV7 from '@/components/thema-V7/profile/gallery/album'
import JumbotronTitleV11 from '@/components/thema-v11/component/common/jumbotronTitle'

const ProfileGallerySectionV11 = () => {
  const TabsData = [
    { name: 'Unit Pengelola', link: '/profile' },
    { name: 'Visi, Misi dan Tujuan', link: '/profile/vision' },
    { name: 'Struktur Organisasi', link: '/profile/structure-organization' },
    { name: 'Staff', link: '/profile/staff' },
    { name: 'Dosen', link: '/profile/lecturer' },
    { name: 'Berita', link: '/profile/news' },
    { name: 'Galeri', link: '/profile/gallery' },
    { name: 'Hubungi Kami', link: '/profile/contact-us' },
  ]

  const pathName = usePathname()
  const router = useRouter()

  const [selectedTab, setSelectedTab] = useState('video')

  const GalleryData = [
    {
      name: 'Video',
      value: 'video',
      element: <GalleryVideo />,
    },
    {
      name: 'Foto',
      value: 'photo',
      element: <GalleryAlbumV7 />,
    },
  ]

  const tabsListRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollToActiveTab = () => {
      const container = tabsListRef.current
      if (!container) return

      const activeTab = container.querySelector('[data-state="active"]') as HTMLElement
      if (!activeTab) return

      const containerWidth = container.offsetWidth
      const tabLeft = activeTab.offsetLeft
      const tabWidth = activeTab.offsetWidth

      const scrollPosition = tabLeft - containerWidth / 2 + tabWidth / 2

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      })
    }

    const attempts = [0, 50, 150, 300, 500]

    attempts.forEach((delay) => {
      setTimeout(scrollToActiveTab, delay)
    })
    const backupTimer = setTimeout(scrollToActiveTab, 1000)

    return () => clearTimeout(backupTimer)
  }, [pathName])

  return (
    <>
      <JumbotronTitleV11 title={'Profile'} context={'PROFIL'} />
      <div className="container-sm py-5">
        <div className="bg-blue-50 p-1.5 px-2 rounded">
          <BreadcrumbBasic
            className={'text-primary hover:bg-transparent!'}
            data={[{ name: 'Beranda', link: '/' }, { name: 'Profil' }]}
          />
        </div>
      </div>

      <ContentAboutV10 />

      <div className="container-sm py-5">
        <Tabs value={pathName} onValueChange={(value) => router.push(value)}>
          <TabsList
            ref={tabsListRef}
            className={cn(
              'bg-white rounded-none! w-full h-full',
              'border-b-2 border-yellow-500 p-0',
              'overflow-x-scroll justify-start lg:overflow-x-visible'
            )}
          >
            {TabsData?.map((row, k) => (
              <TabsTrigger
                value={row?.link}
                key={k}
                className={cn(
                  'rounded-none rounded-t-lg p-2',
                  'data-[state=active]:bg-primary data-[state=active]:text-white'
                )}
              >
                {row?.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {TabsData?.map((row, k) => (
            <TabsContent key={k} value={row?.link}>
              <div className={'w-full space-y-4 py-5'}>
                <TitleLine text={'Galeri'} />

                <Tabs
                  className={'bg-transparent w-full'}
                  value={selectedTab}
                  onValueChange={setSelectedTab}
                >
                  <TabsList className={'w-full bg-transparent flex gap-5'}>
                    {GalleryData?.map((row, k) => (
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
                  {GalleryData?.map((row, k) => (
                    <TabsContent key={k} value={row?.value}>
                      {row?.element}
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  )
}
export default ProfileGallerySectionV11
