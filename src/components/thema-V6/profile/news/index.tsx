'use client'

import ProfileLayoutV6 from '@/components/thema-V6/profile/Layout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import { usePathname, useRouter } from 'next/navigation'
import { UseGetNews } from '@/app/homepage/hooks'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const ProfileNewsV6 = () => {
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

  const { news, loading } = UseGetNews({
    page: '1',
    limit: '3',
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
            value={'/profile/news'}
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
                  <TitleLine text={'Berita'} className={'text-footer!'} />

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
                          <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-footer flex items-center gap-1">
                            <FaRegCalendarAlt className={'size-4'} />
                            {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
                          </p>
                          <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-footer">
                            {row?.nama_kategori_berita}
                          </p>
                        </div>
                        <p className="lg:text-2xl line-clamp-2">{row?.judul}</p>
                        <div
                          className={'flex flex-col gap-1.5 html-class line-clamp-3! text-sm!'}
                          dangerouslySetInnerHTML={{ __html: row?.isi_berita ?? '' }}
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </ProfileLayoutV6>
    </>
  )
}

export default ProfileNewsV6
