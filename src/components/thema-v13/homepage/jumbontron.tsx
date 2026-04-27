'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useStateContext } from '@/contexts'
import { UseGetAccreditation } from '@/app/accreditation/hooks'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { UseGetSliderLanding } from '@/app/homepage/hooks'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

const JumbotronSliderV13 = () => {
  const [{ profile }] = useStateContext()
  const { sliderLanding } = UseGetSliderLanding()
  const { accreditation } = UseGetAccreditation()
  const fist = accreditation?.[0]

  return (
    <div className="relative bg-primary/5 min-h-[500px] lg:min-h-[620px] flex items-center overflow-hidden">
      <div className="absolute w-full h-full left-0 top-0">
        <Image
          src={'/img/bg-13.png'}
          alt={'gambar'}
          width={1920}
          height={620}
          className={'w-full h-full object-cover opacity-20'}
        />
      </div>

      <div className="container-sm relative z-10 px-5 lg:px-8 py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white border border-primary rounded-full px-5 py-2 mb-6">
              <span className="text-primary font-semibold text-sm">
                Akreditasi {fist?.nilai_akreditas.split('_').join(' ')}
              </span>
            </div>

            <p className="text-[#CDA327] text-xl lg:text-2xl font-medium mb-3">
              Selamat datang di Website Resmi
            </p>

            <h1 className="text-primary text-4xl lg:text-5xl font-semibold leading-tight mb-8">
              {profile?.SatuanOrganisasi?.kode_jenjang} - {profile?.SatuanOrganisasi?.nama}
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/profile">
                <Button className="bg-primary hover:bg-primary text-white px-8 py-6 text-base rounded-xl w-full sm:w-auto">
                  Profil
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-base rounded-xl w-full sm:w-auto"
                >
                  Kontak
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-[628px] h-[314px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
            <Carousel
              className={'w-full h-full pl-0!'}
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
              opts={{ loop: true }}
            >
              <CarouselContent className={'w-full h-full ml-0! pl-0!'}>
                {sliderLanding?.map((row, k) => (
                  <CarouselItem key={k} className={'w-full h-full pl-0!'}>
                    <div className="relative w-full max-w-[628px] h-[314px] lg:h-[420px]">
                      <Image src={row?.gambar_url} alt={'gambar'} fill />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JumbotronSliderV13
