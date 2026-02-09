'use client'

import { UseGetNews } from '@/app/homepage/hooks'
import { UseGetProfileBackground } from '@/app/profile/hooks'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { FaCalendarAlt } from 'react-icons/fa'
import { formatDate } from 'date-fns'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NewsLandingSkeleton } from './skeleton'

export const NewNewsLanding = () => {
  const { profileBackground: bg, loading: load2 } = UseGetProfileBackground({
    context: 'INFORMASI',
  })

  const { news, loading: load1 } = UseGetNews({
    page: '1',
    limit: '4',
  })

  const loading = load1 || load2

  if (loading) return <NewsLandingSkeleton />

  return (
    <>
      <div
        className={
          'w-full mx-auto max-w-[1920px] relative lg:h-[552px] flex items-center justify-center'
        }
      >
        <div className="absolute z-10 w-full h-full bg-linear-to-t from-primary to-[#33333300]"></div>
        <Carousel
          className={'absolute w-full h-full'}
          opts={{ loop: true, align: 'center' }}
          plugins={[Autoplay({ delay: 5000 }), Fade()]}
        >
          <CarouselContent>
            {bg?.map((row, k) => (
              <CarouselItem key={k}>
                <Image
                  src={row?.gambar_url}
                  alt={'gambar'}
                  className={'w-full h-[552px] object-cover'}
                  width={1920}
                  height={552}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="container py-10 relative z-20">
          <p className="font-semibold text-3xl">
            <span className={'underline underline-offset-[8px] decoration-primary'}>Berita</span>
            Terbaru
          </p>

          <div className="mt-5 grid grid-cols-4 gap-5">
            {news?.map((row, k) => (
              <div className={'w-full rounded overflow-hidden'} key={k}>
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
            ))}
          </div>
          <Link
            href={'/information/news'}
            className={'mt-5 text-center w-full flex items-center justify-center'}
          >
            <Button className={'rounded-full bg-white text-primary hover:bg-gray-50'}>
              Lihat Berita Lainnya
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
