'use client'

import { format } from 'date-fns'
import { IoLocationSharp } from 'react-icons/io5'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AgendaInformationSkeleton } from './skeleton'
import { UseGetAgenda } from '@/app/homepage/hooks'
import { TitleUnderline } from '@/components/thema-v2/component/common/titleUnderLine'

export const AgendaInformation = () => {
  const { agenda, loading } = UseGetAgenda({
    page: '1',
    limit: '4',
  })

  if (loading) return <AgendaInformationSkeleton />

  return (
    <>
      <div className={'py-10 bg-[#F7F7F7] dark:bg-primary/40 w-full mx-auto max-w-[1920px]'}>
        <div className="container">
          <TitleUnderline text={'Agenda Program Studi'} className={'text-center'} />

          <div className="grid lg:grid-cols-4 mt-6 gap-5">
            {agenda.map((row, index) => (
              <Link
                href={`/information/agenda/${row?.slug}`}
                key={index}
                className={
                  'flex items-center gap-2 bg-white dark:bg-primary shadow p-2 rounded border-l-4 border-l-primary rounded-l-none'
                }
              >
                <div
                  className={
                    'text-center w-18 pr-1.5 border-r border-r-primary dark:border-r-white'
                  }
                >
                  <p className={'font-semibold text-xl text-primary dark:text-white'}>
                    {row?.waktu_mulai ? format(row?.waktu_mulai, 'dd') : ''}
                  </p>
                  <p className={'text-primary dark:text-white'}>
                    {row?.waktu_mulai ? format(row?.waktu_mulai, 'MMM yy') : ''}
                  </p>
                </div>
                <div className={'flex flex-col gap-1.5 w-full'}>
                  <p className={'line-clamp-2'}>{row?.judul}</p>
                  <p className={'flex items-center gap-1.5 text-sm'}>
                    <IoLocationSharp className={'size-4 text-primary'} />
                    {row?.lokasi_kegiatan}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-end mt-5">
            <Link
              href={'/information/agenda'}
              className={'flex items-center gap-1 font-semibold text-primary dark:text-white'}
            >
              Lihat Agenda Lainnya
              <ArrowRight className={'size-4'} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
