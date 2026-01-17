'use client'

import Image from 'next/image'
import { UseGetProfileBackground } from '@/app/profile/hooks'
import { Context } from '@/contexts/types'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

interface Props {
  title: string
  context: Context
}

export const JumbotronTitle = (props: Props) => {
  const { title, context } = props
  const { profileBackground: images, loading } = UseGetProfileBackground({
    context: context,
  })

  if (loading) {
    return (
      <div className="relative h-[460px] animate-pulse">
        <div className="absolute z-10 w-full h-full bg-gray-300/40">
          <div className="flex flex-col items-start justify-center container h-full">
            <div className="h-10 w-1/3 bg-gray-300 rounded-md" />
            <div className="h-[120px] w-2/3 bg-gray-300 rounded-md mt-4" />
          </div>
        </div>
        <div className="w-full h-full bg-gray-200" />
      </div>
    )
  }

  return (
    <>
      <div className="relative">
        <div className="absolute z-10 w-full h-full bg-linear-to-t from-primary to-primary/70">
          <div className="flex flex-col items-start justify-center container h-full">
            <p className="font-semibold text-white lg:text-4xl relative z-10">{title}</p>
            <p className="text-6xl lg:text-[117px] font-semibold bg-linear-to-t from-primary relative to-white/60 -mt-14 bg-clip-text text-transparent">
              {title}
            </p>
          </div>
        </div>

        <Carousel
          opts={{ loop: true, align: 'center' }}
          plugins={[Autoplay({ delay: 5000 }), Fade()]}
        >
          <CarouselContent>
            {images?.map((row, k) => (
              <CarouselItem key={k}>
                <Image
                  src={row?.gambar_url || '/img/school.jpg'}
                  alt={'image'}
                  width={1920}
                  height={460}
                  className={'w-full h-[300px] lg:h-[460px] object-cover object-center'}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}
