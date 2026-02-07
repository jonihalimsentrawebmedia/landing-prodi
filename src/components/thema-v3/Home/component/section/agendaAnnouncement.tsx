'use client'

import { TitleContent } from '@/components/thema-v3/component/common/titleContent'
import { UseGetAgenda, UseGetAnnouncement } from '@/app/homepage/hooks'
import Image from 'next/image'
import { FaLocationDot } from 'react-icons/fa6'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useStateContext } from '@/contexts'
import { AgendaAnnouncementSkeleton } from '@/components/thema-v3/Home/component/skeleton'

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
      <div className={'w-full relative my-10 max-w-[1920px] mx-auto'}>
        <div className="w-1/2 h-full bg-primary absolute top-0 left-0" />
        <div className="w-1/2 h-full absolute top-0 right-0 " />

        <div className="container min-h-[500px] relative z-10 py-5">
          <div className="flex items-center gap-x-12">
            <div className="w-full bg-primary-foreground p-5">
              <TitleContent text={'Agenda Program Studi'} className={'text-primary'} />
              <div className={'flex flex-col gap-4 mt-4'}>
                {agenda?.map((item, k) => (
                  <Link
                    href={`/information/agenda/${item?.slug}`}
                    key={k}
                    className={'flex items-center gap-4'}
                  >
                    <div className="min-w-[108px]">
                      <Image
                        src={item?.gambar}
                        alt={item.judul}
                        width={300}
                        height={200}
                        className={'w-full h-[136px] object-cover'}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{item?.judul}</p>
                      <p className="flex items-center gap-1.5 text-gray-500">
                        <FaLocationDot className={'size-4 text-primary'} />
                        {item?.lokasi_kegiatan}
                      </p>
                      <p className={'text-primary flex items-center gap-1.5'}>
                        <FaRegCalendarAlt className={'size-4 text-primary'} />
                        {item?.published_at ? format(item?.published_at, 'dd MMM yyyy') : ''}
                      </p>
                    </div>
                  </Link>
                ))}

                <Link
                  href={'/information/agenda'}
                  className={
                    'rounded-full border border-primary flex items-center gap-1.5 w-fit p-1.5 px-3 mx-auto text-primary font-semibold text-sm bg-primary-foreground'
                  }
                >
                  Lihat Agenda Lain <ArrowRight className={'size-4 text-primary'} />
                </Link>
              </div>
            </div>

            <div className="w-full bg-primary-foreground p-5 border-primary border">
              <TitleContent text={'Pengumuman Program Studi'} className={'text-primary'} />
              <div className={'flex flex-col gap-4 mt-4'}>
                {announcement?.map((row, k) => (
                  <div className={'flex items-center gap-4'} key={k}>
                    <Image
                      src={profile?.SatuanOrganisasi?.logo ?? '/noimg.png'}
                      alt={'logo'}
                      width={136}
                      height={136}
                      className={'rounded-full object-cover size-[136px]'}
                    />
                    <div className={'flex flex-col gap-1.5'}>
                      <p className="font-semibold line-clamp-2 text-primary">{row?.judul_pengumuman}</p>
                      <p className={'flex items-center gap-1.5 text-gray-500 dark:text-primary'}>
                        <FaRegCalendarAlt className={'size-4 text-primary'} />
                        {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : ''}
                      </p>
                    </div>
                  </div>
                ))}
                <Link
                  href={'/information/announcements'}
                  className={
                    'rounded-full border border-primary flex items-center gap-1.5 w-fit p-1.5 px-3 mx-auto text-primary font-semibold text-sm bg-primary-foreground'
                  }
                >
                  Lihat Pengumuman Lain <ArrowRight className={'size-4 text-primary'} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
