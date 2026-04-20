'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import SideNavV5 from '@/components/thema-v5/profile/component/sideNav'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { useState } from 'react'
import GalleryVideo from '@/components/thema-v5/gallery/video'
import GalleryAlbumV5 from '@/components/thema-v5/gallery/Album'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

const ProfileGalleryV5 = () => {
  const [selectedTab, setSelectedTab] = useState('video')

  const TabsData = [
    {
      name: 'Video',
      value: 'video',
      element: <GalleryVideo />,
    },
    {
      name: 'Foto',
      value: 'photo',
      element: <GalleryAlbumV5 />,
    },
  ]

  return (
    <>
      <ProfileLayout title={'Profil'} context={'PROFIL'}>
        <div className={'bg-footer w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
          <div className="container-sm px-2!">
            <BreadcrumbBasic data={[{ name: 'Beranda', link: '/' }, { name: 'Profil' }]} />
          </div>
        </div>
        <div className="p-0 py-2 lg:p-5 bg-primary dark:bg-gray-800">
          <div className="container-sm px-2!">
            <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8">
              <SideNavV5 />
              <div className={'w-full space-y-4'}>
                <p className="text-2xl font-semibold text-footer underline underline-offset-8 decoration-yellow-500">
                  Galery
                </p>

                <Tabs
                  className={'bg-transparent w-full'}
                  value={selectedTab}
                  onValueChange={setSelectedTab}
                >
                  <TabsList className={'w-full bg-transparent flex gap-5'}>
                    {TabsData?.map((row, k) => (
                      <TabsTrigger
                        key={k}
                        value={row?.value}
                        className={cn(
                          'border border-footer rounded!',
                          'data-[state=active]:bg-footer',
                          'data-[state=active]:text-primary'
                        )}
                      >
                        {row?.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {TabsData?.map((row, k) => (
                    <TabsContent key={k} value={row?.value}>
                      {row?.element}
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}
export default ProfileGalleryV5
