'use client'

import { UseGetPromotion } from '@/app/information/hooks'
import { UseGetPromotionDetail } from '@/app/information/promotion/hooks'
import { useParams } from 'next/navigation'
import { FaRegCalendarAlt, FaUser } from 'react-icons/fa'
import { format } from 'date-fns'
import { id } from 'date-fns/locale/id'
import { Button } from '@/components/ui/button'
import { IoMdLink } from 'react-icons/io'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export const SectionPromotion = () => {
  const { slug } = useParams()
  const { detailPromotion } = UseGetPromotionDetail((slug as string) ?? '')
  const { promotion } = UseGetPromotion({
    page: '1',
    limit: '4',
  })

  return (
    <>
      <div className="bg-primary">
        <div className={'container'}>
          <div className="flex items-start w-full">
            <div className="w-full h-full max-w-[420px] bg-primary pr-5">
              <div className="p-5 bg-[#F5FAFF] rounded-lg flex flex-col gap-2">
                <div className={'flex flex-col gap-1'}>
                  <p className={'text-gray-500 flex items-center gap-1.5'}>
                    <FaUser className={'text-primary'} />
                    Penulis
                  </p>
                  <p className={'font-semibold'}>{detailPromotion?.penulis}</p>
                </div>

                <div className={'flex flex-col gap-1'}>
                  <p className={'text-gray-500 flex items-center gap-1.5'}>
                    <FaRegCalendarAlt className={'text-primary'} />
                    Tanggal
                  </p>
                  <p className={'font-semibold'}>
                    {detailPromotion?.published_at
                      ? format(detailPromotion?.published_at, 'dd MMM yyyy', { locale: id })
                      : '-'}
                  </p>
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
                  {promotion
                    .filter((row) => row.slug !== slug)
                    ?.map((row, k) => (
                      <Link href={`/information/promotion/${row?.slug}`} key={k}>
                        <li className={'flex items-center gap-2'}>
                          <Image
                            src={row?.gambar}
                            alt={'image'}
                            className={'w-[100px] h-[100px] object-cover'}
                            width={100}
                            height={100}
                          />
                          <div className={'flex flex-col gap-1.5'}>
                            <p className="text-white">{row?.judul}</p>
                            <p className={'flex items-center gap-1.5 text-white text-sm'}>
                              <FaRegCalendarAlt />
                              {row?.published_at
                                ? format(row?.published_at, 'dd MMM yyyy', { locale: id })
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
              <p className="mt-5 text-2xl font-semibold">{detailPromotion?.judul}</p>

              {detailPromotion?.gambar && (
                <Image
                  className={'w-[500px] mx-auto h-auto object-contain my-5'}
                  src={detailPromotion?.gambar}
                  alt={'gambar'}
                  width={1000}
                  height={500}
                />
              )}

              <div
                className="html-class mt-5"
                dangerouslySetInnerHTML={{ __html: detailPromotion?.isi_promosi ?? '' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
