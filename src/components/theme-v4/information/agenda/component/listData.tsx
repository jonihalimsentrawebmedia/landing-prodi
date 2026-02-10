'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SearchInput } from '@/components/common/filter/search'
import { UseGetAgendaYear } from '@/app/information/agenda/hooks'
import { UseGetAgenda } from '@/app/homepage/hooks'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { id } from 'date-fns/locale/id'
import { FaLocationDot } from 'react-icons/fa6'
import { ChipYear } from '@/components/thema-v2/information/announcement/components/chipYear'
import { useSearchParams } from 'next/navigation'
import { AgendaSectionTheme4Skeleton } from '@/components/theme-v4/information/agenda/component/skelenton'

export const AgendaSectionTheme4 = () => {
  const searchparams = useSearchParams()
  const search = searchparams.get('search')
  const { year, loading: load1 } = UseGetAgendaYear()
  const { agenda, loading: load2 } = UseGetAgenda({
    search: search ?? '',
    page: '1',
    limit: '10',
  })

  const loading = load1 || load2

  if (loading) return <AgendaSectionTheme4Skeleton />

  return (
    <>
      <div className={'dark:bg-primary/50'}>
        <div
          className={`w-full py-5 lg:py-10`}
          style={{
            backgroundImage: "url('/img/grenbg.png')",
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className={'lg:grid lg:grid-cols-4 gap-y-5 lg:gap-5 container flex flex-col'}>
            <div className={'col-span-4 flex flex-col gap-3'}>
              <Link
                href={'/information'}
                className={'flex items-center gap-1.5 text-primary dark:text-white'}
              >
                <ArrowLeft className={'size-4'} />
                Kembali
              </Link>
              <p className="mb-5 mt-2 lg:mt-0 underline underline-offset-8 lg:text-2xl font-semibold primary">
                Agenda Program Studi
              </p>
              <SearchInput
                className={'bg-white w-full border border-primary rounded-full pl-4'}
                placeholder={'Cari Agenda ...'}
              />

              <div className="mt-4">
                <ChipYear data={year} />
              </div>
            </div>

            {agenda?.map((row, l) => (
              <Link href={`/information/agenda/${row?.slug}`} key={l}>
                <div className={'border'}>
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
                      <FaLocationDot className={'text-primary size-4 dark:text-white'} />
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
