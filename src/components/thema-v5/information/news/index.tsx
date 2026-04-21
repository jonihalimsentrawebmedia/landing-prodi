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
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaCircleChevronRight } from 'react-icons/fa6'

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
                <Link href={`/information/news/${row?.slug}`} key={k}>
                  <div className={'shadow rounded-lg border h-full group'}>
                    <div className="w-full h-[310px] overflow-hidden rounded-t-lg">
                      <Image
                        src={row?.gambar}
                        alt={row?.judul}
                        className={
                          'w-full h-[310px] object-cover rounded-t-lg group-hover:scale-110 transition-all duration-300'
                        }
                        width={500}
                        height={310}
                      />
                    </div>
                    <div className={'p-4 space-y-2.5 relative'}>
                      <div className="flex items-center gap-x-2">
                        <p className="text-sm py-1.5 px-3 rounded-full font-semibold bg-footer/10 text-footer flex items-center gap-1">
                          <FaRegCalendarAlt />
                          {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM- yyyy') : ''}
                        </p>
                        <p className="text-sm py-1.5 px-3 rounded-full font-semibold bg-footer/10 text-footer flex items-center gap-1">
                          {row?.nama_kategori_berita}
                        </p>
                      </div>
                      <p className="font-semibold group-hover:text-footer line-clamp-2">
                        {row?.judul}
                      </p>
                      <button className={'text-footer flex items-center gap-1 text-sm'}>
                        <FaCircleChevronRight className={'size-4'} />
                        Baca Lebih Lanjut
                      </button>
                    </div>
                  </div>
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
