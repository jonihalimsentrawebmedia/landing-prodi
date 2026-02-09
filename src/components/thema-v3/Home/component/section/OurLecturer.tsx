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
import { TitleContent } from '@/components/thema-v3/component/common/titleContent'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const OurLecturer = () => {
  const { sliderLanding } = UseGetSliderLanding()

  const slider = sliderLanding?.filter((row) => row?.is_bawah)

  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto relative min-h-[528px] flex items-center'}>
        <div className="absolute w-full h-full z-10">
          <Carousel>
            <CarouselContent>
              {slider?.map((row, k) => (
                <CarouselItem key={k} className={'relative'}>
                  <div className="absolute w-full z-10 bg-linear-to-t from-primary/90 to-[#333333]/60 min-h-[528px]" />
                  <Image
                    src={row?.gambar_url}
                    alt={'slider'}
                    width={1920}
                    height={528}
                    className={'w-full h-[528px] object-cover'}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="container relative z-20">
          <TitleContent
            text={'Dosen Kami'}
            className={'text-white text-center w-full justify-center'}
            line_position={'bottom'}
          />
          <Carousel className={'mt-8'}>
            <CarouselContent>
              {Array.from({ length: 10 }, (_, k) => (
                <CarouselItem key={k} className={'lg:basis-1/5'}>
                  <div className="border border-white overflow-hidden rounded-lg">
                    <Image
                      src={'/img/dump2.jpg'}
                      alt={'slider'}
                      width={243}
                      height={280}
                      className={'w-full h-[280px] object-cover'}
                    />
                    <div className="bg-white p-2.5">
                      <p className={'font-semibold dark:text-primary'}>Dr. Ir. Ahmad Ramadhan, M.Sc.</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className={'z-10 right-0 !bg-primary'} />
            <CarouselPrevious className={'z-10 left-0 !bg-primary'} />
          </Carousel>

          <Link href={'#'} className={'flex justify-center'}>
            <Button className={'bg-white mt-6 rounded-full text-primary hover:bg-gray-200'}>
              Lihat Semuanya
              <ArrowRight className={'size-4'} />
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
