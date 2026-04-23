'use client'

import JumbotronTitleV7 from '@/components/thema-V7/component/common/jumbotron'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import ContentAboutV7 from '@/components/thema-V7/profile/contentAbout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { UseGetProfileStaff } from '@/app/profile/staff/hooks'
import { MdEmail, MdPhone } from 'react-icons/md'
import { useEffect, useRef } from 'react'

const ProfileStaffV7 = () => {
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
  const { staff, loading } = UseGetProfileStaff({
    page: '1',
    limit: '9',
  })

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
      <JumbotronTitleV7 title={'Profil'} context={'PROFIL'} />
      <div className={'bg-primary w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
        <div className="container-sm px-2!">
          <BreadcrumbBasic
            className={'text-white! hover:bg-primary!'}
            data={[{ name: 'Beranda', link: '/' }, { name: 'Profil' }]}
          />
        </div>
      </div>
      <ContentAboutV7 />

      <div className="bg-footer">
        <div className="container-sm pb-5">
          <Tabs
            value={pathName}
            className={'lg:flex-row! items-start gap-4 p-0'}
            onValueChange={(e) => router.push(e)}
          >
            <TabsList
              ref={tabsListRef}
              className={cn(
                'w-full h-full! lg:max-w-[230px] bg-footer relative lg:px-4',
                'flex justify-start items-start lg:flex-col',
                'flex-row! flex-nowrap overflow-x-auto lg:overflow-x-visible p-0 rounded-none'
              )}
            >
              <div className="absolute z-10 w-[2px] h-full left-0 bg-linear-to-b from-primary to-footer hidden lg:block" />
              <div className="absolute z-10 w-[2px] h-full right-0 bg-linear-to-b from-primary to-footer hidden lg:block" />
              {TabsData?.map((row, k) => (
                <TabsTrigger
                  value={row?.link}
                  key={k}
                  className={cn(
                    'data-[state=active]:bg-primary w-full rounded p-1.5 px-3',
                    'data-[state=active]:text-white'
                  )}
                >
                  <p className="w-full text-start">{row?.name}</p>
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={pathName}>
              <div className={'w-full space-y-4 py-4 lg:py-0'}>
                <TitleLine text={'Staff'} />

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
                            <p className="text-lg text-primary font-semibold">{row?.nama}</p>
                            <p className="text-sm text-primary">NIP</p>
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
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default ProfileStaffV7
