'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SearchInput } from '@/components/common/filter/search'
import { UseGetAgendaYear } from '@/app/information/agenda/hooks'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { id } from 'date-fns/locale/id'
import { FaLocationDot } from 'react-icons/fa6'
import { useSearchParams } from 'next/navigation'
import { AgendaSkeletonSection } from './skeleton'
import { UseGetAgenda } from '@/app/homepage/hooks'
import { ChipYear } from '@/components/thema-v2/information/announcement/components/chipYear'

export const AgendaSection = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  const { year, loading: load1 } = UseGetAgendaYear()
  const { agenda, loading: load2 } = UseGetAgenda({
    page: '1',
    limit: '10',
    search: search ?? '',
  })

  const loading = load1 || load2

  if (loading) return <AgendaSkeletonSection />

  return (
    <>
      <div className={'py-5'}>
        <div className={'lg:grid lg:grid-cols-4 gap-y-5 lg:gap-5 container flex flex-col'}>
          <div className={'col-span-4'}>
            <Link
              href={'/information'}
              className={'flex w-fit items-center gap-1.5 text-primary dark:text-white'}
            >
              <ArrowLeft className={'size-4'} />
              Kembali
            </Link>
            <p className="mb-5 my-2 lg:mt-3 underline underline-offset-8 lg:text-2xl font-semibold text-primary dark:text-white">
              Agenda Program Studi
            </p>
            <SearchInput
              className={'bg-white w-full border rounded-full pl-4 mb-4 border-primary'}
              placeholder={'Cari Agenda ...'}
            />

            <ChipYear data={year} />
          </div>

          {agenda?.map((row, l) => (
            <Link href={`/information/agenda/${row?.slug}`} key={l}>
              <div className={'border rounded'}>
                <Image
                  className={'object-cover w-full h-[250px]'}
                  src={row?.gambar}
                  alt={'gambar'}
                  width={500}
                  height={250}
                />
                <div className={'px-2.5 bg-white flex flex-col gap-2 p-1.5 dark:bg-primary'}>
                  <p className={'font-semibold line-clamp-2'}>{row?.judul}</p>
                  <p className={'flex items-center gap-1.5 text-sm'}>
                    <FaLocationDot className={'dark:text-white text-primary size-4'} />
                    {row?.lokasi_kegiatan}
                  </p>
                  <p className={'flex items-center gap-1.5 text-sm'}>
                    <FaRegCalendarAlt className={'dark:text-white text-primary size-4'} />
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
    </>
  )
}
