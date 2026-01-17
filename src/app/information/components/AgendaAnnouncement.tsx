'use client'

import { UseGetAgenda, UseGetAnnouncement } from '@/app/homepage/hooks'
import { format } from 'date-fns'
import { FaRegCalendarAlt } from 'react-icons/fa'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AgendaAnnouncementSkeleton } from '@/app/homepage/components/skeleton'

export const AgendaAnnouncementSection = () => {
  const { announcement, loading: load2 } = UseGetAnnouncement()
  const { agenda, loading: load3 } = UseGetAgenda()

  const loading = load2 || load3
  const ShowAnnouncement = announcement?.slice(0, 3)
  const ShowAgenda = agenda?.slice(0, 3)

  if (loading) return <AgendaAnnouncementSkeleton />

  return (
    <>
      <div className={'w-full max-w-[1920px]'}>
        <div className="h-full w-full bg-primary pb-5">
          <div className="container pt-4 flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 items-start gap-x-8">
            <div className="lg:w-1/2 w-full">
              <p className="text-center underline underline-offset-8 decoration-yellow-500 font-semibold text-3xl text-white">
                Pengumuman
              </p>
              <div className={'flex flex-col gap-y-4 mt-8'}>
                {ShowAnnouncement?.map((row, k) => (
                  <Link key={k} href={`/information/announcements/${row?.slug}`}>
                    <div className={'border p-2.5 rounded'}>
                      <p className="text-white font-semibold line-clamp-2">
                        {row?.judul_pengumuman}
                      </p>
                      <p className={'text-white text-xs mt-1.5 flex items-center gap-1.5'}>
                        <FaRegCalendarAlt className={'size-4'} />
                        {row?.published_at ? format(row?.published_at, 'dd MMMM yyyy') : '-'}
                      </p>
                    </div>
                  </Link>
                ))}
                <Link
                  href={'/information/announcements'}
                  className={'text-white flex items-center gap-1.5 justify-center'}
                >
                  Lihat Semua <ArrowRight />
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <p className="text-center underline underline-offset-8 decoration-yellow-500 font-semibold text-3xl text-white">
                Agenda
              </p>
              <div className={'flex flex-col gap-y-4 mt-8'}>
                {ShowAgenda?.map((row, k) => (
                  <div key={k} className={'flex items-center gap-2'}>
                    <div className={'border p-3 px-4 rounded text-center'}>
                      <p className={'text-white text-2xl font-semibold'}>
                        {row?.published_at ? format(row?.published_at, 'dd') : '-'}
                      </p>
                      <p className={'text-white text-2xl font-semibold'}>
                        {row?.published_at ? format(row?.published_at, 'MMM') : '-'}
                      </p>
                    </div>
                    <Link href={`/information/agenda/${row?.slug}`}>
                      <p className="text-white font-semibold">{row?.judul}</p>
                    </Link>
                  </div>
                ))}
                <Link
                  href={'/information/agenda'}
                  className={'text-white flex items-center gap-1.5 justify-center'}
                >
                  Lihat Semua <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
