'use client'

import { useParams } from 'next/navigation'
import { UseGetAgendaDetail } from '@/app/information/agenda/hooks'
import { UseGetAgenda } from '@/app/homepage/hooks'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { QuilWrite } from '@/components/thema-v5/information/component/incon'
import { MdDateRange } from 'react-icons/md'
import { format } from 'date-fns'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AgendaDetailPageV15 = () => {
  const { slug } = useParams()
  const { agendaDetail: detail } = UseGetAgendaDetail(slug as string)
  const { agenda } = UseGetAgenda({
    limit: '3',
    page: '1',
    no_includes_id: detail?.id_agenda,
  })

  return (
    <>
      <div className={'bg-primary w-full'}>
        <div className="container-sm p-2">
          <BreadcrumbBasic
            className={'text-white! hover:bg-[#1F7A63]!'}
            data={[
              { name: 'Beranda', link: '/' },
              { name: 'Profil', link: '/information' },
              { name: 'Agenda', link: '/information/agenda' },
              { name: detail?.judul ?? '' },
            ]}
          />
        </div>
      </div>

      <div className="bg-white py-5">
        <div className="container-sm lg:max-w-[1280px] mx-auto py-5">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="w-full lg:w-1/2 space-y-2">
              <p className="lg:text-2xl font-semibold text-[#444444]">{detail?.judul}</p>
              <p className="flex items-center gap-1.5 text-[#444444]">
                <QuilWrite /> {detail?.penulis ?? 'TIM HUMAS'}
              </p>
              <p className="flex items-center gap-1.5 text-[#444444]">
                <MdDateRange className={'size-6 text-[#1F7A63]'} />
                {detail?.waktu_mulai ? format(detail.waktu_mulai, 'dd-MM-yyyy') : ''} s/d{' '}
                {detail?.waktu_selesai ? format(detail.waktu_selesai, 'dd-MM-yyyy') : ''}
              </p>
              <p className="flex items-center gap-1.5 text-[#444444]">
                <HiOutlineLocationMarker className={'size-6 text-[#1F7A63]'} />{' '}
                {detail?.lokasi_kegiatan ?? ''}
              </p>

              <div
                className={'flex flex-col gap-1.5 html-class'}
                dangerouslySetInnerHTML={{ __html: detail?.isi_agenda ?? '' }}
              />

              <div>
                <ShareContent classNameShare={'bg-[#1F7A63]!'} title={detail?.judul ?? ''} text={'Bagikan'} />
              </div>
            </div>
            <div className={'lg:w-1/2 flex items-start justify-start'}>
              {detail?.gambar && (
                <Image
                  src={detail?.gambar}
                  className={'object-contain w-full max-h-[520px]'}
                  width={480}
                  height={640}
                  alt={detail?.judul}
                />
              )}
            </div>
          </div>
        </div>

        <div className="pb-5 container-sm lg:max-w-[1280px] mx-auto space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-[#1F7A63] text-[24px] font-semibold shrink-0">Agenda Terbaru</h2>
            <div className="h-px bg-[#C8C8C8] flex-1" />
          </div>

          <div className="grid lg:grid-cols-4 gap-5">
            {agenda?.map((row, k) => (
              <Link
                href={`/information/agenda/${row?.slug}`}
                className={'flex items-center gap-4 p-4 border border-[#C8C8C8] rounded-2xl bg-white'}
                key={k}
              >
                <div className={'min-w-[30px]'}>
                  <p className={'text-[#1F7A63] text-lg'}>
                    {row?.waktu_mulai ? format(row?.waktu_mulai, 'dd') : ''}
                  </p>
                  <p className={'text-red-500'}>
                    {row?.waktu_mulai ? format(row?.waktu_mulai, 'MMM') : ''}
                  </p>
                </div>
                <div className={'border-l-2 border-l-[#C8C8C8] pl-4'}>
                  <p className="text-lg line-clamp-2 text-[#444444]">{row?.judul}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AgendaDetailPageV15
