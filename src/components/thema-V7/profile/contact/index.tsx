'use client'

import JumbotronTitleV7 from '@/components/thema-V7/component/common/jumbotron'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import ContentAboutV7 from '@/components/thema-V7/profile/contentAbout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import { UseGetContactUsProfile } from '@/app/profile/contact-us/hooks'
import { IoLocationSharp, IoMailSharp } from 'react-icons/io5'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useEffect, useRef } from 'react'

const ProfileContactV7 = () => {
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
                <TitleLine text={'Unit Pengelolah'} />

                <ul className={'mt-4 space-y-4 py-5 lg:py-0'}>
                  <li className={'flex items-center gap-3 border-l-2 border-l-yellow-500 pl-2'}>
                    <div className="p-2 bg-primary text-white rounded-md w-fit">
                      <IoLocationSharp className={'size-5'} />
                    </div>
                    <div>
                      <p className="text-sm text-primary">Alamat</p>
                      <p className={'text-sm'}>{contactUse?.alamat}</p>
                    </div>
                  </li>
                  <li className={'flex items-center gap-3 border-l-2 border-l-yellow-500 pl-2'}>
                    <div className="p-2 bg-primary text-white rounded-md w-fit">
                      <BsFillTelephoneFill className={'size-5'} />
                    </div>
                    <div>
                      <p className="text-sm text-primary">Telepon</p>
                      <p className={'text-sm'}>{contactUse?.no_telepon}</p>
                    </div>
                  </li>
                  <li className={'flex items-center gap-3 border-l-2 border-l-yellow-500 pl-2'}>
                    <div className="p-2 bg-primary text-white rounded-md w-fit">
                      <IoMailSharp className={'size-5'} />
                    </div>
                    <div>
                      <p className="text-sm text-primary">Email</p>
                      <p className={'text-sm'}>{contactUse?.email}</p>
                    </div>
                  </li>
                </ul>

                <ul className={'flex gap-3 mt-5'}>
                  <li className={'p-2 bg-primary text-white w-fit rounded'}>
                    <FaFacebook className={'size-6'} />
                  </li>
                  <li className={'p-2 bg-primary text-white w-fit rounded'}>
                    <FaYoutube className={'size-6'} />
                  </li>
                  <li className={'p-2 bg-primary text-white w-fit rounded'}>
                    <FaInstagram className={'size-6'} />
                  </li>
                  <li className={'p-2 bg-primary text-white w-fit rounded'}>
                    <FaTwitter className={'size-6'} />
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default ProfileContactV7
