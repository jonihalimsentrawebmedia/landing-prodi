'use client'

import { UseGetAgenda, UseGetAnnouncement } from '@/app/homepage/hooks'
import Image from 'next/image'
import { useStateContext } from '@/contexts'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const AgendaAnnouncementV6 = () => {
  const { agenda, loading: load1 } = UseGetAgenda({ page: '1', limit: '3' })
  const { announcement, loading: load2 } = UseGetAnnouncement({ page: '1', limit: '3' })

  const [{ profile }] = useStateContext()

  const loading = load1 || load2

  if (loading) return <></>

  return (
    <>
      <div className="maxw-[1920px] mx-auto relative">
        <div className="absolute w-full h-full">
          <Image
            src={'/img/agenda.jpg'}
            alt={'gambar'}
            className={'w-full h-full object-cover opacity-20'}
            width={1920}
            height={460}
          />
        </div>

        <div className="container-sm py-8 lg:py-16 relative z-10 flex flex-col lg:flex-row items-start gap-5">
          {announcement?.length > 0 && (
            <div className="w-full lg:w-1/2">
              <p className="lg:text-2xl font-semibold text-footer text-center">
                Pengumuman Program Studi
              </p>
              <div className="mt-5 flex flex-col gap-4">
                {announcement?.map((row, k) => (
                  <Link
                    href={`/information/announcements/${row?.slug}`}
                    className={'flex items-center gap-5'}
                    key={k}
                  >
                    <Image
                      src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg'}
                      alt={'asd'}
                      width={120}
                      height={120}
                      sizes={'auto'}
                      loading={'eager'}
                      className={
                        'object-cover rounded-full lg:h-[120px] lg:w-[120px] w-[80px] h-[80px]'
                      }
                    />
                    <div className={'lg:space-y-4 space-y-2'}>
                      <p className="lg:text-2xl line-clamp-2 text-footer font-semibold text-sm">
                        {row?.judul_pengumuman}
                      </p>
                      <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-footer flex items-center gap-1">
                        <FaRegCalendarAlt className={'size-4'} />
                        {row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}
                      </p>
                    </div>
                  </Link>
                ))}
                <Separator className={'my-5 border-white'} />
                <Link href={'/information/announcements'} className={'w-full'}>
                  <Button className={'bg-footer text-white hover:bg-footer w-full rounded'}>
                    Lihat Pengumuman
                    <ChevronRight className={'size-4'} />
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {agenda?.length > 0 && (
            <div className="lg:w-1/2 w-full">
              <p className="lg:text-2xl font-semibold text-footer text-center">
                Agenda Program Studi
              </p>
              <div className="mt-5 flex flex-col gap-4">
                {agenda?.map((row, k) => (
                  <Link
                    href={`/information/agenda/${row?.slug}`}
                    className={'flex items-center gap-5'}
                    key={k}
                  >
                    <div className="min-w-[120px] h-[120px] relative">
                      <Image
                        src={row?.gambar ?? '/img/noimg'}
                        alt={'asd'}
                        fill
                        sizes={'auto'}
                        loading={'eager'}
                        className={'object-cover'}
                      />
                    </div>
                    <div className={'space-y-2 lg:space-y-4'}>
                      <p className="text-sm lg:text-2xl line-clamp-2 text-footer font-semibold">
                        {row?.judul}
                      </p>
                      <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-footer flex items-center gap-1">
                        <FaRegCalendarAlt className={'size-4'} />
                        {row?.waktu_mulai ? format(row?.waktu_mulai, 'dd-MM-yyyy') : ''}
                      </p>
                    </div>
                  </Link>
                ))}
                <Separator className={'my-5 border-white'} />
                <Link href={'/information/agenda'} className={'w-full'}>
                  <Button className={'bg-footer text-white hover:bg-footer w-full rounded'}>
                    Lihat Agenda
                    <ChevronRight className={'size-4'} />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default AgendaAnnouncementV6
