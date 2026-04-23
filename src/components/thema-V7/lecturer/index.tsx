'use client'

import JumbotronTitleV7 from '@/components/thema-V7/component/common/jumbotron'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { useSearchParams } from 'next/navigation'
import { UseGetLecturer } from '@/app/homepage/hooks'
import Image from 'next/image'
import { SearchInput } from '@/components/common/filter/search'

const LecturerListPageV7 = () => {
  const searchParams = useSearchParams()

  const search = searchParams.get('search') ?? ''
  const { lecturer } = UseGetLecturer({
    page: '1',
    limit: '8',
    search: search,
  })

  return (
    <>
      <JumbotronTitleV7 title={'Akreditas'} context={'AKREDITASI'} />
      <div className={'bg-primary w-full max-w-[1920px] mx-auto p-4'}>
        <div className="container-sm">
          <BreadcrumbBasic data={[{ name: 'Beranda', link: '/' }, { name: 'Dosen' }]} />
        </div>
      </div>

      <div className="lg:p-5 py-5 bg-footer dark:bg-gray-800">
        <div className="container-sm">
          <SearchInput placeholder={'Cari Dosen'} className={'w-full bg-white rounded'} />

          <div className="grid grid-cols-4 gap-4 mt-5">
            {lecturer?.map((row, k) => (
              <div key={k} className={'bg-primary p-4 rounded-lg space-y-2'}>
                <div className={'w-full h-[254px] relative'}>
                  <Image
                    src={row?.gambar_url ?? '/img/noimg.png'}
                    alt={'thumbnail'}
                    className={'w-full object-cover'}
                    fill
                  />
                </div>
                <p className="text-white lg:text-xl">{row?.nama}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default LecturerListPageV7
