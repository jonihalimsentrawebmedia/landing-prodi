'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { SearchInput } from '@/components/common/filter/search'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { useSearchParams } from 'next/navigation'
import { UseGetPromotion } from '@/app/information/hooks'
import Image from 'next/image'
import { format } from 'date-fns'
import { FaRegCalendarAlt } from 'react-icons/fa'
import Link from 'next/link'
import { UseGetPromotionYear } from '@/app/information/promotion/hooks'
import { FilterChip } from '@/components/thema-v5/component/common/filterChip'

const InformationPromotionV7 = () => {
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
      <ProfileLayout title={'Informasi'} context={'INFORMASI'}>
        <div className={'bg-primary w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
          <div className="container-sm">
            <BreadcrumbBasic
              className={'bg-primary text-white! hover:bg-primary!'}
              data={[
                { name: 'Beranda', link: '/' },
                { name: 'Informasi', link: '/information' },
                { name: 'Promosi' },
              ]}
            />
          </div>
        </div>
        <div className="lg:p-5 py-2.5 bg-footer dark:bg-gray-800">
          <div className="container-sm py-5 space-y-4">
            <SearchInput placeholder={'Cari Promosi'} className={'w-full bg-white rounded'} />
            <FilterChip
              className={'text-primary border-primary hover:bg-primary'}
              name={'year'}
              data={
                year?.map((row) => ({
                  label: row?.toString(),
                  value: row?.toString(),
                })) ?? []
              }
            />
            <div className="grid lg:grid-cols-3 gap-5">
              {promotion?.map((row, k) => (
                <Link
                  href={`/information/promotion/${row?.slug}`}
                  key={k}
                  className={'flex flex-col gap-4'}
                >
                  <div className={'w-full h-[308px] relative overflow-hidden rounded-lg'}>
                    <Image
                      src={row?.gambar}
                      alt={'gambar'}
                      fill
                      className={'w-full h-full object-cover'}
                    />
                  </div>
                  <p className={'text-2xl line-clamp-2 font-semibold'}>{row?.judul}</p>
                  <p className="text-xs font-semibold bg-primary/20 text-primary w-fit rounded-full px-3 py-1.5 text-footer flex items-center gap-1">
                    <FaRegCalendarAlt className={'size-4'} />
                    {row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}
                  </p>
                  <div
                    className="flex flex-col gap-1.5 html-class line-clamp-3!"
                    dangerouslySetInnerHTML={{ __html: row?.isi_promosi }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}

export default InformationPromotionV7
