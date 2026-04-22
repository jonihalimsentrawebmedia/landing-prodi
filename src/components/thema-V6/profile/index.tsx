'use client'

import ProfileLayoutV6 from '@/components/thema-V6/profile/Layout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { UseGetProfileUnit } from '@/app/profile/unit/hooks'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import { useRouter } from 'next/navigation'

const ProfileSectionV6 = () => {
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

  const { unitProfile, loading } = UseGetProfileUnit()
  const router = useRouter()

  if (loading) return <></>

  return (
    <>
      <ProfileLayoutV6>
        <div className="container-sm py-5">
          <Tabs
            className={'w-full'}
            value={'/profile'}
            onValueChange={(value) => router.push(value, { scroll: false })}
          >
            <TabsList
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
                  <TitleLine text={'Unit Pengelolah'} className={'text-footer!'} />

                  <div className="grid lg:grid-cols-2 gap-5">
                    {unitProfile?.map((row, k) => (
                      <Card key={k} className={'p-2'}>
                        <CardContent className={'flex items-start gap-5 p-2'}>
                          <Image
                            src={row?.gambar_url}
                            alt={row?.nama}
                            className={'w-[99px] h-[132px] object-cover rounded-lg'}
                            width={99}
                            height={132}
                          />
                          <div className="flex flex-col gap-1.5">
                            <p className="text-footer text-xl">{row?.nama}</p>
                            <p className={'text-gray-700'}>Jabatan</p>
                            <p className="font-semibold">{row?.jabatan}</p>
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
      </ProfileLayoutV6>
    </>
  )
}

export default ProfileSectionV6
