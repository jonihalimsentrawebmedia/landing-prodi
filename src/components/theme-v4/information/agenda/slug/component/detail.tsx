'use client'

import { useParams } from 'next/navigation'
import { UseGetAgendaDetail } from '@/app/information/agenda/hooks'
import { UseGetAgenda } from '@/app/homepage/hooks'
import { FaRegCalendarAlt, FaUser } from 'react-icons/fa'
import { format } from 'date-fns'
import { id } from 'date-fns/locale/id'
import { FaLocationDot } from 'react-icons/fa6'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'

export const DetailAgendaTheme4 = () => {
  const { slug } = useParams()
  const { agendaDetail } = UseGetAgendaDetail((slug as string) ?? '')
  const { agenda } = UseGetAgenda({
    limit: '4',
    page: '1',
  })

  return (
    <>
      <div className="">
        <div className={'container'}>
          <div className="flex items-start w-full flex-col lg:flex-row gap-5 my-5">
            <div className="w-full">
              <Link href={'/information/agenda'}>
                <button className={'flex items-center gap-1.5'}>
                  <ArrowLeft />
                  Kembali
                </button>
              </Link>
              <p className="mt-5 lg:text-2xl font-semibold">{agendaDetail?.judul}</p>

              {agendaDetail?.gambar && (
                <Image
                  className={'w-[500px] mx-auto h-auto object-contain my-5'}
                  src={agendaDetail?.gambar}
                  alt={'gambar'}
                  width={1000}
                  height={500}
                />
              )}

              <div
                className="html-class mt-5 flex flex-col gap-4 text-justify"
                dangerouslySetInnerHTML={{ __html: agendaDetail?.isi_agenda ?? '' }}
              />
            </div>

            <div className="w-full h-full max-w-[335px]">
              <div className="p-5 bg-white dark:bg-primary shadow drop-shadow rounded-lg flex flex-col gap-2">
                <div className={'flex flex-col gap-1'}>
                  <p className={'text-gray-500 flex items-center gap-1.5 text-sm'}>
                    <FaUser className={'text-primary dark:text-white'} />
                    Penulis
                  </p>
                  <p className={'font-semibold text-sm'}>{agendaDetail?.penulis}</p>
                </div>

                <div className={'flex flex-col gap-1'}>
                  <p className={'text-gray-500 flex items-center gap-1.5 text-sm'}>
                    <FaRegCalendarAlt className={'text-primary dark:text-white'} />
                    Tanggal
                  </p>
                  <p className={'font-semibold text-sm'}>
                    {agendaDetail?.waktu_mulai
                      ? format(agendaDetail?.waktu_mulai, 'dd MMM yyyy', { locale: id })
                      : '-'}{' '}
                    s.d{' '}
                    {agendaDetail?.waktu_selesai
                      ? format(agendaDetail?.waktu_selesai, 'dd MMM yyyy', { locale: id })
                      : '-'}
                  </p>
                </div>

                <div className={'flex flex-col gap-1'}>
                  <p className={'text-gray-500 flex items-center gap-1.5 text-sm'}>
                    <FaLocationDot className={'text-primary dark:text-white'} />
                    Lokasi
                  </p>
                  <p className={'font-semibold text-sm'}>{agendaDetail?.lokasi_kegiatan}</p>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-primary shadow drop-shadow rounded-lg flex flex-col gap-2 mt-5">
                <ShareContent title={agendaDetail?.judul ?? ''} text={'Bagikan Agenda'} />
              </div>

              <div className="mt-5">
                <p className={'text-primary pl-2 text-xl border-l-primary border-l-4'}>Baca Juga</p>
                <ul className={'flex flex-col gap-4 mt-2.5'}>
                  {agenda?.map((row, k) => (
                    <Link
                      href={`/information/agenda/${row?.slug}`}
                      key={k}
                      className={'border pr-1.5'}
                    >
                      <li className={'flex items-center gap-2'}>
                        <Image
                          src={row?.gambar}
                          alt={'image'}
                          className={'w-[100px] h-[140px] object-cover'}
                          width={100}
                          height={140}
                        />
                        <div className={'flex flex-col gap-1.5'}>
                          <p className="text-primary line-clamp-2 text-sm">{row?.judul}</p>
                          <p className={'flex items-center gap-1.5 text-primary text-sm'}>
                            <FaLocationDot />
                            {row?.lokasi_kegiatan}
                          </p>
                          <p className={'flex items-center gap-1.5 text-primary text-sm'}>
                            <FaRegCalendarAlt />
                            {row?.waktu_mulai
                              ? format(row?.waktu_mulai, 'dd MMM yyyy', { locale: id })
                              : '-'}{' '}
                            s.d{' '}
                            {row?.waktu_selesai
                              ? format(row?.waktu_selesai, 'dd MMM yyyy', { locale: id })
                              : '-'}
                          </p>
                        </div>
                      </li>
                    </Link>
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
