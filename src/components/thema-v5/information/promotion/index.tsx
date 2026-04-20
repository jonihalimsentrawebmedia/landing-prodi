'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { SearchInput } from '@/components/common/filter/search'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { useSearchParams } from 'next/navigation'
import { UseGetPromotion } from '@/app/information/hooks'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'

const InformationPromotionV5 = () => {
  const searchPrams = useSearchParams()
  const page = searchPrams.get('page') || '1'
  const limit = searchPrams.get('limit') || '8'
  const search = searchPrams.get('search') || ''

  const { promotion, loading } = UseGetPromotion({
    page: page,
    limit: limit,
    search: search,
  })

  if (loading) return <></>

  return (
    <>
      <ProfileLayout title={'Informasi'} context={'INFORMASI'}>
        <div className={'bg-footer w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
          <div className="container-sm">
            <BreadcrumbBasic
              data={[
                { name: 'Beranda', link: '/' },
                { name: 'Informasi', link: '/information' },
                { name: 'Promosi' },
              ]}
            />
          </div>
        </div>
        <div className="lg:p-5 py-2.5 bg-primary dark:bg-gray-800">
          <div className="container-sm py-5 space-y-4">
            <SearchInput placeholder={'Cari Promosi'} className={'w-full bg-white rounded'} />
            <div className="grid lg:grid-cols-3 gap-5">
              {promotion?.map((row, k) => (
                <Link
                  href={`/information/promotion/${row?.slug}`}
                  className={'w-full flex flex-col gap-4'}
                  key={k}
                >
                  <Image
                    src={row?.gambar ?? '/img/noimg.png'}
                    alt={'gamabr'}
                    width={650}
                    height={315}
                    className={'w-full h-[315px] object-cover rounded-md'}
                  />
                  <p className={'line-clamp-2 text-2xl font-semibold'}>{row?.judul}</p>
                  <p>{row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}</p>
                  <div
                    className={'html-class flex flex-col ap1 gap-1.5 line-clamp-3!'}
                    dangerouslySetInnerHTML={{ __html: row?.isi_promosi ?? '' }}
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

export default InformationPromotionV5
