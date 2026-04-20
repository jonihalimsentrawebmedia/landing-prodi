'use client'

import { Button } from '@/components/ui/button'
import { UseGetAgenda, UseGetAnnouncement } from '@/app/homepage/hooks'
import { format } from 'date-fns'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

const AgendaAnnouncementV5 = () => {
  const { agenda, loading: load1 } = UseGetAgenda({ page: '1', limit: '3' })
  const { announcement, loading: load2 } = UseGetAnnouncement({ page: '1', limit: '3' })

  const load = load1 || load2

  if (load) return <></>

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

        <div className="container-sm py-10 space-y-5 relative z-10">
          <div className="bg-white p-4 border rounded-lg space-y-4 border-footer">
            <div className="flex flex-col gap-2 lg:flex-row items-start lg:items-center justify-between">
              <h2 className="lg:text-2xl font-semibold text-footer underline-offset-8 decoration-yellow-500 underline">
                Pengumuman Prgoram Studi
              </h2>
              <Button className={'bg-footer text-white hover:bg-footer'}>
                Lihat Pengumuman
                <ChevronRight className={'size-4'} />
              </Button>
            </div>

            <div className="flex flex-col lg:grid grid-cols-3 gap-4 py-4">
              {announcement?.map((row, index) => (
                <div key={index} className="space-y-2 border-l-2 border-l-gray-500 pl-2">
                  <p className="text-sm">
                    {row?.published_at ? format(row?.published_at, 'dd-MM- yyyy') : ''}
                  </p>
                  <p className={'text-footer font-semibold line-clamp-2'}>
                    {row?.judul_pengumuman}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 border rounded-lg space-y-4 border-footer">
            <div className="flex flex-col gap-2 lg:flex-row items-start lg:items-center justify-between">
              <h2 className="lg:text-2xl font-semibold text-footer underline-offset-8 decoration-yellow-500 underline">
                Agenda Prgoram Studi
              </h2>
              <Button className={'bg-footer text-white hover:bg-footer'}>
                Lihat Agenda
                <ChevronRight className={'size-4'} />
              </Button>
            </div>

            <div className="flex flex-col lg:grid grid-cols-3 gap-4 py-4">
              {agenda?.map((row, index) => (
                <div key={index} className="space-y-2 border-l-2 border-l-gray-500 pl-2">
                  <p className="text-sm">
                    {row?.waktu_mulai ? format(row?.waktu_mulai, 'dd-MM- yyyy') : ''}
                  </p>
                  <p className={'text-footer font-semibold line-clamp-2'}>{row?.judul}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AgendaAnnouncementV5
