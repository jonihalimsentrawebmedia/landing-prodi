'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { usePathname, useRouter } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { UseGetContactUsProfile } from '@/app/profile/contact-us/hooks'
import { useEffect, useRef } from 'react'
import { IoLocationSharp, IoMailSharp } from 'react-icons/io5'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import ContentAboutV15 from '@/components/thema-v15/profile/contentAbout'
import { JumbotronTitleV15 } from '@/components/thema-v15/component/common/jumbotronTitle'

const ProfileContactV15 = () => {
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
      <JumbotronTitleV15 title="Profile" context="PROFIL" />

      <div className="bg-primary w-full">
        <div className="container-sm p-2">
          <BreadcrumbBasic
            className="text-white! hover:bg-primary!"
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
              <div className="w-full space-y-4 py-4 lg:py-5">
                <div className="flex items-center gap-4">
                  <h2 className="text-primary text-[24px] font-semibold shrink-0">
                    Hubungi Kami
                  </h2>
                  <div className="h-px bg-[#C8C8C8] flex-1" />
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-6 w-full">
                  <div className="w-full flex flex-col gap-5">
                    <ul className="mt-4 space-y-4 py-5 lg:py-0 w-full">
                      <li className="flex items-center gap-3 p-5 bg-white border border-[#C8C8C8] rounded-2xl shadow-sm">
                        <div className="p-2 bg-primary text-white rounded-lg w-fit">
                          <IoLocationSharp className="size-5" />
                        </div>
                        <div>
                          <p className="text-sm text-primary font-semibold">Alamat</p>
                          <p className="text-sm text-[#444444]">{contactUse?.alamat}</p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 p-5 bg-white border border-[#C8C8C8] rounded-2xl shadow-sm">
                        <div className="p-2 bg-primary text-white rounded-lg w-fit">
                          <BsFillTelephoneFill className="size-5" />
                        </div>
                        <div>
                          <p className="text-sm text-primary font-semibold">Telepon</p>
                          <p className="text-sm text-[#444444]">{contactUse?.no_telepon}</p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 p-5 bg-white border border-[#C8C8C8] rounded-2xl shadow-sm">
                        <div className="p-2 bg-primary text-white rounded-lg w-fit">
                          <IoMailSharp className="size-5" />
                        </div>
                        <div>
                          <p className="text-sm text-primary font-semibold">Email</p>
                          <p className="text-sm text-[#444444]">{contactUse?.email}</p>
                        </div>
                      </li>
                    </ul>

                    <div className="p-5 border border-[#C8C8C8] rounded-2xl bg-white shadow-sm">
                      <p className="text-primary font-semibold">Sosial Media</p>
                      <ul className="flex gap-3 mt-1.5">
                        <li className="p-2 bg-primary text-white w-fit rounded-lg">
                          <FaFacebook className="size-6" />
                        </li>
                        <li className="p-2 bg-primary text-white w-fit rounded-lg">
                          <FaYoutube className="size-6" />
                        </li>
                        <li className="p-2 bg-primary text-white w-fit rounded-lg">
                          <FaInstagram className="size-6" />
                        </li>
                        <li className="p-2 bg-primary text-white w-fit rounded-lg">
                          <FaTwitter className="size-6" />
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="w-full lg:w-fit h-full overflow-hidden rounded-2xl border border-[#C8C8C8]">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: (contactUse?.iframe ?? '').replace(
                          /<iframe([^>]*?)>/i,
                          '<iframe class="w-full lg:w-[372px] h-[400px] rounded-2xl" $1'
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

export default ProfileContactV15
