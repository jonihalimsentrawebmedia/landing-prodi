'use client'

import { Context } from '@/contexts/types'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import { TitleUnderline } from '@/components/thema-v2/component/common/titleUnderLine'
import { UseGetProfileBackground } from '@/app/profile/hooks'
import { LiveDateTime } from '@/components/thema-v3/component/dateNow'

interface Props {
  title: string
  context: Context
}

export const JumbotronTitleTheme3 = (props: Props) => {
  const { title, context } = props
  const { profileBackground } = UseGetProfileBackground({
    context,
  })
  return (
    <>
      <div className={'relative w-full h-[280px] max-w-[1920px] mx-auto'}>
        <div className="absolute z-10 w-full h-full bg-linear-to-t from-primary/60 to-primary/60">
          <div className="container h-full flex items-center relative">
            <div className="absolute top-5 right-5">
              <LiveDateTime className={'text-white'} />
            </div>
            <TitleUnderline
              text={title}
              className={
                'decoration-yellow-600 text-white text-2xl lg:text-4xl font-semibold absolute bottom-5'
              }
            />
          </div>
        </div>

        <Carousel
          opts={{ loop: true }}
          className={'w-full h-[280px]'}
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
                  className={'w-full h-[280px] object-cover'}
                  height={240}
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
