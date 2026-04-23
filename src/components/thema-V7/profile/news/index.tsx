'use client'

import JumbotronTitleV7 from '@/components/thema-V7/component/common/jumbotron'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import ContentAboutV7 from '@/components/thema-V7/profile/contentAbout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import Image from 'next/image'
import { UseGetNews } from '@/app/homepage/hooks'
import Link from 'next/link'
import { format } from 'date-fns'
import { useEffect, useRef } from 'react'

const ProfileNewsV7 = () => {
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
              className={cn(
                'lg:flex-col! overflow-x-scroll justify-start lg:overflow-x-visible',
                'w-full h-full lg:max-w-[200px] bg-transparent relative lg:px-4! px-0!'
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
                <TitleLine text={'Berita'} />

                {news?.map((row, k) => (
                  <Link
                    href={`/information/news/${row?.slug}`}
                    key={k}
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
                      <div className={'flex gap-2'}>
                        <p className="text-xs font-semibold text-primary">
                          {row?.nama_kategori_berita}
                        </p>
                      </div>
                      <p className="lg:text-2xl line-clamp-2">{row?.judul}</p>
                      <p className="text-xs font-semibold text-primary flex items-center gap-1">
                        {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
                      </p>
                      <div
                        className={'flex flex-col gap-1.5 html-class line-clamp-3! text-sm!'}
                        dangerouslySetInnerHTML={{ __html: row?.isi_berita ?? '' }}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default ProfileNewsV7
