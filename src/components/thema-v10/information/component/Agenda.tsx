'use client'

import { UseGetAgenda, UseGetAnnouncement } from '@/app/homepage/hooks'
import { useStateContext } from '@/contexts'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const InformationAgendaAnnouncementV10 = () => {
  const { agenda, loading: load1 } = UseGetAgenda({ page: '1', limit: '3' })
  const { announcement, loading: load2 } = UseGetAnnouncement({ page: '1', limit: '3' })

  const [{ profile }] = useStateContext()

  const loading = load1 || load2

  if (loading) return <></>

  return (
    <div className={'bg-primary py-20 px-4'}>
      <div className="container-sm lg:rounded-3xl h-fit relative bg-white">
        <div className="w-full h-fit relative flex items-center justify-center rounded-3xl">
          <div className={'relative py-4 lg:p-10 z-20 flex flex-col items-center'}>
            <h2 className="lg:text-3xl font-semibold border-b-4 w-fit border-[#CDA327] text-primary pb-4 inline-block text-center">
              Pengumuman Program Studi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {announcement.map((row, k) => (
                <Link
                  key={k}
                  href={`/information/announcements/${row.slug}`}
                  className="bg-white rounded lg:rounded-[30px] p-2 lg:p-5 hover:shadow-xl transition group border"
                >
                  <div className="flex gap-4">
                    <div className="lg:w-[107px] lg:h-[107px] w-[60px] h-[60px] flex-shrink-0 rounded-2xl overflow-hidden">
                      <Image
                        src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
                        alt={row.judul_pengumuman}
                        width={107}
                        height={107}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-[#1E3A8A] font-semibold text-sm lg:text-lg leading-tight line-clamp-2 group-hover:text-[#0F6D5B]">
                        {row.judul_pengumuman}
                      </p>
                      <p className="text-[#444444] text-sm mt-3 flex items-center gap-2">
                        <FaRegCalendarAlt />
                        {row.published_at ? format(new Date(row.published_at), 'dd-MM-yyyy') : '-'}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <Link href="/information/announcements" className={'w-full mt-6 relative z-20'}>
              <Button className="w-full bg-primary text-white">
                Lihat Pengumuman <ChevronRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-sm bg-white lg:rounded-3xl h-fit relative mt-5 lg:mt-12">
        <div className="w-full h-fit relative flex items-center justify-center rounded-3xl">
          <div className={'relative py-4 lg:p-10 z-20 flex flex-col items-center'}>
            <h2 className="lg:text-3xl font-semibold border-b-4 w-fit border-[#CDA327] text-primary pb-4 inline-block text-center">
              Agenda Program Studi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {agenda.map((row, k) => (
                <Link
                  key={k}
                  href={`/information/announcements/${row.slug}`}
                  className="bg-white rounded lg:rounded-[30px] p-2 lg:p-5 hover:shadow-xl transition group border"
                >
                  <div className="flex gap-4">
                    <div className="lg:w-[107px] lg:h-[107px] w-[60px] h-[60px] flex-shrink-0 lg:rounded-2xl overflow-hidden">
                      <Image
                        src={row?.gambar ?? '/img/noimg.png'}
                        alt={row.judul}
                        width={107}
                        height={107}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-[#1E3A8A] font-semibold text-sm lg:text-lg leading-tight line-clamp-2 group-hover:text-[#0F6D5B]">
                        {row.judul}
                      </p>
                      <p className="text-[#444444] text-sm mt-3 flex items-center gap-2">
                        <FaRegCalendarAlt />
                        {row.waktu_mulai ? format(new Date(row.waktu_mulai), 'dd-MM-yyyy') : '-'}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <Link href="/information/agenda" className={'w-full mt-6 relative z-20'}>
              <Button className="w-full bg-primary text-white">
                Lihat Agenda <ChevronRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformationAgendaAnnouncementV10
