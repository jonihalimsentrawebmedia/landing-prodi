'use client'

import JumbotronTitleV8 from '@/components/thema-v8/component/common/jumbotronTitle'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import ContentAboutV7 from '@/components/thema-V7/profile/contentAbout'
import { usePathname, useRouter } from 'next/navigation'
import { UseGetProfileUnit } from '@/app/profile/unit/hooks'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const ProfilePageV8 = () => {
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
      <JumbotronTitleV8 title={'Profil'} context={'PROFIL'} />
      <div className="bg-footer">
        <div className="container-sm py-5">
          <div className="bg-blue-50 p-1.5 px-2 rounded">
            <BreadcrumbBasic
              className={'text-primary hover:bg-transparent!'}
              data={[{ name: 'Beranda', link: '/' }, { name: 'Profil' }]}
            />
          </div>
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
                <TitleLine text={'Unit Pengelolah'} />

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
          </Tabs>
        </div>
      </div>
    </>
  )
}
export default ProfilePageV8
