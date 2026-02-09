'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { FaRegCalendarAlt, FaUser } from 'react-icons/fa'
import { format } from 'date-fns'
import { useParams } from 'next/navigation'
import { UseGetAgendaDetail } from '@/app/information/agenda/hooks'
import { UseGetAgenda } from '@/app/homepage/hooks'
import Image from 'next/image'
import { IoLocationSharp } from 'react-icons/io5'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'
import { TitleContent } from '@/components/thema-v3/component/common/titleContent'
import { AgendaDetailTheme3Skeleton } from '@/components/thema-v3/information/agenda/slug/component/skeleton'

export const AgendaDetailTheme3 = () => {
  const { slug } = useParams()
  const { agendaDetail: detail, loading: load1 } = UseGetAgendaDetail((slug as string) ?? '')
  const { agenda, loading: load2 } = UseGetAgenda({
    page: '1',
    limit: '10',
    no_includes_id: detail?.id_agenda,
  })

  const loading = load1 || load2

  if (loading) return <AgendaDetailTheme3Skeleton />

  return (
    <>
      <div className={'container py-5'}>
        <Link href={'/information/agenda'} className={'flex items-center gap-1.5'}>
          <ArrowLeft className={'size-4'} />
          Kembali
        </Link>

        <div className="w-full flex items-start gap-x-8 lg:mt-4">
          <div className="flex flex-col gap-5">
            <div className="w-full py-5 bg-primary-foreground p-2.5 mb-4">
              <p className={'text-2xl font-semibold dark:text-primary'}>{detail?.judul}</p>
              <div className="grid grid-cols-2 w-fit gap-2.5 text-primary mt-2">
                <p className={'flex items-center gap-1.5'}>
                  <FaRegCalendarAlt /> Tanggal
                </p>
                <p>
                  : {detail?.waktu_mulai ? format(detail?.waktu_mulai, 'dd MMM yyyy') : '-'} s.d{' '}
                  {detail?.waktu_selesai ? format(detail?.waktu_selesai, 'dd MMM yyyy') : '-'}
                </p>
                <p className={'flex items-center gap-1.5'}>
                  <IoLocationSharp />
                  Lokasi
                </p>
                <p>: {detail?.lokasi_kegiatan}</p>
                <p className={'flex items-center gap-1.5'}>
                  <FaUser /> Penulis
                </p>
                <p>: {detail?.penulis}</p>
              </div>
            </div>

            <div
              className="html-class flex flex-col gap-5 text-justify"
              dangerouslySetInnerHTML={{ __html: detail?.isi_agenda ?? '' }}
            />

            <ShareContent title={detail?.judul ?? ''} text={'Bagikan Agenda'} />
          </div>

          <div className="w-full lg:max-w-[480px] lg:min-w-[480px]">
            <Image
              src={detail?.gambar ?? '/img/noimg.png'}
              alt={'detail'}
              className={'w-full h-[640px] object-cover'}
              width={480}
              height={640}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <TitleContent text={'Agenda Lainnya'} line_position={'bottom'} />
          <div className={'grid grid-cols-3 gap-5'}>
            {agenda?.map((row, k) => (
              <Link
                href={`/information/agenda/${row?.slug}`}
                className="flex flex-col border rounded"
                key={k}
              >
                <Image
                  src={row?.gambar}
                  alt={row?.judul}
                  className={'w-full h-[250px] object-cover'}
                  width={300}
                  height={250}
                />
                <div className={'p-2.5 flex flex-col gap-1.5'}>
                  <p className="font-semibold line-clamp-2">{row?.judul}</p>
                  <p className="text-gray-500 flex items-center gap-1.5">
                    <IoLocationSharp className={'size-4 text-primary'} />
                    {row?.lokasi_kegiatan}
                  </p>
                  <p className="text-gray-500 flex items-center gap-1.5">
                    <FaRegCalendarAlt className={'size-4 text-primary'} />
                    {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : ''}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
