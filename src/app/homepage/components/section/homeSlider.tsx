'use client'

import Image from 'next/image'
import { UseGetSliderLanding } from '@/app/homepage/hooks'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { useStateContext } from '@/contexts'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { motion } from 'framer-motion'

export const HomeSlider = () => {
  const { sliderLanding, loading } = UseGetSliderLanding()
  const topSlider = sliderLanding?.filter((item) => item.is_atas)
  const [{ profile }] = useStateContext()

  if (loading)
    return (
      <div className="w-full h-[450px] lg:h-[900px] bg-gray-300 animate-pulse relative">
        <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-primary/40 flex items-end">
          <div className="container py-8 space-y-3">
            <div className="h-5 w-60 bg-white/40 rounded"></div>
            <div className="h-12 w-[500px] bg-white/40 rounded"></div>
          </div>
        </div>
      </div>
    )

  return (
    <>
      <div className="lg:max-w-[1920px] w-full mx-auto relative">
        <div className="w-full h-full absolute z-10 bg-linear-to-t from-primary to-primary/70 flex items-end">
          <div className="container py-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-xl"
            >
              Selamat Datang Di Website Resmi
            </motion.p>
            {/*<p className="text-white text-xl">Selamat Datang Di Website Resmi</p>*/}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:text-6xl text-white font-semibold"
            >
              {profile?.SatuanOrganisasi?.nama}
            </motion.p>
          </div>
        </div>
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Fade(),
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent>
            {topSlider?.map((item, k) => (
              <CarouselItem key={k}>
                <Image
                  priority
                  loading={'eager'}
                  src={item?.gambar_url || '/img/noimg.png'}
                  alt={'image'}
                  className={'object-cover w-full h-[320px] lg:h-[900px]'}
                  width={1920}
                  height={900}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}
