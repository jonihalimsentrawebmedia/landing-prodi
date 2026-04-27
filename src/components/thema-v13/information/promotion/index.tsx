'use client'

import { useSearchParams } from 'next/navigation'
import { UseGetPromotion } from '@/app/information/hooks'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { SearchInput } from '@/components/common/filter/search'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import JumbotronTitleV13 from '@/components/thema-v13/component/common/jumbotronTitle'
import { UseGetPromotionYear } from '@/app/information/promotion/hooks'
import { FilterChip } from '@/components/thema-v5/component/common/filterChip'

const InformationPromotionV13 = () => {
  const searchPrams = useSearchParams()
  const page = searchPrams.get('page') || '1'
  const limit = searchPrams.get('limit') || '8'
  const search = searchPrams.get('search') || ''
  const tahun = searchPrams.get('year') || ''

  const { year } = UseGetPromotionYear()
  const { promotion, loading } = UseGetPromotion({
    page: page,
    limit: limit,
    search: search,
    year: tahun,
  })

  if (loading) return <></>

  return (
    <>
      <JumbotronTitleV13 title={'Informasi'} context={'INFORMASI'} />
      <div className="w-full bg-primary p-2">
        <div className="container-sm py-5 px-2! lg:px-0">
          <BreadcrumbBasic
            className={'text-white hover:bg-transparent!'}
            data={[
              { name: 'Beranda', link: '/' },
              { name: 'Informasi', link: '/information' },
              { name: 'Promosi' },
            ]}
          />
        </div>
      </div>

      <div className="py-5 bg-white dark:bg-gray-800">
        <div className="container-sm space-y-4">
          <SearchInput placeholder={'Cari Promosi'} className={'w-full bg-white rounded'} />
          <FilterChip
            name={'year'}
            data={
              year?.map((row) => ({
                value: row?.toString(),
                label: row?.toString(),
              })) ?? []
            }
          />
          <div className="w-full flex flex-col gap-5 mt-5 relative z-10">
            {promotion?.map((row, k) => (
              <Link
                href={`/information/promotion/${row?.slug}`}
                key={k}
                className={'flex flex-col lg:flex-row gap-5 p-6 bg-white rounded-lg border'}
              >
                <div
                  className={
                    'w-full lg:max-w-[216px] h-[162px] relative overflow-hidden rounded-lg'
                  }
                >
                  <Image
                    src={row?.gambar}
                    alt={'gambar'}
                    fill
                    className={'w-full h-full object-cover'}
                  />
                </div>
                <div>
                  <p className={'lg:text-2xl line-clamp-2 font-semibold'}>{row?.judul}</p>
                  <p className="text-sm font-semibold text-primary flex items-center gap-1.5 py-1.5 px-3 bg-primary/10 rounded-full w-fit">
                    <FaRegCalendarAlt />
                    {row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}
                  </p>
                  <div
                    className="flex flex-col gap-1.5 html-class line-clamp-3! text-sm! lg:text-base"
                    dangerouslySetInnerHTML={{ __html: row?.isi_promosi }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default InformationPromotionV13
