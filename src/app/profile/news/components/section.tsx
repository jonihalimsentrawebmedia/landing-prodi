'use client'

import { UseGetNews } from '@/app/homepage/hooks'
import Image from 'next/image'
import { MdCalendarMonth } from 'react-icons/md'
import { format } from 'date-fns'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SkeletonGallery } from '@/app/profile/gallery/components/skeleton'

export const SectionNewsProfile = () => {
  const { news, loading } = UseGetNews()

  return (
    <>
      <div className={'space-y-5'}>
        <p className="text-3xl font-semibold text-primary">Barita</p>
        {loading ? (
          <SkeletonGallery />
        ) : (
          <>
            {news?.map((item, k) => (
              <div key={k} className={'flex items-center gap-5 bg-white'}>
                <div className="min-w-[214px] h-[180px]">
                  <Image
                    src={item?.gambar}
                    alt={item.judul}
                    className={'w-[214px] h-[180px] object-cover'}
                    width={214}
                    height={180}
                  />
                </div>
                <div className={'pl-0 p-2'}>
                  <p className="text-2xl line-clamp-2 font-semibold">{item?.judul}</p>
                  <p className={'flex items-center gap-1 text-gray-500'}>
                    <MdCalendarMonth />
                    {item?.published_at ? format(item?.published_at, 'dd MMM yyyy') : '-'}
                  </p>
                  <div
                    className={'line-clamp-2'}
                    dangerouslySetInnerHTML={{ __html: item?.isi_berita ?? '' }}
                  />
                </div>
              </div>
            ))}
          </>
        )}

        <Link href={'#'} className={'text-blue-500 underline underline-offset-4 font-semibold'}>
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
