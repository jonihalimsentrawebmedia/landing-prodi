'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import SideNavV5 from '@/components/thema-v5/profile/component/sideNav'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { MdEmail, MdPhone } from 'react-icons/md'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import { UseGetLecturer } from '@/app/homepage/hooks'

const LecturerProdiListV5 = () => {
  const { lecturer } = UseGetLecturer({
    page: '1',
    limit: '9',
  })

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
                  Dosen
                </p>

                <div className="grid lg:grid-cols-3 gap-5">
                  {lecturer?.map((row, k) => (
                    <Card key={k}>
                      <CardContent className={'space-y-2'}>
                        <div className="flex items-start gap-4">
                          <Image
                            src={row?.gambar_url ?? '/img/noimg.png'}
                            alt={row?.nama}
                            width={85}
                            height={115}
                            className={'w-[85px] min-w-[85px] h-[115px] object-cover rounded-md'}
                          />
                          <div className="space-y-1.5">
                            <p className="text-lg text-footer font-semibold">{row?.nama}</p>
                            <p className="text-sm text-footer">NIDN</p>
                            <p>{row?.nidn}</p>
                          </div>
                        </div>
                        <TitleLine text={'Kontak'} />
                        <p className="flex items-center gap-1.5 text-black dark:text-white">
                          <MdPhone /> {row?.no_hp ?? 'Belum Terddaftar'}
                        </p>
                        <p className="flex items-center gap-1.5 text-black dark:text-white">
                          <MdEmail /> {row?.email ?? 'Belum Terddaftar'}
                        </p>
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

export default LecturerProdiListV5
