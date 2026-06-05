'use client'

import { UseGetAgenda, UseGetAnnouncement } from '@/app/homepage/hooks'
import { useStateContext } from '@/contexts'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { format } from 'date-fns'

const AgendaAnnouncementHomeV15 = () => {
  const { announcement, loading: load1 } = UseGetAnnouncement({ page: '1', limit: '3' })
  const { agenda, loading: load2 } = UseGetAgenda({ page: '1', limit: '3' })
  const [{ profile }] = useStateContext()

  const loading = load1 || load2

  if (loading) return <></>

  return (
    <section
      className="bg-cover bg-center py-[60px] px-5 lg:px-20 relative"
      style={{ backgroundImage: "url('/img/agenda.jpg')" }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-white to-white/50" />

      <div className="container-sm py-10 relative z-20">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-6">
          <div className="w-full lg:w-[628px] bg-primary border border-[#E9F5F2] rounded-2xl p-6 flex flex-col items-center gap-4">
            <div className="w-full flex items-center gap-2 px-4 border-l-4 border-[#CDA327]">
              <h2 className="text-white text-[31px] leading-[46px]">Pengumuman Program Studi</h2>
            </div>

            <div className="w-full flex flex-col border border-[#C8C8C8] rounded-2xl overflow-hidden">
              {announcement?.map((row, k) => (
                <div
                  key={k}
                  className={`flex flex-row items-start gap-4 p-6 bg-white ${k < (announcement?.length ?? 0) - 1 ? 'border-b border-[#C8C8C8]' : ''}`}
                >
                  <Image
                    src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
                    alt="logo"
                    width={107}
                    height={107}
                    className="size-[107px] h-[107px] shrink-0"
                  />
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="text-[#444444] text-[25px] leading-[38px] line-clamp-2">
                      {row?.judul_pengumuman}
                    </h3>
                    <p className="text-[#444444] text-base leading-6">
                      {row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/information/announcements" className="w-full">
              <Button className="w-full h-10 bg-white border border-[#1F7A63] rounded-lg text-[#1F7A63] font-semibold text-base hover:bg-gray-100">
                Lihat Pengumuman
                <ChevronRight className="size-5" />
              </Button>
            </Link>
          </div>

          {/* Agenda */}
          <div className="w-full lg:w-[628px] bg-primary border border-[#E9F5F2] rounded-2xl p-6 flex flex-col items-center gap-4">
            <div className="w-full flex items-center gap-2 px-4 border-l-4 border-[#CDA327]">
              <h2 className="text-white text-[31px] leading-[46px]">Agenda Program Studi</h2>
            </div>

            <div className="w-full flex flex-col border border-[#C8C8C8] rounded-2xl overflow-hidden">
              {agenda?.map((row, k) => (
                <div
                  key={k}
                  className={`flex flex-row items-start gap-4 p-6 bg-white ${k < (agenda?.length ?? 0) - 1 ? 'border-b border-[#C8C8C8]' : ''}`}
                >
                  <Image
                    src={row?.gambar ?? '/img/noimg.png'}
                    alt={row?.judul}
                    width={107}
                    height={107}
                    className="size-[107px] h-[107px] shrink-0 object-cover rounded-lg"
                  />
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="text-[#444444] text-[25px] leading-[38px] line-clamp-2">
                      {row?.judul}
                    </h3>
                    <p className="text-[#444444] text-base leading-6">
                      {row?.waktu_mulai ? format(row?.waktu_mulai, 'dd-MM-yyyy') : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/information/agenda" className="w-full">
              <Button className="w-full h-10 bg-white border border-[#1F7A63] rounded-lg text-[#1F7A63] font-semibold text-base hover:bg-gray-100">
                Lihat Agenda
                <ChevronRight className="size-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgendaAnnouncementHomeV15
