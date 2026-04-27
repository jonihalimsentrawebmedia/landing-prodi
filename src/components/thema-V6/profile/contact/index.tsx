'use client'

import ProfileLayoutV6 from '@/components/thema-V6/profile/Layout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import { usePathname, useRouter } from 'next/navigation'
import { UseGetContactUsProfile } from '@/app/profile/contact-us/hooks'
import { IoLocationSharp, IoMailSharp } from 'react-icons/io5'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useEffect, useRef } from 'react'

const ProfileContactV6 = () => {
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

  const { contactUse, loading } = UseGetContactUsProfile()
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
            value={pathname}
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
                  <TitleLine text={'Hubungin Kami'} className={'text-footer!'} />

                  <div className="flex flex-col lg:flex-row items-start justify-between gap-5">
                    <div className="flex flex-col gap-4">
                      <ul className={'mt-4 space-y-4 py-5 lg:py-0'}>
                        <li
                          className={'flex items-center gap-3 border-l-2 border-l-yellow-500 pl-2'}
                        >
                          <div className="p-2 bg-footer text-white rounded-md w-fit">
                            <IoLocationSharp className={'size-5'} />
                          </div>
                          <div>
                            <p className="text-sm text-footer">Alamat</p>
                            <p className={'text-sm'}>{contactUse?.alamat}</p>
                          </div>
                        </li>
                        <li
                          className={'flex items-center gap-3 border-l-2 border-l-yellow-500 pl-2'}
                        >
                          <div className="p-2 bg-footer text-white rounded-md w-fit">
                            <BsFillTelephoneFill className={'size-5'} />
                          </div>
                          <div>
                            <p className="text-sm text-footer">Telepon</p>
                            <p className={'text-sm'}>{contactUse?.no_telepon}</p>
                          </div>
                        </li>
                        <li
                          className={'flex items-center gap-3 border-l-2 border-l-yellow-500 pl-2'}
                        >
                          <div className="p-2 bg-footer text-white rounded-md w-fit">
                            <IoMailSharp className={'size-5'} />
                          </div>
                          <div>
                            <p className="text-sm text-footer">Email</p>
                            <p className={'text-sm'}>{contactUse?.email}</p>
                          </div>
                        </li>
                      </ul>
                      <ul className={'flex gap-3 mt-5'}>
                        <li className={'p-2 bg-footer text-white w-fit rounded'}>
                          <FaFacebook className={'size-6'} />
                        </li>
                        <li className={'p-2 bg-footer text-white w-fit rounded'}>
                          <FaYoutube className={'size-6'} />
                        </li>
                        <li className={'p-2 bg-footer text-white w-fit rounded'}>
                          <FaInstagram className={'size-6'} />
                        </li>
                        <li className={'p-2 bg-footer text-white w-fit rounded'}>
                          <FaTwitter className={'size-6'} />
                        </li>
                      </ul>
                    </div>

                    <div className="w-full lg:w-fit h-full overflow-hidden rounded-xl">
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
      </ProfileLayoutV6>
    </>
  )
}

export default ProfileContactV6
