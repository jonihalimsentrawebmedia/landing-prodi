'use client'

import { UseGetAgenda, UseGetAnnouncement } from '@/app/homepage/hooks'
import { useStateContext } from '@/contexts'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { format } from 'date-fns'

const AgendaAnnouncementInformationV14 = () => {
  const { agenda, loading: load1 } = UseGetAgenda({ page: '1', limit: '3' })
  const { announcement, loading: load2 } = UseGetAnnouncement({ page: '1', limit: '3' })
  const [{ profile }] = useStateContext()

  const loading = load1 || load2

  if (loading) return <></>
  return (
    <>
      <div className="py-12 lg:py-20 bg-footer relative mx-auto max-w-[1920px]">
        <div className="container-sm relative z-10 px-5 lg:px-0">
          <div>
            <Card className={'px-4 bg-white border-none'}>
              <CardContent className={'bg-white px-4 py-4'}>
                <div className={'flex items-center justify-between'}>
                  <p
                    className={
                      'text-3xl border-l-4 border-l-yellow-500 pl-4 font-semibold text-footer'
                    }
                  >
                    Pengumuman Program Studi
                  </p>
                  <Link href={'/information/announcements'}>
                    <Button className={'bg-footer text-white hover:bg-primary'}>
                      Lihat Pengumuman
                      <ChevronRight className={'size-4'} />
                    </Button>
                  </Link>
                </div>

                <ul className={'bg-white py-4 rounded-md mt-8'}>
                  {announcement?.map((row, k) => (
                    <div
                      key={k}
                      className={'border-b px-4 border-gray-500 py-4 flex items-center gap-4'}
                    >
                      <Image
                        src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
                        alt={'logo'}
                        width={100}
                        height={100}
                        className={'size-[100px] w-[100px] h-[100px]'}
                      />
                      <div>
                        <p className="text-2xl">{row?.judul_pengumuman}</p>
                        <p>{row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}</p>
                      </div>
                    </div>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className={'mt-8'}>
            <Card className={'px-4 bg-white border-none'}>
              <CardContent className={'bg-white px-4 py-4'}>
                <div className={'flex items-center justify-between'}>
                  <p
                    className={
                      'text-3xl border-l-4 border-l-yellow-500 pl-4 font-semibold text-footer'
                    }
                  >
                    Agenda Program Studi
                  </p>
                  <Link href={'/information/agenda'}>
                    <Button className={'bg-footer text-white hover:bg-primary'}>
                      Lihat Agenda
                      <ChevronRight className={'size-4'} />
                    </Button>
                  </Link>
                </div>

                <ul className={'bg-white py-4 rounded-md mt-8'}>
                  {agenda?.map((row, k) => (
                    <div
                      key={k}
                      className={'border-b px-4 border-gray-500 py-4 flex items-center gap-4'}
                    >
                      <Image
                        src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
                        alt={'logo'}
                        width={100}
                        height={100}
                        className={'size-[100px] w-[100px] h-[100px]'}
                      />
                      <div>
                        <p className="text-2xl">{row?.judul}</p>
                        <p>{row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}</p>
                      </div>
                    </div>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
export default AgendaAnnouncementInformationV14
