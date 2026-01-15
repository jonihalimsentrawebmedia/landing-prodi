'use client'

import { UseGetNewsDetail } from '@/app/information/news/hooks'
import { useParams } from 'next/navigation'
import { FaBookmark, FaRegCalendarAlt, FaUser } from 'react-icons/fa'
import { format } from 'date-fns'
import { id } from 'date-fns/locale/id'
import { Button } from '@/components/ui/button'
import { IoMdLink } from 'react-icons/io'
import { ArrowLeft } from 'lucide-react'
import { UseGetNews } from '@/app/homepage/hooks'
import Image from 'next/image'
import Link from 'next/link'

export const DetailSectionNews = () => {
  const { slug } = useParams()
  const { newsDetail } = UseGetNewsDetail((slug as string) ?? '')
  const { news } = UseGetNews({
    id_category: newsDetail?.id_kategori_berita ?? '',
    limit: '4',
    page: '1',
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
                    <FaRegCalendarAlt className={'text-primary'} />
                    Diupload
                  </p>
                  <p className={'font-semibold'}>
                    {newsDetail?.published_at
                      ? format(newsDetail.published_at, 'dd MMM yyyy', { locale: id })
                      : ''}
                  </p>
                </div>
                <div className={'flex flex-col gap-1'}>
                  <p className={'text-gray-500 flex items-center gap-1.5'}>
                    <FaUser className={'text-primary'} />
                    Penulis
                  </p>
                  <p className={'font-semibold'}>
                    {newsDetail?.penulis ? newsDetail.penulis : '-'}
                  </p>
                </div>
                <div className={'flex flex-col gap-1'}>
                  <p className={'text-gray-500 flex items-center gap-1.5'}>
                    <FaBookmark className={'text-primary'} />
                    Kategori
                  </p>
                  <p className={'font-semibold'}>
                    {newsDetail?.nama_kategori_berita ? newsDetail.nama_kategori_berita : '-'}
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
                  {news
                    .filter((row) => row?.slug !== slug)
                    .map((item, k) => (
                      <Link href={`/information/news/${item?.slug}`} key={k}>
                        <li className={'flex items-center gap-2'}>
                          <Image
                            className={'size-[100px] object-cover'}
                            src={item?.gambar}
                            alt={'gambar'}
                            width={100}
                            height={100}
                          />
                          <div className={'flex flex-col gap-1.5'}>
                            <p className="font-semibold text-white line-clamp-2">{item?.judul}</p>
                            <p className={'text-white text-sm flex items-center gap-1.5'}>
                              <FaRegCalendarAlt className={'text-white'} />
                              {item?.published_at
                                ? format(item?.published_at, 'dd MMM yyyy', { locale: id })
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
              <Link href={'/information/news'}>
                <button className={'flex items-center gap-1.5'}>
                  <ArrowLeft />
                  Kembali
                </button>
              </Link>

              <p className="mt-5 text-2xl font-semibold">{newsDetail?.judul}</p>
              <div
                className="html-class mt-5"
                dangerouslySetInnerHTML={{ __html: newsDetail?.isi_berita ?? '' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
