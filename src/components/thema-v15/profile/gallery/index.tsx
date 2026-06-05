'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { usePathname, useRouter } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import GalleryVideo from '@/components/thema-v5/gallery/video'
import GalleryAlbumV7 from '@/components/thema-V7/profile/gallery/album'
import ContentAboutV15 from '@/components/thema-v15/profile/contentAbout'
import { JumbotronTitleV15 } from '@/components/thema-v15/component/common/jumbotronTitle'

const ProfileGalleryV15 = () => {
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
    { name: 'Video', value: 'video', element: <GalleryVideo /> },
    { name: 'Foto', value: 'photo', element: <GalleryAlbumV7 /> },
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
      <JumbotronTitleV15 title="Profile" context="PROFIL" />

      <div className="bg-primary w-full">
        <div className="container-sm p-2">
          <BreadcrumbBasic
            className="text-white! hover:bg-[#1F7A63]!"
            data={[{ name: 'Beranda', link: '/' }, { name: 'Profil' }]}
          />
        </div>
      </div>

      <ContentAboutV15 />

      <div className="container-sm lg:max-w-[1280px] mx-auto pb-10 mt-5">
        <Tabs value={pathName} onValueChange={(value) => router.push(value)}>
          <TabsList className="bg-white rounded-none w-full h-full border border-[#C8C8C8] p-0 overflow-x-scroll justify-start lg:overflow-x-visible">
            {TabsData?.map((row, k) => (
              <TabsTrigger
                value={row?.link}
                key={k}
                className={cn(
                  'rounded-t-lg rounded-none p-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-white text-[#444444]'
                )}
              >
                {row?.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {TabsData?.map((row, k) => (
            <TabsContent key={k} value={row?.link}>
              <div className="w-full space-y-4 py-5">
                <div className="flex items-center gap-4">
                  <h2 className="text-[#1F7A63] text-[24px] font-semibold shrink-0">Galeri</h2>
                  <div className="h-px bg-[#C8C8C8] flex-1" />
                </div>

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
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  )
}

export default ProfileGalleryV15
