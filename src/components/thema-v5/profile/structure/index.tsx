'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import SideNavV5 from '@/components/thema-v5/profile/component/sideNav'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { UseGetStructureOrganization } from '@/app/profile/structure-organization/hooks'
import Image from 'next/image'

const StructureOrganizationV5 = () => {
  const { organization } = UseGetStructureOrganization()

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
                  Struktur Organisasi
                </p>
                {organization?.url_gambar ? (
                  <Image
                    src={organization?.url_gambar}
                    alt={'image'}
                    className={'w-full h-auto object-contain'}
                    width={1920}
                    height={1080}
                  />
                ) : (
                  'Gambar tidak tersedia'
                )}
              </div>
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}

export default StructureOrganizationV5
