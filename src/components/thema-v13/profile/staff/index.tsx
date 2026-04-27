'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { usePathname, useRouter } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { UseGetProfileStaff } from '@/app/profile/staff/hooks'
import { MdEmail, MdPhone } from 'react-icons/md'
import JumbotronTitleV13 from '@/components/thema-v13/component/common/jumbotronTitle'
import ContentAboutV13 from '@/components/thema-v13/profile/contentAbout'

const ProfileStaffV13 = () => {
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
              <div className={'w-full space-y-4 py-5'}>
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
          ))}
        </Tabs>
      </div>
    </>
  )
}
export default ProfileStaffV13
