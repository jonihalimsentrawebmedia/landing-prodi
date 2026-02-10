'use client'

import { UseGetAgenda, UseGetAnnouncement } from '@/app/homepage/hooks'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { useStateContext } from '@/contexts'
import { IoLocationSharp } from 'react-icons/io5'
import { FaCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { AgendaAnnouncementSkeleton } from './skeleton'
import Link from 'next/link'

export const AgendaAnnouncement = () => {
  const [{ profile }] = useStateContext()
  const { agenda, loading: load1 } = UseGetAgenda({
    page: '1',
    limit: '3',
  })
  const { announcement, loading: load2 } = UseGetAnnouncement({
    page: '1',
    limit: '3',
  })

  const loading = load1 || load2

  if (loading) return <AgendaAnnouncementSkeleton />

  return (
    <>
      <div className={'bg-primary w-full h-full py-10 mx-auto max-w-[1920px]'}>
        <div className="container flex flex-col lg:flex-row items-start gap-y-4">
          <div className="w-full lg:w-1/2 lg:pr-5 lg:border-r-[0.5px]">
            <Card className={'p-2 lg:p-4'}>
              <CardContent className={'p-2 lg:p-4'}>
                <p className="text-center font-semibold decoration-2 lg:text-xl underline underline-offset-8 text-primary decoration-yellow-600">
                  Agenda
                </p>

                <div className={'flex flex-col gap-2 mt-5'}>
                  {agenda?.map((row, k) => (
                    <Link
                      href={`/information/agenda/${row?.slug}`}
                      key={k}
                      className={'flex items-center gap-2'}
                    >
                      <Image
                        src={row?.gambar}
                        alt={'gambar'}
                        className={
                          'w-[100px] lg:w-[108px] lg:min-w-[108px] h-[104px] lg:h-[136px] object-cover'
                        }
                        width={108}
                        height={136}
                      />
                      <div className={'flex flex-col gap-1.5'}>
                        <p className="line-clamp-2 text-sm lg:text-base font-semibold">
                          {row?.judul}
                        </p>
                        <p
                          className={'flex items-center gap-1.5 text-xs lg:text-base text-gray-500'}
                        >
                          <IoLocationSharp className={'text-primary size-4'} />
                          {row?.lokasi_kegiatan}
                        </p>
                        <p
                          className={'text-gray-500 flex items-center gap-1.5 text-xs lg:text-base'}
                        >
                          <FaCalendarAlt className={'text-primary size-4'} />
                          {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : '-'}
                        </p>
                      </div>
                    </Link>
                  ))}

                  <Link
                    href={'/information/agenda'}
                    className={
                      'flex items-center justify-center rounded-full border-primary border w-fit p-1.5 px-3 text-sm mx-auto'
                    }
                  >
                    Lihat Agenda Lainnya
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-5 lg:border-l-[0.5px]">
            <Card className={'p-2 lg:p-4'}>
              <CardContent className={'p-2 lg:p-4'}>
                <p className="text-center font-semibold decoration-2 lg:text-xl underline underline-offset-8 text-primary decoration-yellow-600">
                  Pengumuman
                </p>

                <div className={'flex flex-col gap-2 mt-5'}>
                  {announcement?.map((row, k) => (
                    <Link
                      href={`/information/announcements/${row?.slug}`}
                      key={k}
                      className={'flex items-center gap-2'}
                    >
                      <Image
                        src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
                        alt={'gambar'}
                        className={'size-18 lg:w-[136px] lg:size-[136px] object-cover'}
                        width={108}
                        height={136}
                      />
                      <div className="flex flex-col gap-1.5">
                        <p className="font-semibold text-sm lg:text-base line-clamp-2">
                          {row?.judul_pengumuman}
                        </p>
                        <p
                          className={'flex items-center gap-1.5 text-gray-500 text-xs lg:text-base'}
                        >
                          <FaCalendarAlt className={'text-primary size-4'} />
                          {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : '-'}
                        </p>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href={'/information/announcements'}
                    className={
                      'flex items-center justify-center rounded-full border-primary border w-fit p-1.5 px-3 text-sm mx-auto'
                    }
                  >
                    Lihat Pengumuman Lainnya
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
