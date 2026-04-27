'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { usePathname, useRouter } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import { UseGetProfileVisionMission } from '@/app/profile/vision/hooks'
import { useEffect, useRef } from 'react'
import JumbotronTitleV13 from '@/components/thema-v13/component/common/jumbotronTitle'
import ContentAboutV13 from '@/components/thema-v13/profile/contentAbout'

const ProfileVisionV13 = () => {
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
  const { visionMission, loading } = UseGetProfileVisionMission()

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

  if (loading) return <></>

  return (
    <>
      <JumbotronTitleV13 title={'Profile'} context={'PROFIL'} />
      <div className="w-full bg-primary p-2">
        <div className="container-sm py-5 px-2! lg:px-0">
          <BreadcrumbBasic
            className={'text-white hover:bg-transparent!'}
            data={[{ name: 'Beranda', link: '/' }, { name: 'Profil' }]}
          />
        </div>
      </div>

      <ContentAboutV13 />

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
              <div className={'w-full space-y-4 my-5'}>
                <TitleLine text={'Visi, Misi, dan Tujuan'} />

                <div className="flex flex-col gap-1">
                  <p className="text-xl font-semibold">Visi</p>
                  <div className="bg-linear-to-r from-primary to-transparent w-full h-1" />
                </div>

                <div
                  className={'html-class text-base!'}
                  dangerouslySetInnerHTML={{ __html: visionMission?.visi ?? '' }}
                />

                <div className="flex flex-col gap-1">
                  <p className="text-xl font-semibold">Misi</p>
                  <div className="bg-linear-to-r from-primary to-transparent w-full h-1" />
                </div>
                <div
                  className={'html-class flex flex-col gap-2'}
                  dangerouslySetInnerHTML={{ __html: visionMission?.misi ?? '' }}
                />

                <div className="flex flex-col gap-1">
                  <p className="text-xl font-semibold">Tujuan</p>
                  <div className="bg-linear-to-r from-primary to-transparent w-full h-1" />
                </div>
                <div
                  className={'html-class'}
                  dangerouslySetInnerHTML={{ __html: visionMission?.tujuan ?? '' }}
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  )
}

export default ProfileVisionV13
