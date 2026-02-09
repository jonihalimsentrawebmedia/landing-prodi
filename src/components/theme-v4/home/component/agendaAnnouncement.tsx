'use client'

import { UseGetAgenda, UseGetAnnouncement } from '@/app/homepage/hooks'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { useStateContext } from '@/contexts'
import { IoLocationSharp } from 'react-icons/io5'
import { FaCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { AgendaAnnouncementSkeleton } from './skeleton'

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
        <div className="container flex items-start">
          <div className="w-1/2 pr-5 border-r-[0.5px]">
            <Card>
              <CardContent>
                <p className="text-center text-xl underline underline-offset-8 text-primary decoration-yellow-600">
                  Agenda
                </p>

                <div className={'flex flex-col gap-2 mt-5'}>
                  {agenda?.map((row, k) => (
                    <div key={k} className={'flex items-center gap-2'}>
                      <Image
                        src={row?.gambar}
                        alt={'gambar'}
                        className={'w-[108px] min-w-[108px] h-[136px] object-cover'}
                        width={108}
                        height={136}
                      />
                      <div className={'flex flex-col gap-1.5'}>
                        <p className="line-clamp-2 font-semibold">{row?.judul}</p>
                        <p className={'flex items-center gap-1.5 text-gray-500'}>
                          <IoLocationSharp className={'text-primary size-4'} />
                          {row?.lokasi_kegiatan}
                        </p>
                        <p className={'text-gray-500 flex items-center gap-1.5'}>
                          <FaCalendarAlt className={'text-primary size-4'} />
                          {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : '-'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="w-1/2 pl-5 border-l-[0.5px]">
            <Card>
              <CardContent>
                <p className="text-center text-xl underline underline-offset-8 text-primary decoration-yellow-600">
                  Pengumuman
                </p>

                <div className={'flex flex-col gap-2 mt-5'}>
                  {announcement?.map((row, k) => (
                    <div key={k} className={'flex items-center gap-2'}>
                      <Image
                        src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
                        alt={'gambar'}
                        className={'w-[136px] size-[136px] object-cover'}
                        width={108}
                        height={136}
                      />
                      <div className="flex flex-col gap-1.5">
                        <p className="font-semibold">{row?.judul_pengumuman}</p>
                        <p className={'flex items-center gap-1.5 text-gray-500'}>
                          <FaCalendarAlt className={'text-primary size-4'} />
                          {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : '-'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
