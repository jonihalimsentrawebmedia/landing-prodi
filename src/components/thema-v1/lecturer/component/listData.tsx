'use client'

import { SearchInput } from '@/components/common/filter/search'
import Image from 'next/image'
import { UseGetLecturer } from '@/app/homepage/hooks'
import { PaginationCustom } from '@/components/common/pagination'
import { useRouter, useSearchParams } from 'next/navigation'

export const ListDataLecturer = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams.get('page') ?? '1'

  const { lecturer, meta } = UseGetLecturer({
    page: page,
    limit: '9',
  })

  return (
    <>
      <div className={'bg-primary'}>
        <div className="py-5 container">
          <SearchInput placeholder={'Cari Dosen ...'} className={'w-full bg-white rounded'} />

          <div className="grid grid-cols-3 gap-5 mt-5 mb-5">
            {lecturer?.map((row, k) => (
              <div key={k} className="bg-gray-500 rounded shadow-sm p-5 flex items-start gap-5">
                <Image
                  src={row?.gambar_url ?? '/img/noimg.png'}
                  alt={'image'}
                  width={100}
                  height={100}
                  className={'rounded-full size-20 object-cover'}
                />
                <div>
                  <p>{row?.nama}</p>
                  <div className="flex flex-col gap-1">
                    <p>Jabatan : {row?.jabatan_struktural ?? '-'}</p>
                    <p>Golongan : {row?.golongan}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {meta && (
            <PaginationCustom
              meta={meta}
              page={Number(page)}
              onPageChange={(e) => {
                const ParamSearch = new URLSearchParams(searchParams)
                ParamSearch.set('page', e.toString())
                router.push('?' + ParamSearch.toString())
              }}
            />
          )}
        </div>
      </div>
    </>
  )
}
