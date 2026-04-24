'use client'

import { useParams } from 'next/navigation'
import { UseGetAgendaDetail } from '@/app/information/agenda/hooks'
import { UseGetAgenda } from '@/app/homepage/hooks'
import JumbotronTitleV8 from '@/components/thema-v8/component/common/jumbotronTitle'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { QuilWrite } from '@/components/thema-v5/information/component/incon'
import { MdDateRange } from 'react-icons/md'
import { format } from 'date-fns'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'
import Image from 'next/image'
import Link from 'next/link'

const AgendaDetailPageV8 = () => {
  const { slug } = useParams()
  const { agendaDetail: detail } = UseGetAgendaDetail(slug as string)
  const { agenda } = UseGetAgenda({
    limit: '3',
    page: '1',
    no_includes_id: detail?.id_agenda,
  })

  return (
    <>
      <JumbotronTitleV8 title={'Informasi'} context={'INFORMASI'} />
      <div className="bg-footer">
        <div className="container-sm py-5">
          <div className="bg-blue-50 p-1.5 px-2 rounded">
            <BreadcrumbBasic
              className={'text-primary hover:bg-transparent!'}
              data={[
                { name: 'Beranda', link: '/' },
                { name: 'Informasi', link: '/information' },
                { name: 'Agenda', link: '/information/agenda' },
                { name: detail?.judul ?? '' },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="bg-footer">
        <div className="container-sm py-5">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="w-full lg:w-1/2 space-y-2">
              <p className="lg:text-2xl font-semibold">{detail?.judul}</p>
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
            <p className="text-sm lg:text-xl w-fit font-semibold bg-primary px-3 py-1.5 text-white">
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
      </div>
    </>
  )
}

export default AgendaDetailPageV8
