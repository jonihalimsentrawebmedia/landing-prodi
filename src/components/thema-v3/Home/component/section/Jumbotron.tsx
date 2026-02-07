'use client'

import { UseGetSliderLanding } from '@/app/homepage/hooks'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { useStateContext } from '@/contexts'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import { SliderHomeSkeleton } from '../skeleton'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

export const SliderHomeTheme3 = () => {
  const { sliderLanding, loading } = UseGetSliderLanding()
  const [{ profile }] = useStateContext()
  const detail = profile?.SatuanOrganisasi

  if (loading) return <SliderHomeSkeleton />

  return (
    <>
      <div className={'w-full h-[600px] max-w-[1920px] mx-auto relative'}>
        <div
          className={`bg-linear-to-t from-primary to-transparent w-full h-full absolute z-10 flex items-end justify-center`}
        >
          <div className="container py-8">
            <div className="mb-4 border-l-4 border-l-yellow-500 pl-4">
              <p className="text-white">Selamat Datang di Website Resmi</p>
              <p className="text-4xl text-white font-semibold">
                {detail?.kode_jenjang}- {detail?.nama}
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <Link href={detail?.facebook ?? ''} target={'_blank'}>
                <FaFacebook className={'size-9 text-white'} />
              </Link>
              <Link href={detail?.instagram ?? ''} target={'_blank'}>
                <FaInstagram className={'size-9 text-white'} />
              </Link>
              <Link href={detail?.twitter ?? ''} target={'_blank'}>
                <FaTwitter className={'size-9 text-white'} />
              </Link>
              <Link href={detail?.youtube ?? ''} target={'_blank'}>
                <FaYoutube className={'size-9 text-white'} />
              </Link>
            </div>
          </div>
        </div>

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
                    alt={'gambar'}
                    width={1920}
                    height={600}
                    className={'w-full h-[600px] object-cover'}
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}
