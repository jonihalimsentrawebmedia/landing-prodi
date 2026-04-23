'use client'

import { UseGetAgenda, UseGetAnnouncement } from '@/app/homepage/hooks'
import Image from 'next/image'
import { useStateContext } from '@/contexts'
import { FaRegCalendarAlt } from 'react-icons/fa'
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

        <div className="container-sm py-8 lg:py-16 relative z-10 flex flex-col items-start gap-5">
          <div className="w-full">
            <div className="flex flex-col lg:flex-row  lg:items-center justify-between gap-4">
              <p className="lg:text-2xl font-semibold text-primary">Pengumuman Program Studi</p>
              <Link href={'/information/announcements'}>
                <Button className={'text-white'}>
                  Lihat Pengumuman
                  <ChevronRight className={'size-4'} />
                </Button>
              </Link>
            </div>
            <div className="mt-6 grid lg:grid-cols-3 gap-4 w-full">
              {announcement?.map((row, k) => (
                <Link
                  href={`/information/announcements/${row?.slug}`}
                  className={`flex items-center gap-5  border-gray-400 lg:border-l-2 lg:pl-4 py-2`}
                  key={k}
                >
                  <Image
                    src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg'}
                    alt={'asd'}
                    width={100}
                    height={100}
                    sizes={'auto'}
                    loading={'eager'}
                    className={
                      'object-cover rounded-full lg:h-[100px] lg:w-[100px] w-[80px] h-[80px]'
                    }
                  />
                  <div className={'lg:space-y-4 space-y-2'}>
                    <p className="lg:text-2xl line-clamp-2 text-primary font-semibold text-sm">
                      {row?.judul_pengumuman}
                    </p>
                    <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-primary flex items-center gap-1">
                      <FaRegCalendarAlt className={'size-4'} />
                      {row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col lg:flex-row  lg:items-center justify-between gap-4">
              <p className="lg:text-2xl font-semibold text-primary">Agenda Program Studi</p>
              <Link href={'/information/agenda'}>
                <Button className={'text-white'}>
                  Lihat Agenda
                  <ChevronRight className={'size-4'} />
                </Button>
              </Link>
            </div>
            <div className="mt-6 grid lg:grid-cols-3 gap-4 w-full">
              {agenda?.map((row, k) => (
                <Link
                  href={`/information/agenda/${row?.slug}`}
                  className={`flex items-center gap-5  border-gray-400 lg:border-l-2 lg:pl-4 py-2`}
                  key={k}
                >
                  <Image
                    src={row?.gambar ?? '/img/noimg'}
                    alt={'asd'}
                    width={100}
                    height={100}
                    sizes={'auto'}
                    loading={'eager'}
                    className={
                      'object-cover rounded lg:h-[100px] lg:w-[100px] w-[80px] h-[80px] min-w-[100px]'
                    }
                  />
                  <div className={'lg:space-y-4 space-y-2'}>
                    <p className="lg:text-2xl line-clamp-2 text-primary font-semibold text-sm">
                      {row?.judul}
                    </p>
                    <p className="text-xs font-semibold w-fit py-1.5 text-primary flex items-center gap-1">
                      {row?.waktu_mulai ? format(row?.waktu_mulai, 'dd-MM-yyyy') : ''}
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

export default AgendaAnnouncementV7
