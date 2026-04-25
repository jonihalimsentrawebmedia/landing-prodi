'use client'

import { useStateContext } from '@/contexts'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { UseGetSliderLanding } from '@/app/homepage/hooks'
import Image from 'next/image'
import React from 'react'
import { clsx } from 'clsx'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

const JumbotronSliderV12 = () => {
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
            'flex items-center justify-center',
            'absolute z-10 inset-0 bg-linear-to-r from-primary to-transparent'
          )}
        >
          <div className="container-sm relative z-10 flex items-start justify-center h-full flex-col gap-1.5 lg:gap-4">
            <p className="text-yellow-500 lg:text-2xl font-medium mb-2 text-center">
              Selamat datang di Website Resmi
            </p>
            <h1 className={'lg:text-4xl font-semibold text-white text-2xl text-center'}>
              {detail?.kode_jenjang}-{detail?.nama}
            </h1>
            <div className="flex justify-center gap-2 lg:gap-4">
              <Link href={'/profile'}>
                <Button className="bg-[#278374] hover:bg-[#1f5f52] text-white lg:px-8 lg:py-6 lg:text-lg lg:rounded-xl">
                  Profile
                </Button>
              </Link>
              <Link href={'/contact'}>
                <Button
                  variant="outline"
                  className="border-[#278374] text-[#278374] lg:px-8 lg:py-6 lg:text-lg lg:rounded-xl"
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

export default JumbotronSliderV12
