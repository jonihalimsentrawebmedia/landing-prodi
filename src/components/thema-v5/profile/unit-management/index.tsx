'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import SideNavV5 from '@/components/thema-v5/profile/component/sideNav'
import { UseGetProfileUnit } from '@/app/profile/unit/hooks'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const UnitManagementV5 = () => {
  const { unitProfile, loading } = UseGetProfileUnit()

  if (loading) return <></>

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
                  Unit Pengelola
                </p>

                <div className="grid lg:grid-cols-2 gap-5">
                  {unitProfile?.map((row, k) => (
                    <Card key={k} className={'p-2'}>
                      <CardContent className={'flex items-center gap-2 p-2'}>
                        <Image
                          src={row?.gambar_url}
                          alt={row?.nama}
                          className={'w-[75px] h-[100px] object-cover rounded'}
                          width={75}
                          height={100}
                        />
                        <div className="flex flex-col gap-1.5">
                          <p className="font-semibold">{row?.nama}</p>
                          <p className={'text-gray-500'}>Jabatan</p>
                          <p className="font-semibold">{row?.jabatan}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}

export default UnitManagementV5
