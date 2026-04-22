'use client'

import ProfileLayoutV6 from '@/components/thema-V6/profile/Layout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import { usePathname, useRouter } from 'next/navigation'
import { UseGetStructureOrganization } from '@/app/profile/structure-organization/hooks'
import { useEffect, useRef } from 'react'

const ProfileStructureV6 = () => {
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

  const { organization, loading } = UseGetStructureOrganization()

  const router = useRouter()
  const tabsListRef = useRef<HTMLDivElement>(null)

  const pathname = usePathname()

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
  }, [pathname])

  if (loading) return <></>

  return (
    <>
      <ProfileLayoutV6>
        <div className="container-sm py-5">
          <Tabs
            className={'w-full'}
            value={'/profile/structure-organization'}
            onValueChange={(value) => router.push(value, { scroll: false })}
          >
            <TabsList
              ref={tabsListRef}
              className={cn(
                'w-full h-full bg-transparent border-b-2 border-b-footer rounded-none p-0',
                'flex justify-start flex-row overflow-x-auto lg:overflow-x-visible'
              )}
            >
              {TabsData?.map((row, k) => (
                <TabsTrigger
                  value={row?.link}
                  key={k}
                  className={cn(
                    'shadow-none rounded-none py-2',
                    'data-[state=active]:bg-footer data-[state=active]:text-white',
                    'data-[state=active]:rounded-t-lg'
                  )}
                >
                  {row?.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {TabsData?.map((row, k) => (
              <TabsContent key={k} value={row?.link}>
                <div className={'w-full space-y-4 py-4'}>
                  <TitleLine text={'Struktur Organisasi'} className={'text-footer!'} />

                  <div>
                    {organization?.url_gambar ? (
                      <Image
                        src={organization?.url_gambar}
                        alt={'image'}
                        className={'w-full h-auto object-contain'}
                        width={1920}
                        height={1080}
                      />
                    ) : (
                      'Gambar tidak tersedia'
                    )}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </ProfileLayoutV6>
    </>
  )
}

export default ProfileStructureV6
