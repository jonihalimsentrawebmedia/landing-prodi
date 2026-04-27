'use client'

import JumbotronTitleV10 from '@/components/thema-v10/component/common/jumbotronTitle'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import ContentAboutV10 from '@/components/thema-v10/profile/contentAbout'
import { usePathname, useRouter } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import { UseGetContactUsProfile } from '@/app/profile/contact-us/hooks'
import { useEffect, useRef } from 'react'
import { IoLocationSharp, IoMailSharp } from 'react-icons/io5'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const ProfileContactV10 = () => {
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
  const { contactUse, loading } = UseGetContactUsProfile()

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
      <JumbotronTitleV10 title={'Profile'} context={'PROFIL'} />
      <div className="container-sm py-5">
        <div className="bg-blue-50 p-1.5 px-2 rounded">
          <BreadcrumbBasic
            className={'text-primary hover:bg-transparent!'}
            data={[{ name: 'Beranda', link: '/' }, { name: 'Profil' }]}
          />
        </div>
      </div>

      <ContentAboutV10 />

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
              <div className={'w-full space-y-4 py-4 lg:py-5'}>
                <TitleLine text={'Hubungi Kami'} />

                <div className="flex flex-col items-start lg:flex-row justify-between gap-5">

                  <div className="flex flex-col gap-5 w-full">
                    <ul className={'space-y-4 py-5 lg:py-0 w-full'}>
                      <li
                        className={cn(
                          'flex items-center gap-3 p-5 bg-white shadow drop-shadow-lg rounded-lg'
                        )}
                      >
                        <div className="p-2 bg-primary text-white rounded-md w-fit">
                          <IoLocationSharp className={'size-5'} />
                        </div>
                        <div>
                          <p className="text-sm text-primary">Alamat</p>
                          <p className={'text-sm'}>{contactUse?.alamat}</p>
                        </div>
                      </li>
                      <li
                        className={cn(
                          'flex items-center gap-3 p-5 bg-white shadow drop-shadow-lg rounded-lg'
                        )}
                      >
                        <div className="p-2 bg-primary text-white rounded-md w-fit">
                          <BsFillTelephoneFill className={'size-5'} />
                        </div>
                        <div>
                          <p className="text-sm text-primary">Telepon</p>
                          <p className={'text-sm'}>{contactUse?.no_telepon}</p>
                        </div>
                      </li>
                      <li
                        className={cn(
                          'flex items-center gap-3 p-5 bg-white shadow drop-shadow-lg rounded-lg'
                        )}
                      >
                        <div className="p-2 bg-primary text-white rounded-md w-fit">
                          <IoMailSharp className={'size-5'} />
                        </div>
                        <div>
                          <p className="text-sm text-primary">Email</p>
                          <p className={'text-sm'}>{contactUse?.email}</p>
                        </div>
                      </li>
                    </ul>
                    <div className="p-5 shadow drop-shadow-xl rounded-lg bg-white">
                      <p className="text-primary">Sosial Media</p>
                      <ul className={'flex gap-3 mt-1.5'}>
                        <li className={'p-2 bg-primary text-white w-fit rounded-full'}>
                          <FaFacebook className={'size-6'} />
                        </li>
                        <li className={'p-2 bg-primary text-white w-fit rounded-full'}>
                          <FaYoutube className={'size-6'} />
                        </li>
                        <li className={'p-2 bg-primary text-white w-fit rounded-full'}>
                          <FaInstagram className={'size-6'} />
                        </li>
                        <li className={'p-2 bg-primary text-white w-fit rounded-full'}>
                          <FaTwitter className={'size-6'} />
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="w-full lg:w-fit h-full overflow-hidden rounded-xl relative">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: (contactUse?.iframe ?? '').replace(
                          /<iframe([^>]*?)>/i,
                          `<iframe class="w-full lg:w-[372px] h-[400px] rounded-xl" $1`
                        ),
                      }}
                    />
                  </div>

                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  )
}
export default ProfileContactV10
