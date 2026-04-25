'use client'

import { useSearchParams } from 'next/navigation'
import { UseGetPromotion } from '@/app/information/hooks'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { SearchInput } from '@/components/common/filter/search'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import JumbotronTitleV10 from '@/components/thema-v10/component/common/jumbotronTitle'

const InformationPromotionV10 = () => {
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
      <JumbotronTitleV10 title={'Informasi'} context={'INFORMASI'} />
      <div className="container-sm py-5">
        <div className="bg-blue-50 p-1.5 px-2 rounded">
          <BreadcrumbBasic
            className={'text-primary hover:bg-transparent!'}
            data={[
              { name: 'Beranda', link: '/' },
              { name: 'Informasi', link: '/information' },
              { name: 'Prmosi' },
            ]}
          />
        </div>
      </div>

      <div className="py-5 bg-white dark:bg-gray-800">
        <div className="container-sm space-y-4">
          <SearchInput placeholder={'Cari Promosi'} className={'w-full bg-white rounded'} />
          <div className="grid lg:grid-cols-3 gap-5 mt-5">
            {promotion?.map((row, k) => (
              <Link
                href={`/information/promotion/${row?.slug}`}
                key={k}
                className={'flex flex-col gap-4 p-5 bg-white rounded-2xl border'}
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
    </>
  )
}

export default InformationPromotionV10
