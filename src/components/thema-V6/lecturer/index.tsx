'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { SearchInput } from '@/components/common/filter/search'
import { UseGetLecturer } from '@/app/homepage/hooks'
import { useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const LecturerListPageV6 = () => {
  const searchParams = useSearchParams()

  const search = searchParams.get('search') ?? ''
  const { lecturer } = UseGetLecturer({
    page: '1',
    limit: '9',
    search: search,
  })

  return (
    <>
      <ProfileLayout title={'Dosen'} context={'DOSEN'}>
        <div className={'bg-footer w-full max-w-[1920px] mx-auto p-4'}>
          <div className="container-sm">
            <BreadcrumbBasic data={[{ name: 'Beranda', link: '/' }, { name: 'Dosen' }]} />
          </div>
        </div>
        <div className="lg:p-5 py-2.5 bg-primary/20 dark:bg-gray-800">
          <div className="container-sm space-y-4">
            <SearchInput placeholder={'Cari Dosen'} className={'w-full bg-white rounded'} />

            <div className=" flex flex-row overflow-scroll lg:overflow-visible lg:grid grid-cols-4 gap-5">
              {lecturer?.map((row, k) => (
                <div
                  key={k}
                  className={cn(
                    'bg-white dark:bg-gray-700 rounded flex flex-col gap-2 p-4',
                    'items-center justify-center w-full min-w-[250px]',
                    'shadow border'
                  )}
                >
                  <Image
                    src={row?.gambar_url ?? '/img/noimg.png'}
                    alt={row?.nama}
                    width={254}
                    height={254}
                    className={'w-full h-[254px] object-cover rounded'}
                  />
                  <p className="text-center lg:text-xl">{row?.nama}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}
export default LecturerListPageV6
