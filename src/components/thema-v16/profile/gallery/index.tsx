'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import GalleryVideo from '@/components/thema-v5/gallery/video'
import GalleryAlbumV7 from '@/components/thema-V7/profile/gallery/album'
import { JumbotronTitleV16 } from '@/components/thema-v16/component/jumbotronTitle'
import ContentAboutV16 from '@/components/thema-v16/profile/contentAbout'

const ProfileGalleryV16 = () => {
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
      <JumbotronTitleV16
        data={[{ name: 'Beranda', link: '/' }, { name: 'Profil' }]}
        title="Profile"
        context="PROFIL"
      />

      <ContentAboutV16 />

      <div className="container-sm lg:max-w-[1280px] mx-auto pb-10 mt-5">
        <Tabs value={pathName} onValueChange={(value) => router.push(value)}>
          <TabsList
            className="w-full h-10 p-0 bg-transparent justify-start overflow-x-auto lg:overflow-visible
            whitespace-nowrap rounded-none border-0 border-b-2 border-[#CDA327] gap-0"
          >
            {TabsData?.map((row) => (
              <TabsTrigger
                key={row.link}
                value={row.link}
                className="h-10 px-4 py-2 rounded-t-lg rounded-b-none bg-transparent
                text-base font-semibold text-[#1F2937] shadow-none border-0
                whitespace-nowrap data-[state=active]:bg-[#0F766E] data-[state=active]:text-white
                data-[state=active]:shadow-none"
              >
                {row.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {TabsData?.map((row, k) => (
            <TabsContent key={k} value={row?.link}>
              <div className="flex flex-col gap-4 mt-5">
                <div className="flex items-center gap-2 w-full">
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

export default ProfileGalleryV16
