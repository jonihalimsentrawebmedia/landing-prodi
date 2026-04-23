'use client'

import { UseGetAgenda, UseGetAnnouncement } from '@/app/homepage/hooks'
import Image from 'next/image'
import { useStateContext } from '@/contexts'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const AgendaAnnouncementV7 = () => {
  const { agenda, loading: load1 } = UseGetAgenda({ page: '1', limit: '3' })
  const { announcement, loading: load2 } = UseGetAnnouncement({ page: '1', limit: '3' })

  const [{ profile }] = useStateContext()

  const loading = load1 || load2

  if (loading) return <></>

  return (
    <>
      <div className="maxw-[1920px] mx-auto relative bg-primary">
        <div className="container-sm py-8 lg:py-16 relative z-10 flex flex-col lg:flex-row items-start gap-5">
          <div className="w-full lg:w-1/2">
            <p className="lg:text-2xl font-semibold text-footer text-center">
              Pengumuman Program Studi
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {announcement?.map((row, k) => (
                <Link
                  href={`/information/announcements/${row?.slug}`}
                  className={'flex items-center gap-5 border-b border-white pb-4'}
                  key={k}
                >
                  <div className="relative lg:h-[100px] lg:w-[100px] rounded-full lg:min-w-[100px] min-w-[80px] w-[80px] h-[80px] bg-white">
                    <Image
                      src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg'}
                      alt={'asd'}
                      fill
                      sizes={'auto'}
                      loading={'eager'}
                      className={'object-cover rounded-full'}
                    />
                  </div>
                  <div className={'lg:space-y-2 space-y-2'}>
                    <p className="lg:text-2xl line-clamp-2 text-footer font-semibold text-sm">
                      {row?.judul_pengumuman}
                    </p>
                    <p className="text-sm font-semibold text-white flex items-center gap-1">
                      {row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}
                    </p>
                  </div>
                </Link>
              ))}
              <Link href={'/information/announcements'} className={'w-full'}>
                <Button className={'bg-footer text-primary hover:bg-footer w-full rounded'}>
                  Lihat Pengumuman
                  <ChevronRight className={'size-4'} />
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <p className="lg:text-2xl font-semibold text-footer text-center">
              Agenda Program Studi
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {agenda?.map((row, k) => (
                <Link
                  href={`/information/agenda/${row?.slug}`}
                  className={'flex items-center gap-5 border-b border-white pb-4'}
                  key={k}
                >
                  <div className="relative lg:h-[100px] lg:w-[100px] rounded lg:min-w-[100px] min-w-[80px] w-[80px] h-[80px] bg-white">
                    <Image
                      src={row?.gambar ?? '/img/noimg'}
                      alt={'asd'}
                      fill
                      sizes={'auto'}
                      loading={'eager'}
                      className={'object-cover rounded'}
                    />
                  </div>
                  <div className={'lg:space-y-2 space-y-2'}>
                    <p className="lg:text-2xl line-clamp-2 text-footer font-semibold text-sm">
                      {row?.judul}
                    </p>
                    <p className="text-sm font-semibold text-white flex items-center gap-1">
                      {row?.waktu_mulai ? format(row?.waktu_mulai, 'dd-MM-yyyy') : ''}
                    </p>
                  </div>
                </Link>
              ))}

              <Link href={'/information/agenda'} className={'w-full'}>
                <Button className={'bg-footer text-primary hover:bg-footer w-full rounded'}>
                  Lihat Pengumuman
                  <ChevronRight className={'size-4'} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AgendaAnnouncementV7
