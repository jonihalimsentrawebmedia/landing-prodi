'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { useParams } from 'next/navigation'
import { UseGetAgendaDetail } from '@/app/information/agenda/hooks'
import { UseGetAgenda } from '@/app/homepage/hooks'
import { QuilWrite } from '@/components/thema-v5/information/component/incon'
import { MdDateRange } from 'react-icons/md'
import { format } from 'date-fns'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'
import Image from 'next/image'
import Link from 'next/link'

const AgendaDetailPageV7 = () => {
  const { slug } = useParams()
  const { agendaDetail: detail } = UseGetAgendaDetail(slug as string)
  const { agenda } = UseGetAgenda({
    limit: '3',
    page: '1',
    no_includes_id: detail?.id_agenda,
  })

  return (
    <>
      <div className={'bg-primary w-full max-w-[1920px] mx-auto p-4'}>
        <div className="container-sm">
          <BreadcrumbBasic
            className={'text-white! hover:bg-primary!'}
            data={[
              { name: 'Beranda', link: '/' },
              { name: 'Informasi', link: '/information' },
              { name: 'Agenda', link: '/information/agenda' },
              { name: detail?.judul ?? '' },
            ]}
          />
        </div>
      </div>

      <div className="container-sm pb-5">
        <div className="flex flex-col lg:flex-row items-start gap-8 mt-5">
          <div className="w-full lg:w-1/2 space-y-2">
            <p className="text-2xl font-semibold">{detail?.judul}</p>
            <p className="flex items-center gap-1.5">
              <QuilWrite className={'stroke-primary'} /> {detail?.penulis ?? 'TIM HUMAS'}
            </p>
            <p className="flex items-center gap-1.5">
              <MdDateRange className={'size-6 text-primary'} />
              {detail?.waktu_mulai ? format(detail.waktu_mulai, 'dd-MM-yyyy') : ''} s/d{' '}
              {detail?.waktu_selesai ? format(detail.waktu_selesai, 'dd-MM-yyyy') : ''}
            </p>
            <p className="flex items-center gap-1.5">
              <HiOutlineLocationMarker className={'size-6 text-primary'} />{' '}
              {detail?.lokasi_kegiatan ?? ''}
            </p>

            <div
              className={'flex flex-col gap-1.5 html-class'}
              dangerouslySetInnerHTML={{ __html: detail?.isi_agenda ?? '' }}
            />

            <div>
              <ShareContent title={detail?.judul ?? ''} text={'Bagikan'} />
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

      <div className="pb-5 container-sm space-y-4">
        <div className={'w-full border-b-2 border-b-primary'}>
          <p className="text-xl w-fit font-semibold bg-primary px-3 py-1.5 text-white">
            Agenda Terbaru
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-5">
          {agenda?.map((row, k) => (
            <Link
              href={`/information/agenda/${row?.slug}`}
              className={'flex items-center gap-4 p-4 border rounded-lg'}
              key={k}
            >
              <div className={'min-w-[30px]'}>
                <p className={'text-primary text-lg'}>
                  {row?.waktu_mulai ? format(row?.waktu_mulai, 'dd') : ''}
                </p>
                <p className={'text-red-500'}>
                  {row?.waktu_mulai ? format(row?.waktu_mulai, 'MMM') : ''}
                </p>
              </div>
              <div className={'border-l-2 border-l-gray-500 pl-4'}>
                <p className="text-lg line-clamp-2">{row?.judul}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default AgendaDetailPageV7
