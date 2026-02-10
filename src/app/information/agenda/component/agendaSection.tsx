'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SearchInput } from '@/components/common/filter/search'
import { SkeletonCategoryNews } from '@/app/information/news/components/skeleton'
import { UseGetAgendaYear } from '@/app/information/agenda/hooks'
import { UseGetAgenda } from '@/app/homepage/hooks'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { id } from 'date-fns/locale/id'
import { FaLocationDot } from 'react-icons/fa6'
import { useRouter, useSearchParams } from 'next/navigation'
import { clsx } from 'clsx'

export const AgendaSection = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const tahun = searchParams.get('tahun') || ''

  const { year, loading: load1 } = UseGetAgendaYear()
  const { agenda } = UseGetAgenda({
    page: '1',
    limit: '10',
    search: search || '',
    year: tahun || '',
  })
  
  const router = useRouter()
  
  const HandleSelectYear = (slug: string) => {
    const ParamsSearch = new URLSearchParams(searchParams)
    ParamsSearch.set('tahun', slug)
    if (slug === '') {
      ParamsSearch.delete('tahun')
    }
    router.push(`?${ParamsSearch.toString()}`, { scroll: false })
  }

  return (
    <>
      <div className="bg-primary dark:bg-primary/40">
        <div
          className={`w-full py-5 lg:py-10`}
          style={{
            backgroundImage: "url('/img/background.png')",
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className={'lg:grid lg:grid-cols-4 gap-y-5 lg:gap-5 container flex flex-col'}>
            <div className={'col-span-4'}>
              <Link href={'/information'} className={'flex items-center gap-1.5 text-white'}>
                <ArrowLeft className={'size-4'} />
                Kembali
              </Link>
              <p className="mb-5 mt-2 lg:mt-0 underline underline-offset-8 lg:text-2xl font-semibold text-white">
                Agenda Program Studi
              </p>
              <SearchInput
                className={'bg-white w-full border border-gray-100 rounded-full pl-4'}
                placeholder={'Cari Agenda ...'}
              />

              {load1 ? (
                <SkeletonCategoryNews />
              ) : (
                <ul className={'flex flex-nowrap gap-5 overflow-x-auto mt-5'}>
                  <li
                    onClick={() => HandleSelectYear('')}
                    className={clsx(
                      'bg-white text-primary p-1.5 px-4 cursor-pointer rounded',
                      !tahun && '!bg-primary text-white border border-white'
                    )}
                  >
                    Semua
                  </li>
                  {year?.map((item, k) => (
                    <li
                      onClick={() => {
                        HandleSelectYear(item.toString())
                      }}
                      className={clsx(
                        'bg-white text-primary p-1.5 px-4 cursor-pointer rounded',
                        tahun === item.toString() && '!bg-primary text-white border border-white'
                      )}
                      key={k}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {agenda?.map((row, l) => (
              <Link href={`/information/agenda/${row?.slug}`} key={l}>
                <div>
                  <Image
                    className={'object-cover w-full h-[250px]'}
                    src={row?.gambar}
                    alt={'gambar'}
                    width={500}
                    height={250}
                  />
                  <div className={'px-2.5 bg-white dark:bg-primary flex flex-col gap-2 p-1.5'}>
                    <p className={'font-semibold line-clamp-2'}>{row?.judul}</p>
                    <p className={'flex items-center gap-1.5 text-sm'}>
                      <FaLocationDot className={'text-primary dark:text-white size-4'} />
                      {row?.lokasi_kegiatan}
                    </p>
                    <p className={'flex items-center gap-1.5 text-sm'}>
                      <FaRegCalendarAlt className={'text-primary size-4 dark:text-white'} />
                      {row?.published_at
                        ? format(row?.published_at, 'dd MMM yyyy', { locale: id })
                        : ''}
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
