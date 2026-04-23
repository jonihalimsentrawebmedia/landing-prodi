'use client'

import { UseGetAgenda, UseGetAnnouncement } from '@/app/homepage/hooks'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useStateContext } from '@/contexts'

const AgendaAnnouncementV8 = () => {
  const { agenda, loading: load1 } = UseGetAgenda({ page: '1', limit: '3' })
  const { announcement, loading: load2 } = UseGetAnnouncement({ page: '1', limit: '3' })
  const [{ profile }] = useStateContext()

  const loading = load1 || load2

  if (loading) return <></>

  return (
    <div
      className="relative py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/img/agenda.jpg')" }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#1A365D_0%,transparent_100%)] opacity-90" />

      <div className="container-sm relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 justify-center">
          {announcement?.length > 0 && (
            <div className="w-full lg:w-1/2 bg-white border border-[#E8EEF5] rounded-2xl p-6 shadow-sm">
              <h2 className="text-primary lg:text-3xl font-semibold text-center mb-8 font-montserrat">
                Pengumuman Program Studi
              </h2>

              <div className="space-y-5">
                {announcement.map((row, k) => (
                  <Link
                    key={k}
                    href={`/information/announcements/${row.slug}`}
                    className="flex gap-5 group"
                  >
                    <div className="w-[107px] h-[107px] flex-shrink-0">
                      <Image
                        src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
                        alt={row.judul_pengumuman}
                        width={107}
                        height={107}
                        className="object-cover rounded-lg"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-primary font-semibold lg:text-2xl lg:leading-tight line-clamp-2 group-hover:text-primary transition">
                        {row.judul_pengumuman}
                      </p>
                      <p className="text-[#444444] text-sm mt-3 flex items-center gap-2">
                        <FaRegCalendarAlt />
                        {row.published_at ? format(new Date(row.published_at), 'dd-MM-yyyy') : '-'}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/information/announcements">
                  <Button className="w-full bg-primary hover:bg-primary text-white text-base rounded-lg">
                    Lihat Semua Pengumuman
                    <ChevronRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* ==================== AGENDA ==================== */}
          {agenda?.length > 0 && (
            <div className="w-full lg:w-1/2 bg-white border border-[#E8EEF5] rounded-2xl p-6 shadow-sm">
              <h2 className="text-primary lg:text-3xl font-semibold text-center mb-8 font-montserrat">
                Agenda Program Studi
              </h2>

              <div className="space-y-5">
                {agenda.map((row, k) => (
                  <Link
                    key={k}
                    href={`/information/agenda/${row.slug}`}
                    className="flex gap-5 group"
                  >
                    <div className="w-[107px] h-[107px] flex-shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={row.gambar || '/img/noimg.png'}
                        alt={row.judul}
                        width={107}
                        height={107}
                        className="object-cover rounded-lg"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-primary font-semibold lg:text-2xl leading-tight line-clamp-2 group-hover:text-primary transition">
                        {row.judul}
                      </p>
                      <p className="text-[#444444] text-sm mt-3 flex items-center gap-2">
                        <FaRegCalendarAlt />
                        {row.waktu_mulai ? format(new Date(row.waktu_mulai), 'dd-MM-yyyy') : '-'}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/information/agenda">
                  <Button className="w-full bg-primary hover:bg-primary text-white text-base rounded-lg">
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

export default AgendaAnnouncementV8
