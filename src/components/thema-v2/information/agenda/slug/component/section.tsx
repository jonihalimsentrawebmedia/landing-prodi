'use client'

import { UseGetAgendaDetail } from '@/app/information/agenda/hooks'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { format } from 'date-fns'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { id } from 'date-fns/locale/id'
import { FaLocationDot } from 'react-icons/fa6'
import { UseGetAgenda } from '@/app/homepage/hooks'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'
import { TitleUnderline } from '@/components/thema-v2/component/common/titleUnderLine'

export const SectionAgenda = () => {
  const { slug } = useParams()
  const { agendaDetail: detail } = UseGetAgendaDetail((slug as string) ?? '')
  const { agenda } = UseGetAgenda({
    limit: '3',
    page: '1',
    no_includes_id: detail?.id_agenda ?? '',
  })

  return (
    <>
      <div className={'container py-5'}>
        <Link href={'/information/agenda'} className={'flex items-center gap-1.5'}>
          <ArrowLeft className={'size-4'} />
          Kembali
        </Link>
        <div className="flex flex-col-reverse lg:flex-row lg:items-start gap-5">
          <div className="w-full lg:w-1/2">
            <p className="text-sm lg:text-3xl">{detail?.judul}</p>
            <div className="mt-5 grid grid-cols-2 gap-2 lg:gap-5">
              <Card
                className={`p-1 lg:p-2 w-full rounded-md border-primary shadow-none drop-shadow-none col-span-2 lg:col-span-1`}
              >
                <CardContent className={'p-1 lg:p-2 flex flex-col gap-1.5'}>
                  <p className="text-xs text-primary dark:text-white">Waktu</p>
                  <p className={'text-sm'}>
                    {detail?.waktu_mulai ? format(detail?.waktu_mulai, 'dd MMM yyyy HH:mm') : ''}{' '}
                    s.d{' '}
                    {detail?.waktu_selesai
                      ? format(detail?.waktu_selesai, 'dd MMM yyyy HH:mm')
                      : ''}
                  </p>
                </CardContent>
              </Card>

              <Card
                className={`p-1 lg:p-2 w-full rounded-md border-primary shadow-none drop-shadow-none`}
              >
                <CardContent className={'p-1 lg:p-2 flex flex-col gap-1.5'}>
                  <p className="text-xs text-primary dark:text-white">Lokasi</p>
                  <p>{detail?.lokasi_kegiatan}</p>
                </CardContent>
              </Card>

              <Card
                className={`p-1 lg:p-2 w-full rounded-md border-primary shadow-none drop-shadow-none `}
              >
                <CardContent className={'p-1 lg:p-2 flex flex-col gap-1.5'}>
                  <p className="text-xs text-primary dark:text-white">Peneribit</p>
                  <p>{detail?.penulis}</p>
                </CardContent>
              </Card>
            </div>

            <div
              className="html-class flex flex-col gap-5 my-5 text-justify"
              dangerouslySetInnerHTML={{ __html: detail?.isi_agenda ?? '' }}
            />

            <ShareContent title={detail?.judul ?? ''} text={'Bagikan Pengumuman'} />
          </div>

          <div className="w-full lg:w-1/2">
            <Image
              src={detail?.gambar ?? '/img/noimg.png'}
              alt={detail?.judul ?? ''}
              width={480}
              height={650}
              className={'w-full h-auto object-contain'}
            />
          </div>
        </div>
      </div>

      <div className="w-full mx-auto max-w-[1920px] bg-gray-100 dark:bg-primary/70 py-5">
        <div className="mt-2 lg:mt-0 flex flex-col lg:grid grid-cols-3 gap-5 container">
          <TitleUnderline text={'Lihat Agenda Lainya'} className={'text-start col-span-3'} />
          {agenda?.map((item, l) => (
            <Link href={`/information/agenda/${item?.slug}`} key={l}>
              <div className={'border rounded'}>
                <Image
                  src={item?.gambar ?? '/img/noimg.png'}
                  alt={item?.judul ?? ''}
                  width={300}
                  height={200}
                  className={'w-full h-[250px] object-cover'}
                />
                <div className="p-2 flex flex-col gap-1.5">
                  <p className="line-clamp-2 font-semibold">{item?.judul}</p>
                  <p className={'text-primary dark:text-white flex items-center gap-1.5'}>
                    <FaLocationDot />
                    {item.lokasi_kegiatan}
                  </p>
                  <p className="flex text-primary items-center gap-1.5 text-sm dark:text-white">
                    <FaRegCalendarAlt />
                    {item?.published_at
                      ? format(item?.published_at, 'dd MMM yyyy', { locale: id })
                      : ''}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
