'use client'

import { UseGetSliderLanding } from '@/app/homepage/hooks'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { OurLecturerSkeleton } from './skeleton'

export const OurLecturer = () => {
  const { loading, sliderLanding } = UseGetSliderLanding()
  const bg = sliderLanding?.filter((row) => row.is_bawah)

  if (loading) return <OurLecturerSkeleton />

  return (
    <>
      <div className={'w-full h-full mx-auto max-w-[1920px] relative'}>
        <div className="absolute top-0 bg-linear-to-t from-primary to-[#33333399] w-full h-full z-10" />

        <div className="container relative z-10 py-10">
          <p className="text-white text-2xl underline font-semibold text-center decoration-[3px] underline-offset-[10px] decoration-white">
            Dosen Kami
          </p>

          <Carousel className={'mt-8'}>
            <CarouselContent>
              {Array.from({ length: 10 }, (_, k) => k + 1).map((row, k) => (
                <CarouselItem key={k} className={'basis-5/6 lg:basis-1/5'}>
                  <div className={'bg-white p-1 w-fit rounded-lg relative'}>
                    <Image
                      src={'/img/dumpLecture.jpg'}
                      alt={'image'}
                      width={245}
                      height={360}
                      className={'w-[245px] h-[360px] object-cover rounded-lg'}
                    />
                    <div
                      className={
                        'absolute w-[calc(100%-8px)] rounded-b-lg p-2.5 z-10 bg-white/90 bottom-0 dark:text-primary'
                      }
                    >
                      Dr. Ir. Ahmad Ramadhan, M.Sc.
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={'left-0 lg:-left-10'} />
            <CarouselNext className={'right-0 lg:-right-10'} />
          </Carousel>

          <Link href={'/lecturer'} className={'flex items-center justify-center mt-5'}>
            <Button
              variant={'outline'}
              className={'rounded-full border-primary text-primary px-5 hover:text-primary dark:text-white'}
            >
              Lihat Semua Dosen
            </Button>
          </Link>
        </div>

        <Carousel
          opts={{ loop: true, align: 'center' }}
          plugins={[Autoplay({ delay: 5000 }), Fade()]}
          className={'absolute top-0 left-0 w-full h-full'}
        >
          <CarouselContent>
            {bg?.map((row, k) => (
              <CarouselItem key={k} className={'w-full h-full'}>
                <Image
                  src={row?.gambar_url}
                  alt={'gambar'}
                  className={'w-full h-[568px] object-cover'}
                  width={1920}
                  height={532}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}
