'use client'

import { FaRegCalendarAlt, FaUser } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { IoMdLink } from 'react-icons/io'
import { UseGetAgendaDetail } from '@/app/information/agenda/hooks'
import { useParams } from 'next/navigation'
import { format } from 'date-fns'
import { id } from 'date-fns/locale/id'
import { FaLocationDot } from 'react-icons/fa6'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { UseGetAgenda } from '@/app/homepage/hooks'

export const SectionAgenda = () => {
  const { slug } = useParams()
  const { agendaDetail } = UseGetAgendaDetail((slug as string) ?? '')
  const { agenda } = UseGetAgenda({
    limit: '4',
    page: '1',
  })

  return (
    <>
      <div className="bg-primary">
        <div className={'container'}>
          <div className="flex items-start w-full flex-col-reverse flex-row gap-5">
            <div className="w-full h-full max-w-[420px] bg-primary lg:pr-5">
              <div className="p-5 bg-[#F5FAFF] rounded-lg flex flex-col gap-2">
                <div className={'flex flex-col gap-1'}>
                  <p className={'text-gray-500 flex items-center gap-1.5'}>
                    <FaUser className={'text-primary'} />
                    Penulis
                  </p>
                  <p className={'font-semibold'}>{agendaDetail?.penulis}</p>
                </div>

                <div className={'flex flex-col gap-1'}>
                  <p className={'text-gray-500 flex items-center gap-1.5'}>
                    <FaRegCalendarAlt className={'text-primary'} />
                    Tanggal
                  </p>
                  <p className={'font-semibold'}>
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
                  <p className={'text-gray-500 flex items-center gap-1.5'}>
                    <FaLocationDot className={'text-primary'} />
                    Lokasi
                  </p>
                  <p className={'font-semibold'}>{agendaDetail?.lokasi_kegiatan}</p>
                </div>
              </div>

              <div className="p-5 bg-[#F5FAFF] rounded-lg flex flex-col gap-2 mt-5">
                <p className="text-primary">Bagikan Berita</p>
                <Button
                  className={'w-fit flex items-center gap-1.5 rounded-full border-primary'}
                  variant={'outline'}
                >
                  <IoMdLink />
                  Salin Link
                </Button>
              </div>

              <div className="mt-5">
                <p className={'text-white pl-2 text-xl border-l-white border-l-4'}>Baca Juga</p>
                <ul className={'flex flex-col gap-4 mt-2.5'}>
                  {agenda?.map((row, k) => (
                    <Link href={`/information/agenda/${row?.slug}`} key={k}>
                      <li className={'flex items-center gap-2'}>
                        <Image
                          src={row?.gambar}
                          alt={'image'}
                          className={'w-[100px] h-[140px] object-cover'}
                          width={100}
                          height={140}
                        />
                        <div className={'flex flex-col gap-1.5'}>
                          <p className="text-white">{row?.judul}</p>
                          <p className={'flex items-center gap-1.5 text-white text-sm'}>
                            <FaLocationDot />
                            {row?.lokasi_kegiatan}
                          </p>
                          <p className={'flex items-center gap-1.5 text-white text-sm'}>
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

            <div className="w-full bg-white p-5">
              <Link href={'/information/agenda'}>
                <button className={'flex items-center gap-1.5'}>
                  <ArrowLeft />
                  Kembali
                </button>
              </Link>
              <p className="mt-5 text-2xl font-semibold">{agendaDetail?.judul}</p>

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
                className="html-class mt-5"
                dangerouslySetInnerHTML={{ __html: agendaDetail?.isi_agenda ?? '' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
