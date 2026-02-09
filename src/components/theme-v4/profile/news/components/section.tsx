'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { NewsAboutSection } from './skeleton'
import { UseGetNews } from '@/app/homepage/hooks'
import Image from 'next/image'
import { FaCalendarAlt } from 'react-icons/fa'
import { formatDate } from 'date-fns'

export const SectionNewsProfile = () => {
  const { news, loading } = UseGetNews({
    page: '1',
    limit: '3',
  })

  if (loading) return <NewsAboutSection />

  return (
    <>
      <div className={'flex flex-col gap-5'}>
        <p className="text-3xl font-semibold text-primary dark:text-white">Berita</p>
        <div className="flex flex-col lg:grid grid-cols-3 gap-5">
          {news?.map((row, k) => (
            <Link href={`/information/news/${row?.slug}`} key={k}>
              <div className={'w-full rounded overflow-hidden border'} key={k}>
                <Image
                  src={row?.gambar}
                  alt={'gamabr'}
                  className={'w-full h-[230px]'}
                  width={305}
                  height={230}
                />
                <div className="p-2.5 flex flex-col bg-white border border-white">
                  <p className="font-semibold line-clamp-2">{row?.judul}</p>
                  <p className={'flex items-center gap-1.5 text-sm text-gray-500'}>
                    <FaCalendarAlt className={'text-primary'} />
                    {row?.published_at ? formatDate(row?.published_at, 'dd MMM yyyy') : ''}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href={'/information/news'}
          className={'text-blue-500 underline underline-offset-4 font-semibold'}
        >
          Lihat Berita Lainnya
        </Link>

        <div className="flex items-center mt-5 justify-between">
          <Link href={'/profile/lecturer'}>
            <Button variant={'outline'} className={'rounded-full border border-primary'}>
              <ArrowLeft className={'size-4'} />
              Dosen
            </Button>
          </Link>
          <Link href={'/profile/gallery'}>
            <Button variant={'outline'} className={'rounded-full border border-primary'}>
              Galeri
              <ArrowRight className={'size-4'} />
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
