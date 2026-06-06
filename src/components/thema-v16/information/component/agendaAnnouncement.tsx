'use client'

import { UseGetAgenda, UseGetAnnouncement } from '@/app/homepage/hooks'
import { useStateContext } from '@/contexts'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'

const AgendaAnnouncementInformationV16 = () => {
  const { agenda, loading: load1 } = UseGetAgenda({ page: '1', limit: '3' })
  const { announcement, loading: load2 } = UseGetAnnouncement({ page: '1', limit: '3' })
  const [{ profile }] = useStateContext()

  const loading = load1 || load2

  if (loading) return <></>

  const SectionHeading = ({ title }: { title: string }) => (
    <div className="flex items-center gap-2 w-full">
      <div className="border-l-4 border-b-4 border-[#CDA327] px-4 py-2">
        <h2
          className={cn(
            'font-sora text-[25px] leading-[38px] font-normal text-[#0F766E] whitespace-nowrap'
          )}
        >
          {title}
        </h2>
      </div>
    </div>
  )

  return (
    <>
      <div className="py-12 lg:py-20 relative mx-auto max-w-[1920px] space-y-5 bg-primary">
        <div className="container-sm lg:max-w-[1280px] mx-auto relative z-10 px-5 lg:px-0 space-y-10 flex flex-col gap-10">
          <div className={'bg-white rounded-2xl p-5 lg:p-6 shadow-sm'}>
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between mb-6">
              {/* eslint-disable-next-line react-hooks/static-components */}
              <SectionHeading title="Pengumuman Program Studi" />
              <Link href={'/information/announcements'}>
                <Button className="bg-[#CDA327] hover:bg-[#b8921f] text-white rounded-lg px-4 py-2 h-10">
                  Lihat Pengumuman
                  <ChevronRight className={'size-4'} />
                </Button>
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-5">
              {announcement?.map((row, k) => (
                <Link
                  key={k}
                  href={`/information/announcements/${row?.slug}`}
                  className="rounded-2xl border border-[#C8C8C8] bg-white shadow-sm p-5 space-y-1.5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative mx-auto w-[80px] size-[80px] lg:w-[180px] lg:size-[180px] rounded-full overflow-hidden">
                    <Image
                      src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
                      alt={'logo'}
                      fill
                      className={'object-cover'}
                    />
                  </div>
                  <p className="line-clamp-2 mt-4 text-xl font-semibold text-[#444444]">
                    {row?.judul_pengumuman}
                  </p>
                  <p className="text-xs font-semibold text-[#0F766E] flex items-center gap-1.5 py-1.5 px-3 bg-[#E9F5F2] rounded-full w-fit">
                    {row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className={'bg-white rounded-2xl p-5 lg:p-6 shadow-sm'}>
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between mb-6">
              {/* eslint-disable-next-line react-hooks/static-components */}
              <SectionHeading title="Agenda Program Studi" />
              <Link href={'/information/agenda'}>
                <Button className="bg-[#CDA327] hover:bg-[#b8921f] text-white rounded-lg px-4 py-2 h-10">
                  Lihat Agenda
                  <ChevronRight className={'size-4'} />
                </Button>
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-5">
              {agenda?.map((row, k) => (
                <Link
                  key={k}
                  href={`/information/agenda/${row?.slug}`}
                  className="rounded-2xl border border-[#C8C8C8] bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-full h-[300px] relative rounded-2xl overflow-hidden">
                    <Image
                      src={row?.gambar ?? '/img/noimg.png'}
                      alt={'gambar'}
                      fill
                      className={'object-cover'}
                    />
                  </div>
                  <div className="flex items-center gap-2.5 p-4">
                    <div className="border p-2 rounded-lg border-[#0F766E] items-center flex flex-col justify-center w-fit">
                      <p className="text-2xl font-semibold text-[#0F766E]">
                        {row?.waktu_mulai ? format(row?.waktu_mulai, 'dd') : ''}
                      </p>
                      <p className="text-red-500 font-semibold">
                        {row?.waktu_mulai ? format(row?.waktu_mulai, 'MMM') : ''}
                      </p>
                    </div>
                    <p className="text-2xl h-fit font-semibold line-clamp-2 pl-2.5 border-l-2 border-l-[#C8C8C8] text-[#444444]">
                      {row?.judul ?? ''}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AgendaAnnouncementInformationV16
