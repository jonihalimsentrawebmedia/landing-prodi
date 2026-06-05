'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { usePathname, useRouter } from 'next/navigation'
import { UseGetProfileUnit } from '@/app/profile/unit/hooks'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { JumbotronTitleV15 } from '@/components/thema-v15/component/common/jumbotronTitle'
import ContentAboutV15 from '@/components/thema-v15/profile/contentAbout'

const ProfilePageV15 = () => {
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
  const { unitProfile, loading } = UseGetProfileUnit()

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

      <ContentAboutV15/>

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
              <div className="flex flex-col gap-4 mt-5">
                <div className="flex items-center gap-4">
                  <h2 className="text-[#1F7A63] text-[24px] font-semibold shrink-0">
                    Unit Pengelolah
                  </h2>
                  <div className="h-px bg-[#C8C8C8] flex-1" />
                </div>

                <div className="grid lg:grid-cols-2 gap-5">
                  {unitProfile?.map((row, k) => (
                    <Card key={k} className="border border-[#C8C8C8] rounded-2xl p-2 shadow-sm">
                      <CardContent className="flex items-start gap-5 p-2">
                        <Image
                          src={row?.gambar_url}
                          alt={row?.nama}
                          className="w-[99px] h-[132px] object-cover rounded-xl"
                          width={99}
                          height={132}
                        />
                        <div className="flex flex-col gap-1.5">
                          <p className="text-[#444444] text-xl font-semibold">{row?.nama}</p>
                          <p className="text-[#1F7A63] text-sm">Jabatan</p>
                          <p className="font-semibold text-[#444444]">{row?.jabatan}</p>
                        </div>
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

export default ProfilePageV15
