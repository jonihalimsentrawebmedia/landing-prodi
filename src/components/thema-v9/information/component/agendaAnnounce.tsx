'use client'

import { UseGetAgenda, UseGetAnnouncement } from '@/app/homepage/hooks'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useStateContext } from '@/contexts'

const AgendaAnnouncementInfoV9 = () => {
  const { agenda, loading: load1 } = UseGetAgenda({ page: '1', limit: '3' })
  const { announcement, loading: load2 } = UseGetAnnouncement({ page: '1', limit: '3' })
  const [{ profile }] = useStateContext()

  const loading = load1 || load2

  if (loading) return <></>

  return (
    <div className="relative py-12 lg:py-20 bg-primary">
      <div className="container-sm relative z-10 px-5 lg:px-0 py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-stretch">
          {announcement?.length > 0 && (
            <div className="w-full lg:w-1/2 bg-white border border-[#E7F3F1] rounded-[40px] p-5 lg:p-8 shadow-sm flex flex-col">
              <h2 className="text-primary w-fit text-2xl lg:text-3xl font-semibold text-center mb-8 border-b-4 border-[#CDA327] pb-2 font-montserrat">
                Pengumuman Program Studi
              </h2>

              <div className="flex flex-col gap-4">
                {announcement.map((row, k) => (
                  <Link
                    key={k}
                    href={`/information/announcements/${row.slug}`}
                    className="flex gap-4 lg:gap-5 group border border-[#C8C8C8] rounded-[30px] p-4 lg:p-6 hover:shadow-md transition"
                  >
                    <div className="w-[90px] h-[90px] lg:w-[107px] lg:h-[107px] flex-shrink-0">
                      <Image
                        src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
                        alt={row.judul_pengumuman}
                        width={107}
                        height={107}
                        className="object-cover rounded-2xl w-full h-full"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-primary font-semibold text-lg lg:text-[25px] leading-tight line-clamp-2 group-hover:text-primary transition">
                        {row.judul_pengumuman}
                      </p>
                      <p className="text-[#444444] text-sm mt-3 flex items-center gap-2">
                        <FaRegCalendarAlt className="size-4" />
                        {row.published_at ? format(new Date(row.published_at), 'dd-MM-yyyy') : '-'}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-4 lg:mt-5">
                <Link href="/information/announcements" className="block">
                  <Button className="w-full hovetext-primary text-white text-base rounded">
                    Lihat Semua Pengumuman
                    <ChevronRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* ==================== AGENDA ==================== */}
          {agenda?.length > 0 && (
            <div className="w-full lg:w-1/2 bg-white border border-[#E7F3F1] rounded-[40px] p-5 lg:p-8 shadow-sm flex flex-col">
              <h2 className="text-primary w-fit text-2xl lg:text-3xl font-semibold text-center mb-8 border-b-4 border-[#CDA327] pb-2 font-montserrat">
                Agenda Program Studi
              </h2>

              <div className="space-y-5 flex-1">
                {agenda.map((row, k) => (
                  <Link
                    key={k}
                    href={`/information/agenda/${row.slug}`}
                    className="flex gap-4 lg:gap-5 group border border-[#C8C8C8] rounded-[30px] p-4 lg:p-6 hover:shadow-md transition"
                  >
                    <div className="w-[90px] h-[90px] lg:w-[107px] lg:h-[107px] flex-shrink-0">
                      <Image
                        src={row.gambar || '/img/noimg.png'}
                        alt={row.judul}
                        width={107}
                        height={107}
                        className="object-cover rounded-2xl w-full h-full"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-primary font-semibold text-lg lg:text-[25px] leading-tight line-clamp-2 group-hover:text-primary transition">
                        {row.judul}
                      </p>
                      <p className="text-[#444444] text-sm mt-3 flex items-center gap-2">
                        <FaRegCalendarAlt className="size-4" />
                        {row.waktu_mulai ? format(new Date(row.waktu_mulai), 'dd-MM-yyyy') : '-'}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-4 lg:mt-5">
                <Link href="/information/agenda" className="block">
                  <Button className="w-full bg-primary hover:bg-primary text-white text-base rounded">
                    Lihat Semua Agenda
                    <ChevronRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AgendaAnnouncementInfoV9
