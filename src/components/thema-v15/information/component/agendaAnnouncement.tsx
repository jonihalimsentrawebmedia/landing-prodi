'use client'

import { UseGetAgenda, UseGetAnnouncement } from '@/app/homepage/hooks'
import { useStateContext } from '@/contexts'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { format } from 'date-fns'

const AgendaAnnouncementInformationV15 = () => {
  const { agenda, loading: load1 } = UseGetAgenda({ page: '1', limit: '3' })
  const { announcement, loading: load2 } = UseGetAnnouncement({ page: '1', limit: '3' })
  const [{ profile }] = useStateContext()

  const loading = load1 || load2

  if (loading) return <></>
  return (
    <>
      <div className="py-12 lg:py-20 bg-primary relative mx-auto max-w-[1920px]">
        <div className="container-sm lg:max-w-[1280px] mx-auto relative z-10 px-5 lg:px-0">
          <div>
            <div className={'rounded-2xl border border-[#C8C8C8] shadow-sm bg-white'}>
              <div className={'px-4 py-4'}>
                <div className={'flex flex-col lg:flex-row gap-4 lg:items-center justify-between'}>
                  <div className="flex items-center gap-4">
                    <h2 className="text-primary text-[24px] font-semibold shrink-0">
                      Pengumuman Program Studi
                    </h2>
                    <div className="h-px bg-[#C8C8C8] flex-1" />
                  </div>
                  <Link href={'/information/announcements'}>
                    <Button className={'bg-primary hover:bg-primary/90 text-white'}>
                      Lihat Pengumuman
                      <ChevronRight className={'size-4'} />
                    </Button>
                  </Link>
                </div>

                <ul className={'py-4 rounded-md mt-8'}>
                  {announcement?.map((row, k) => (
                    <div
                      key={k}
                      className={
                        'border-b border-[#C8C8C8] px-4 py-4 flex flex-col lg:flex-row items-center gap-4'
                      }
                    >
                      <Image
                        src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
                        alt={'logo'}
                        width={100}
                        height={100}
                        className={'size-[100px] w-[100px] h-[100px]'}
                      />
                      <div>
                        <p className="lg:text-2xl line-clamp-2 lg:line-clamp-none text-[#444444]">
                          {row?.judul_pengumuman}
                        </p>
                        <p className="text-[#444444]">
                          {row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}
                        </p>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={'mt-8'}>
            <div className={'rounded-2xl border border-[#C8C8C8] shadow-sm bg-white'}>
              <div className={'px-4 py-4'}>
                <div className={'flex flex-col lg:flex-row gap-4 lg:items-center justify-between'}>
                  <div className="flex items-center gap-4">
                    <h2 className="text-primary text-[24px] font-semibold shrink-0">
                      Agenda Program Studi
                    </h2>
                    <div className="h-px bg-[#C8C8C8] flex-1" />
                  </div>
                  <Link href={'/information/agenda'}>
                    <Button className={'bg-primary hover:bg-primary/90 text-white'}>
                      Lihat Agenda
                      <ChevronRight className={'size-4'} />
                    </Button>
                  </Link>
                </div>

                <ul className={'py-4 rounded-md mt-8'}>
                  {agenda?.map((row, k) => (
                    <div
                      key={k}
                      className={
                        'border-b border-[#C8C8C8] px-4 py-4 flex items-center gap-4 flex-col lg:flex-row'
                      }
                    >
                      <Image
                        src={row?.gambar ?? '/img/noimg.png'}
                        alt={'logo'}
                        width={100}
                        height={100}
                        className={'size-[100px] w-[100px] h-[100px] object-cover rounded'}
                      />
                      <div>
                        <p className="line-clamp-2 lg:line-clamp-none lg:text-2xl text-[#444444]">
                          {row?.judul}
                        </p>
                        <p className="text-[#444444]">
                          {row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}
                        </p>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AgendaAnnouncementInformationV15
