'use client'

import { Context } from '@/contexts/types'
import { UseGetProfileBackground } from '@/app/profile/hooks'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { TitleUnderline } from '@/components/thema-v2/component/common/titleUnderLine'
import { LiveDateTime } from '@/components/thema-v3/component/dateNow'

interface Props {
  title: string
  context: Context
}

export const JumbotronTitleTheme4 = (props: Props) => {
  const { title, context } = props
  const { profileBackground } = UseGetProfileBackground({
    context,
  })

  return (
    <>
      <div className="relative w-full h-[360px] mx-auto max-w-[1920px]">
        <div className="absolute z-10 w-full h-full bg-linear-to-t from-primary/60 to-primary/60">
          <div className="container h-full flex flex-col items-center justify-center relative">
            <TitleUnderline
              text={title}
              className={'decoration-yellow-600 text-white text-2xl lg:text-4xl font-semibold'}
            />
            <div className={'mt-4'}>
              <LiveDateTime className={'text-white'} />
            </div>
          </div>
        </div>
        <Carousel
          opts={{ loop: true }}
          className={'w-full h-[360px]'}
          plugins={[
            Fade(),
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
              playOnInit: true,
            }),
          ]}
        >
          <CarouselContent>
            {profileBackground?.map((item, index) => (
              <CarouselItem key={index}>
                <Image
                  src={item?.gambar_url}
                  alt={'carousel'}
                  className={'w-full h-[360px] object-cover'}
                  height={360}
                  width={1440}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}
