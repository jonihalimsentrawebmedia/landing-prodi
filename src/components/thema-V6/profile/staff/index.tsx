'use client'

import ProfileLayoutV6 from '@/components/thema-V6/profile/Layout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import { usePathname, useRouter } from 'next/navigation'
import { UseGetProfileStaff } from '@/app/profile/staff/hooks'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { MdEmail, MdPhone } from 'react-icons/md'
import { useEffect, useRef } from 'react'

const ProfileStaffV6 = () => {
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

  const { staff, loading } = UseGetProfileStaff({
    page: '1',
    limit: '9',
  })

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
            value={'/profile/staff'}
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
                  <TitleLine text={'Staff'} className={'text-footer!'} />

                  <div className="grid lg:grid-cols-3 gap-5">
                    {staff?.map((row, k) => (
                      <Card key={k}>
                        <CardContent className={'space-y-2'}>
                          <div className="flex items-start gap-4">
                            <Image
                              src={row?.gambar_url ?? '/img/noimg.png'}
                              alt={row?.nama}
                              width={85}
                              height={115}
                              className={'w-[85px] min-w-[85px] h-[115px] object-cover rounded-md'}
                            />
                            <div className="space-y-1.5">
                              <p className="text-lg text-footer font-semibold">{row?.nama}</p>
                              <p className="text-sm text-footer">NIP</p>
                              <p>{row?.nip}</p>
                            </div>
                          </div>
                          <TitleLine text={'Kontak'} />
                          <p className="flex items-center gap-1.5 text-black dark:text-white">
                            <MdPhone /> {row?.no_hp ?? 'Belum Terddaftar'}
                          </p>
                          <p className="flex items-center gap-1.5 text-black dark:text-white">
                            <MdEmail /> {row?.email ?? 'Belum Terddaftar'}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
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

export default ProfileStaffV6
