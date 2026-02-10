'use client'

import { UseGetSliderLanding } from '@/app/homepage/hooks'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { Card, CardContent } from '@/components/ui/card'
import { useStateContext } from '@/contexts'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { clsx } from 'clsx'

export const SliderLandingTheme4 = () => {
  const { sliderLanding } = UseGetSliderLanding()
  const [{ profile }] = useStateContext()
  const detail = profile?.SatuanOrganisasi

  return (
    <>
      <div className={'w-full mx-auto max-w-[1920px] lg:min-h-[600px] relative'}>
        <div className="lg:p-5 w-full relative">
          <div
            className={`bg-[#33333380] absolute z-10 w-full lg:w-[calc(100%-40px)] h-full lg:h-[600px] rounded-lg`}
          />
          <Carousel
            opts={{ loop: true, align: 'center' }}
            plugins={[Autoplay({ delay: 5000 }), Fade()]}
          >
            <CarouselContent>
              {sliderLanding
                ?.filter((row) => row?.is_atas)
                .map((row, k) => (
                  <CarouselItem key={k}>
                    <Image
                      src={row?.gambar_url}
                      alt={'image'}
                      width={1920}
                      height={600}
                      className={'w-full h-[300px] lg:h-[600px] lg:rounded-lg object-cover'}
                    />
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>
        </div>

        <Card
          className={clsx(
            'lg:max-w-[960px] w-full p-2 absolute z-10 lg:-bottom-16 transform left-1/2 -translate-x-1/2',
            'w-[calc(100%-30px)] -bottom-20'
          )}
        >
          <CardContent className={'p-2'}>
            <div className="flex flex-col justify-center items-center gap-1.5">
              <p className="text-center text-xs lg:text-base">Selamat Datang di Website Resmi</p>
              <p className="text-primary lg:text-4xl font-semibold text-2xl text-center">
                {detail?.kode_jenjang}-{detail?.nama}
              </p>
              <div className={'w-full bg-[#CDA327] h-[2px] my-1.5'} />
              <ul className={'w-fit flex items-center gap-5'}>
                <FaFacebook className={'size-8 text-primary'} />
                <FaInstagram className={'size-8 text-primary'} />
                <FaTwitter className={'size-8 text-primary'} />
                <FaYoutube className={'size-8 text-primary'} />
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
