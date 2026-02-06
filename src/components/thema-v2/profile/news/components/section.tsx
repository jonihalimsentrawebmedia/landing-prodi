'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { NewsAboutSection } from './skeleton'
import { UseGetNews } from '@/app/homepage/hooks'
import { CardNewsItem } from '@/components/thema-v2/component/common/cardNews'

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
          {news?.map((item, k) => (
            <Link href={`/information/news/${item?.slug}`} key={k}>
              <CardNewsItem
                gambar={item?.gambar}
                judul={item?.judul}
                isi_berita={item?.isi_berita}
                published_at={item?.published_at as string}
              />
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
