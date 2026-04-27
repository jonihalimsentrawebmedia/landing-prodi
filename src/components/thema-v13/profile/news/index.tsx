'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { usePathname, useRouter } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import Image from 'next/image'
import { UseGetNews } from '@/app/homepage/hooks'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import JumbotronTitleV13 from '@/components/thema-v13/component/common/jumbotronTitle'
import ContentAboutV13 from '@/components/thema-v13/profile/contentAbout'

const ProfileNewsV13 = () => {
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
  const { news, loading } = UseGetNews({
    page: '1',
    limit: '3',
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
              <div className={'w-full space-y-4 py-4'}>
                <TitleLine text={'Berita'} />

                <div className="grid lg:grid-cols-3 gap-5">
                  {news?.map((row) => (
                    <Link key={row.id_berita} href={`/information/news/${row.slug}`}>
                      <div className="relative h-[240px] lg:h-[272px]">
                        <Image
                          src={row.gambar ?? '/img/noimg.png'}
                          alt={row.judul}
                          fill
                          className={'object-cover rounded-lg'}
                        />
                      </div>

                      <div className="flex-1 flex flex-col mt-4">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex items-center gap-1.5 text-primary text-xs font-semibold ">
                            <FaRegCalendarAlt className="size-4" />
                            {row.tanggal_berita
                              ? format(new Date(row.tanggal_berita), 'dd-MM-yyyy')
                              : ''}
                          </div>
                          <div className="text-primary text-xs font-semibold">
                            {row.nama_kategori_berita}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-[#1E3A8A] font-semibold text-xl lg:text-2xl leading-tight line-clamp-3 group-hover:text-[#0F6D5B] transition mb-4">
                          {row.judul}
                        </h3>

                        {/* Description */}
                        <div
                          className="text-[#444444] text-[15px] leading-relaxed line-clamp-3 flex-1"
                          dangerouslySetInnerHTML={{ __html: row.isi_berita ?? '' }}
                        />
                      </div>
                    </Link>
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
export default ProfileNewsV13
