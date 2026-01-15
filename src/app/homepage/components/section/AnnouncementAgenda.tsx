'use client'

import { UseGetAgenda, UseGetAnnouncement, UseGetSliderLanding } from '@/app/homepage/hooks'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { format } from 'date-fns'
import { FaRegCalendarAlt } from 'react-icons/fa'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AgendaAnnouncementSkeleton } from '@/app/homepage/components/skeleton'

export const AnnouncementAgenda = () => {
  const { sliderLanding, loading: load1 } = UseGetSliderLanding()
  const { announcement, loading: load2 } = UseGetAnnouncement()
  const { agenda, loading: load3 } = UseGetAgenda()

  const loading = load1 || load2 || load3

  const ButtonSlider = sliderLanding.filter((row) => row.is_bawah)
  const ShowAnnouncement = announcement?.slice(0, 3)
  const ShowAgenda = agenda?.slice(0, 3)

  if (loading) return <AgendaAnnouncementSkeleton />

  return (
    <>
      <div className={'w-full max-w-[1920px] relative z-10 -mt-36'}>
        <div className="absolute h-full w-full bg-linear-to-t from-primary to-primary/70 z-10">
          <div className="container pt-44 flex items-start gap-x-8">
            <div className="w-1/2">
              <p className="text-center underline underline-offset-8 decoration-yellow-500 font-semibold text-3xl text-white">
                Pengumuman
              </p>
              <div className={'flex flex-col gap-y-4 mt-8'}>
                {ShowAnnouncement?.map((row, k) => (
                  <Link href={`/information/announcements/${row?.slug}`} key={k}>
                    <div className={'border p-2.5 rounded'}>
                      <p className="text-white font-semibold line-clamp-2">
                        {row?.judul_pengumuman}
                      </p>
                      <p className={'text-white text-xs mt-1.5 flex items-center gap-1.5'}>
                        <FaRegCalendarAlt className={'size-4'} />
                        {row?.published_at ? format(row?.published_at, 'dd MMMM yyyy') : '-'}
                      </p>
                    </div>
                  </Link>
                ))}
                <Link
                  href={'/information/announcements'}
                  className={'text-white flex items-center gap-1.5 justify-center'}
                >
                  Lihat Semua <ArrowRight className={'size-4'} />
                </Link>
              </div>
            </div>

            <div className="w-1/2">
              <p className="text-center underline underline-offset-8 decoration-yellow-500 font-semibold text-3xl text-white">
                Agenda
              </p>
              <div className={'space-y-4 mt-8'}>
                {ShowAgenda?.map((row, k) => (
                  <div key={k} className={'flex items-center gap-2'}>
                    <div className={'border p-3 px-4 rounded text-center'}>
                      <p className={'text-white text-2xl font-semibold'}>
                        {row?.published_at ? format(row?.published_at, 'dd') : '-'}
                      </p>
                      <p className={'text-white text-2xl font-semibold'}>
                        {row?.published_at ? format(row?.published_at, 'MMM') : '-'}
                      </p>
                    </div>
                    <Link href={`/information/agenda/${row?.slug}`}>
                      <p className="text-white font-semibold">{row?.judul}</p>
                    </Link>
                  </div>
                ))}
                <Link
                  href={'/information/agenda'}
                  className={'text-white flex items-center gap-1.5 justify-center'}
                >
                  Lihat Semua <ArrowRight className={'size-4'} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: false }), Fade()]}
        >
          <CarouselContent>
            {ButtonSlider?.map((row, k) => (
              <CarouselItem key={k}>
                <Image
                  src={row?.gambar_url}
                  alt={'img'}
                  className={'w-full h-[680px] object-cover'}
                  width={1920}
                  height={680}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}
