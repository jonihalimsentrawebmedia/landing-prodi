'use client'

import { SearchInput } from '@/components/common/filter/search'
import Image from 'next/image'
import { UseGetLecturer } from '@/app/homepage/hooks'
import { useRouter, useSearchParams } from 'next/navigation'
import { PaginationCustom } from '@/components/common/pagination'

export const ListLecturerTheme4 = () => {
  const dump = [
    'Literature Analysis',
    'Advanced Writing',
    'Research Methods',
    'Listening I',
    'Vocabulary Building',
    'Speaking II',
  ]

  const router = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams.get('page') ?? '1'
  const { lecturer, meta } = UseGetLecturer({
    page: page,
    limit: '9',
  })

  return (
    <>
      <div className={'container py-5'}>
        <SearchInput className={'w-full'} placeholder={'Cari Dosen'} />

        <div className="my-5 grid lg:grid-cols-3 gap-5">
          {lecturer.map((row, k) => (
            <div className="border flex items-center gap-2" key={k}>
              <Image
                src={row?.gambar_url ?? '/img/noimg.png'}
                alt={'dosen'}
                className={'lg:w-[150px] w-[100px] h-[155px] lg:h-[200px] object-cover'}
                width={150}
                height={200}
              />
              <div className={'flex flex-col gap-1.5'}>
                <p className="lg:text-xl text-sm font-semibold">{row?.nama}</p>
                <p className={'text-xs lg:text-sm'}>
                  {dump?.slice(0, 3).join(', ')} +{dump?.length - 3}
                </p>
                <button
                  className={
                    'text-primary font-semibold underline underline-offset-8 text-start text-xs lg:text-sm'
                  }
                >
                  Lihat Kontak & Jadwal
                </button>
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
    </>
  )
}
