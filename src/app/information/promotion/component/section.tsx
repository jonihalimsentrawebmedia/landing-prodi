'use client'

import { UseGetPromotion } from '@/app/information/hooks'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { id } from 'date-fns/locale/id'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { ArrowLeft } from 'lucide-react'
import { SearchInput } from '@/components/common/filter/search'

export const SectionPromotion = () => {
  const searchPrams = useSearchParams()
  const page = searchPrams.get('page') || '1'
  const limit = searchPrams.get('limit') || '8'
  const search = searchPrams.get('search') || ''

  const { promotion } = UseGetPromotion({
    page: page,
    limit: limit,
    search: search,
  })

  return (
    <>
      <div className="bg-primary">
        <div
          className={`w-full py-10`}
          style={{
            backgroundImage: "url('/img/background.png')",
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className={'lg:grid lg:grid-cols-4 gap-5 container flex flex-col'}>
            <div className={'col-span-4'}>
              <Link href={'/information'} className={'flex items-center gap-1.5 text-white'}>
                <ArrowLeft className={'size-4'} />
                Kembali
              </Link>
              <p className="mb-5 underline underline-offset-8 text-2xl font-semibold text-white">
                Promosi Program Studi
              </p>
              <SearchInput
                className={'bg-white w-full border border-gray-100 rounded-full pl-4'}
                placeholder={'Cari Agenda ...'}
              />
            </div>
            {promotion.map((item, k) => (
              <Link href={`/information/promotion/${item?.slug}`} key={k}>
                <div>
                  <Image
                    src={item?.gambar}
                    alt={'gambar'}
                    width={500}
                    height={250}
                    className={'object-cover w-full h-[250px]'}
                  />
                  <div className="w-full bg-white p-2.5 flex flex-col gap-1.5">
                    <p>{item?.judul}</p>
                    <p className="text-sm text-primary flex items-center gap-1.5">
                      <FaRegCalendarAlt />
                      {item?.published_at
                        ? format(item?.published_at, 'dd MMM yyyy', { locale: id })
                        : '-'}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
