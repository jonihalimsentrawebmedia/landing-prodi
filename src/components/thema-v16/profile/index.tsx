'use client'

import { usePathname, useRouter } from 'next/navigation'
import { UseGetProfileUnit } from '@/app/profile/unit/hooks'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { JumbotronTitleV16 } from '@/components/thema-v16/component/jumbotronTitle'
import ContentAboutV16 from '@/components/thema-v16/profile/contentAbout'
import { cn } from '@/lib/utils'

const ProfilePageV16 = () => {
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
      <JumbotronTitleV16
        title="Profile"
        context="PROFIL"
        data={[{ name: 'Beranda', link: '/' }, { name: 'Profil' }]}
      />

      <ContentAboutV16 />

      <div className="container-sm lg:max-w-[1280px] mx-auto pb-10 mt-5">
        <Tabs value={pathName} onValueChange={(value) => router.push(value)}>
          <TabsList
            className="w-full h-10 p-0 bg-transparent justify-start overflow-x-auto lg:overflow-visible
            whitespace-nowrap rounded-none border-0 border-b-2 border-[#CDA327] gap-0"
          >
            {TabsData?.map((row) => (
              <TabsTrigger
                key={row.link}
                value={row.link}
                className="h-10 px-4 py-2 rounded-t-lg rounded-b-none bg-transparent
                text-base font-semibold text-[#1F2937] shadow-none border-0
                whitespace-nowrap data-[state=active]:bg-[#0F766E] data-[state=active]:text-white
                data-[state=active]:shadow-none"
              >
                {row.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {TabsData?.map((row, k) => (
            <TabsContent key={k} value={row?.link}>
              <div className="flex flex-col gap-4 mt-5">
                <div className="flex items-center gap-2 w-full">
                  <div className="border-l-4 border-b-4 border-[#CDA327] px-4 py-2">
                    <h2
                      className={cn(
                        'text-[25px] leading-[38px] font-normal text-[#0F766E] whitespace-nowrap'
                      )}
                    >
                      Unit Pengelola
                    </h2>
                  </div>
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

export default ProfilePageV16
