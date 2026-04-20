'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { UseGetNews } from '@/app/homepage/hooks'
import { UseGetNewsCategory } from '@/app/information/news/hooks'
import { useSearchParams } from 'next/navigation'
import { FilterChip } from '@/components/thema-v5/component/common/filterChip'
import { SearchInput } from '@/components/common/filter/search'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'

const NewsInformationV5 = () => {
  const { newsCategory, loading: load3 } = UseGetNewsCategory()

  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const category = searchParams.get('category')

  const { news, loading: load2 } = UseGetNews({
    page: '1',
    limit: '10',
    search: search ?? '',
    category: category ?? '',
  })

  const loading = load2 || load3
  if (loading) return <></>

  return (
    <>
      <ProfileLayout title={'Informasi'} context={'INFORMASI'}>
        <div className={'bg-footer w-full max-w-[1920px] mx-auto p-4'}>
          <div className="container-sm">
            <BreadcrumbBasic
              data={[
                { name: 'Beranda', link: '/' },
                { name: 'Informasi', link: '/information' },
                { name: 'Berita' },
              ]}
            />
          </div>
        </div>
        <div className="lg:p-5 bg-primary dark:bg-gray-800">
          <div className="container-sm py-5 space-y-4">
            <SearchInput placeholder={'Cari Berita'} className={'w-full bg-white rounded'} />
            <FilterChip
              name={'category'}
              data={
                newsCategory?.map((row) => ({
                  label: row?.nama_kategori,
                  value: row?.slug,
                })) ?? []
              }
            />

            <div className="grid lg:grid-cols-3 gap-5">
              {news?.map((row, k) => (
                <Link
                  href={`/information/news/${row?.slug}`}
                  className="w-full space-y-1.5"
                  key={k}
                >
                  <Image
                    src={row?.gambar ?? '/img/noimg.png'}
                    alt={'gamabr'}
                    width={650}
                    height={315}
                    className={'w-full h-[315px] object-cover rounded-md'}
                  />
                  <p className="text-footer text-sm">{row?.nama_kategori_berita}</p>
                  <p className={'line-clamp-2 text-2xl font-semibold'}>{row?.judul}</p>
                  <p>{row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}</p>
                  <div
                    className={'html-class flex flex-col ap1 gap-1.5 line-clamp-3!'}
                    dangerouslySetInnerHTML={{ __html: row?.isi_berita ?? '' }}
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

export default NewsInformationV5
