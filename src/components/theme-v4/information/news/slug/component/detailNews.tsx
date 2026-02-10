'use client'

import { useParams } from 'next/navigation'
import { UseGetNewsDetail } from '@/app/information/news/hooks'
import { UseGetNews } from '@/app/homepage/hooks'
import { FaBookmark, FaRegCalendarAlt, FaUser } from 'react-icons/fa'
import { format } from 'date-fns'
import { id } from 'date-fns/locale/id'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export const DetailNewsSectionTheme4 = () => {
  const { slug } = useParams()
  const { newsDetail } = UseGetNewsDetail((slug as string) ?? '')
  const { news } = UseGetNews({
    id_category: newsDetail?.id_kategori_berita ?? '',
    limit: '4',
    page: '1',
  })

  return (
    <>
      <div className="py-10">
        <div className={'container'}>
          <div className="flex flex-col lg:flex-row gap-5 items-start w-full">
            <div className="w-full">
              <Link href={'/information/news'}>
                <button className={'flex items-center gap-1.5'}>
                  <ArrowLeft />
                  Kembali
                </button>
              </Link>

              <p className="mt-5 lg:text-2xl font-semibold">{newsDetail?.judul}</p>
              <div
                className="html-class mt-5 text-justify"
                dangerouslySetInnerHTML={{ __html: newsDetail?.isi_berita ?? '' }}
              />
            </div>

            <div className="w-full h-full max-w-[335px]">
              <div className="p-5 shadow bg-white dark:bg-primary drop-shadow rounded-lg flex flex-col gap-2">
                <div className={'flex flex-col gap-1'}>
                  <p className={'text-gray-500 flex text-sm items-center gap-1.5'}>
                    <FaRegCalendarAlt className={'text-primary dark:text-white'} />
                    Diupload
                  </p>
                  <p className={'font-semibold text-sm'}>
                    {newsDetail?.published_at
                      ? format(newsDetail.published_at, 'dd MMM yyyy', { locale: id })
                      : ''}
                  </p>
                </div>
                <div className={'flex flex-col gap-1 text-sm'}>
                  <p className={'text-gray-500 flex items-center gap-1.5'}>
                    <FaUser className={'text-primary dark:text-white'} />
                    Penulis
                  </p>
                  <p className={'font-semibold text-sm'}>
                    {newsDetail?.penulis ? newsDetail.penulis : '-'}
                  </p>
                </div>
                <div className={'flex flex-col gap-1'}>
                  <p className={'text-gray-500 flex items-center gap-1.5 text-sm'}>
                    <FaBookmark className={'text-primary dark:text-white'} />
                    Kategori
                  </p>
                  <p className={'font-semibold text-sm'}>
                    {newsDetail?.nama_kategori_berita ? newsDetail.nama_kategori_berita : '-'}
                  </p>
                </div>
              </div>
              <div className="p-5 bg-white dark:bg-primary shadow drop-shadow rounded-lg flex flex-col gap-2 mt-4">
                <ShareContent title={newsDetail?.judul ?? ''} text={'Bagikan Berita'} />
              </div>

              <div className="mt-5">
                <p
                  className={'text-primary font-semibold pl-2 text-xl border-l-primary border-l-4'}
                >
                  Baca Juga
                </p>
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
                            <p className="font-semibold line-clamp-2">{item?.judul}</p>
                            <p className={'text-sm flex items-center gap-1.5'}>
                              <FaRegCalendarAlt className={'text-primary'} />
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
          </div>
        </div>
      </div>
    </>
  )
}
