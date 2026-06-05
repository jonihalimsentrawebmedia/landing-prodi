'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { usePathname, useRouter } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { UseGetProfileStaff } from '@/app/profile/staff/hooks'
import { MdEmail, MdPhone } from 'react-icons/md'
import ContentAboutV15 from '@/components/thema-v15/profile/contentAbout'
import { JumbotronTitleV15 } from '@/components/thema-v15/component/common/jumbotronTitle'

const ProfileStaffV15 = () => {
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
  const { staff, loading } = UseGetProfileStaff({ page: '1', limit: '9' })

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
                  <h2 className="text-[#1F7A63] text-[24px] font-semibold shrink-0">Staff</h2>
                  <div className="h-px bg-[#C8C8C8] flex-1" />
                </div>

                <div className="grid lg:grid-cols-3 gap-5">
                  {staff?.map((row, k) => (
                    <Card key={k} className="border border-[#C8C8C8] rounded-2xl shadow-sm">
                      <CardContent className="space-y-3 p-5">
                        <div className="flex items-start gap-4">
                          <Image
                            src={row?.gambar_url ?? '/img/noimg.png'}
                            alt={row?.nama}
                            width={85}
                            height={115}
                            className="w-[85px] min-w-[85px] h-[115px] object-cover rounded-xl"
                          />
                          <div className="space-y-1.5">
                            <p className="text-lg text-[#1F7A63] font-semibold">{row?.nama}</p>
                            <p className="text-sm text-[#1F7A63]">NIP</p>
                            <p className="text-[#444444]">{row?.nip}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <h3 className="text-[#1F7A63] text-sm font-semibold shrink-0">Kontak</h3>
                          <div className="h-px bg-[#C8C8C8] flex-1" />
                        </div>
                        <p className="flex items-center gap-1.5 text-[#444444]">
                          <MdPhone className="text-[#1F7A63]" /> {row?.no_hp ?? 'Belum Terdaftar'}
                        </p>
                        <p className="flex items-center gap-1.5 text-[#444444]">
                          <MdEmail className="text-[#1F7A63]" /> {row?.email ?? 'Belum Terdaftar'}
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

export default ProfileStaffV15
