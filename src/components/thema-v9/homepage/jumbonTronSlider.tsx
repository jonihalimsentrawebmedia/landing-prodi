'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import Image from 'next/image'
import React from 'react'
import { UseGetSliderLanding } from '@/app/homepage/hooks'
import { useStateContext } from '@/contexts'

const JumbotronSliderV9 = () => {
  const { sliderLanding, loading } = UseGetSliderLanding()
  const [{ profile }] = useStateContext()
  const detail = profile?.SatuanOrganisasi

  const items = sliderLanding?.filter((row) => row?.is_atas) || []

  if (loading) return <></>
  return (
    <>
      <div className="max-w-[1920px] mx-auto w-full relative">
        <div
          className={clsx(
            'flex items-end justify-center absolute z-10 inset-0 h-full',
            'bg-gradient-to-t from-primary to-transparent'
          )}
        >
          <div className="container-sm relative z-10 flex items-start justify-end pb-8 h-full flex-col gap-1.5 lg:gap-4">
            <p className="text-yellow-500 lg:text-2xl font-medium mb-2 text-center w-full">
              Selamat datang di Website Resmi
            </p>
            <h1 className={'lg:text-4xl font-semibold text-white text-2xl text-center w-full'}>
              {detail?.kode_jenjang}-{detail?.nama}
            </h1>
            <div className="flex justify-center gap-2 lg:gap-4 w-full">
              <Link href={'/profile'}>
                <Button className="bg-yellow-500 hover:bg-yellow-500 text-white lg:px-8 lg:py-6 lg:text-lg lg:rounded-xl">
                  Profile
                </Button>
              </Link>
              <Link href={'/contact'}>
                <Button
                  variant="outline"
                  className="border-yellow-500 text-yellow-500 hover:text-yellow-500 lg:px-8 lg:py-6 lg:text-lg lg:rounded-xl"
                >
                  Kontak & Pendaftaran
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Carousel
          plugins={[Autoplay({ delay: 5000 }), Fade()]}
          opts={{ loop: true, duration: 300 }}
        >
          <CarouselContent>
            {items?.map((row, k) => (
              <CarouselItem key={k}>
                <div className="w-full h-[360px] lg:h-[720px] relative">
                  <Image
                    src={row?.gambar_url}
                    alt={'slider'}
                    fill
                    className={'w-full object-cover h-[360px] lg:h-[720px]'}
                    loading={'eager'}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}

export default JumbotronSliderV9
