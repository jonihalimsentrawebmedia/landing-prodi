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
import ContentAboutV13 from '@/components/thema-v13/profile/contentAbout'
import { JumbotronTitleV14 } from '@/components/thema-v14/component/common/jumbotronTitle'

const ProfileNewsV14 = () => {
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
      <JumbotronTitleV14 title={'Profile'} context={'PROFIL'} />
      <div className={'bg-footer w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
        <div className="container-sm px-2!">
          <BreadcrumbBasic
            className={'text-white! hover:bg-primary!'}
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

                <div className="flex flex-col gap-5">
                  {news?.map((row, l) => (
                    <Link
                      href={`/information/news/${row?.slug}`}
                      key={l}
                      className={'flex flex-col lg:flex-row items-start gap-5'}
                    >
                      <div className="lg:w-[216px] w-full lg:min-w-[216px] h-[200px] lg:h-[162px] relative">
                        <Image
                          src={row?.gambar ?? '/img/noimg.png'}
                          sizes="100vw"
                          alt={'gambar'}
                          fill
                          className={'object-cover object-center w-full h-[162px] rounded-lg'}
                        />
                      </div>
                      <div className={'space-y-2'}>
                        <p className="lg:text-2xl line-clamp-2">{row?.judul}</p>
                        <div className={'flex gap-2'}>
                          <p className="text-xs font-semibold text-primary flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
                            <FaRegCalendarAlt />
                            {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
                          </p>
                          <p className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {row?.nama_kategori_berita}
                          </p>
                        </div>
                        <div
                          className={'flex flex-col gap-1.5 html-class line-clamp-3! text-sm!'}
                          dangerouslySetInnerHTML={{ __html: row?.isi_berita ?? '' }}
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
export default ProfileNewsV14
