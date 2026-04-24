'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { UseGetLecturer } from '@/app/homepage/hooks'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { SearchInput } from '@/components/common/filter/search'
import Image from 'next/image'
import { PaginationCustom } from '@/components/common/pagination'
import JumbotronTitleV9 from '@/components/thema-v9/component/common/jumbotronTitle'

const LecturerListPageV9 = () => {
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
      <JumbotronTitleV9 title={'Dosen'} context={'DOSEN'} />
      <div className="bg-primary">
        <div className="container-sm py-5">
          <div className="p-1.5 px-2 rounded">
            <BreadcrumbBasic
              className={'text-white hover:bg-transparent!'}
              data={[{ name: 'Beranda', link: '/' }, { name: 'Dosen' }]}
            />
          </div>
        </div>
      </div>

      <div className="lg:p-5 py-5 bg-primary/10 dark:bg-gray-800">
        <div className="container-sm">
          <SearchInput placeholder={'Cari Dosen'} className={'w-full bg-white rounded'} />

          <div className="grid lg:grid-cols-4 gap-4 mt-5">
            {lecturer?.map((row, k) => (
              <div
                key={k}
                className="border-4 border-primary rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={row?.gambar_url ?? '/img/noimg.png'}
                    alt={row?.nama}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-white text-primary p-4 text-center h-full">
                  <p className="font-montserrat font-semibold text-[20px] leading-tight">
                    {row?.nama}
                  </p>
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
export default LecturerListPageV9
