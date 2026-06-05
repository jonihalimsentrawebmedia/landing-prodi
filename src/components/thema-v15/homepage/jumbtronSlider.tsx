'use client'

import { useStateContext } from '@/contexts'
import { UseGetAccreditation } from '@/app/accreditation/hooks'
import { UseGetSliderLanding } from '@/app/homepage/hooks'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const JumbotronSliderV15 = () => {
  const [{ profile }] = useStateContext()
  const { sliderLanding } = UseGetSliderLanding()
  const { accreditation } = UseGetAccreditation()
  const fist = accreditation?.[0]

  return (
    <div className="relative h-[360px] lg:h-[720px] overflow-hidden">
      <Carousel
        plugins={[
          Fade(),
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: 'center',
          loop: true,
        }}
      >
        <CarouselContent>
          {sliderLanding?.map((row, k) => (
            <CarouselItem key={k}>
              <Image
                src={row.gambar_url}
                alt="Hero"
                width={1920}
                height={1080}
                className="h-[360px] lg:h-[720px] w-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container">
          <div className="bg-primary text-white p-6 w-fit shadow-2xl">
            <div className="inline-flex rounded-full bg-white px-4 py-2 text-primary font-semibold text-sm">
              Akreditasi {fist?.nilai_akreditas?.split('_').join(' ')}
            </div>
            <p className="mt-4 text-yellow-400 text-lg lg:text-xl">
              Selamat datang di Website Resmi
            </p>
            <h1 className="mt-2 text-2xl font-semibold">
              {profile?.SatuanOrganisasi?.kode_jenjang} - {profile?.SatuanOrganisasi?.nama}
            </h1>

            <div className="flex gap-4 mt-6">
              <Link href="/profile">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">Profil</Button>
              </Link>

              <Link href="/contact">
                <Button variant="secondary" className="bg-white text-primary hover:bg-white">
                  Kontak
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JumbotronSliderV15
