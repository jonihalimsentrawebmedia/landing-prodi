'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { UseGetLecturer } from '@/app/homepage/hooks'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { SearchInput } from '@/components/common/filter/search'
import Image from 'next/image'
import { PaginationCustom } from '@/components/common/pagination'
import { JumbotronTitleV14 } from '@/components/thema-v14/component/common/jumbotronTitle'

const LecturerListPageV14 = () => {
  const searchParams = useSearchParams()

  const search = searchParams.get('search') ?? ''
  const page = searchParams.get('page') ?? '1'
  const limit = searchParams.get('limit') ?? '8'

  const { lecturer, meta } = UseGetLecturer({
    page: page,
    limit: limit,
    search: search,
  })

  const router = useRouter()

  return (
    <>
      <JumbotronTitleV14 title={'Dosen'} context={'DOSEN'} />
      <div className={'bg-footer w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
        <div className="container-sm px-2!">
          <BreadcrumbBasic
            className={'text-white! hover:bg-primary!'}
            data={[{ name: 'Beranda', link: '/' }, { name: 'Dosen' }]}
          />
        </div>
      </div>

      <div className="lg:p-5 py-5 bg-primary/10 dark:bg-gray-800">
        <div className="container-sm">
          <SearchInput placeholder={'Cari Dosen'} className={'w-full bg-white rounded'} />

          <div className="grid lg:grid-cols-4 gap-4 mt-5">
            {lecturer?.map((row, k) => (
              <div
                className={
                  'border p-4 rounded-md hover:shadow-lg bg-white flex flex-col justify-between'
                }
                key={k}
              >
                <Image
                  src={row?.gambar_url}
                  alt={row?.nama}
                  width={200}
                  height={200}
                  className={'rounded w-full h-[250px] object-cover'}
                />
                <p className="text-2xl mt-2">{row?.nama}</p>
                <div className={'mt-2 space-y-1.5'}>
                  <p className="text-primary font-semibold text-sm">NIDN</p>
                  <p className="text-primary font-semibold text-sm">{row?.nidn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {meta && (
        <div className={'py-4 bg-primary/10'}>
          <PaginationCustom
            meta={meta}
            page={Number(page)}
            onPageChange={(e) => {
              const params = new URLSearchParams(searchParams.toString())
              params.set('page', e.toString())
              router.push(`?${params.toString()}`)
            }}
          />
        </div>
      )}
    </>
  )
}
export default LecturerListPageV14
