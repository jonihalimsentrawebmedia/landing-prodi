'use client'

import { UseGetNews } from '@/app/homepage/hooks'
import Image from 'next/image'
import { MdCalendarMonth } from 'react-icons/md'
import { format } from 'date-fns'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SkeletonGallery } from '@/app/profile/gallery/components/skeleton'
import { CardNewsRow } from '@/app/information/components/CardNewsRow'

export const SectionNewsProfile = () => {
  const { news, loading } = UseGetNews()

  return (
    <>
      <div className={'flex flex-col gap-5'}>
        <p className="text-3xl font-semibold text-primary">Barita</p>
        {loading ? (
          <SkeletonGallery />
        ) : (
          <>
            {news?.map((item, k) => (
              <Link href={`/information/news/${item?.slug}`} key={k}>
                <CardNewsRow item={item} />
              </Link>
            ))}
          </>
        )}

        <Link href={'/information/news'} className={'text-blue-500 underline underline-offset-4 font-semibold'}>
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
