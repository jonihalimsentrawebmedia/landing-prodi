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

const JumbotronSliderV16 = () => {
  const [{ profile }] = useStateContext()
  const { sliderLanding } = UseGetSliderLanding()
  const { accreditation } = UseGetAccreditation()
  const fist = accreditation?.[0]

  return (
    <div className="flex flex-col items-center gap-6 py-10 container-sm mx-auto">
      <div className="flex flex-col items-center justify-center w-[558px]">
        {fist && (
          <div className="rounded-full border border-[#0F766E] bg-white px-4 py-2 text-[#0F766E] font-semibold text-base">
            {fist?.nilai_akreditas?.split('_').join(' ')}
          </div>
        )}

        <p className="text-[#CDA327] text-xl text-center mt-6" style={{ fontFamily: 'Sora' }}>
          Selamat datang di Website Resmi
        </p>

        <h1 className="text-[#0F766E] text-[39px] leading-[58px] text-center" style={{ fontFamily: 'Sora' }}>
          {profile?.SatuanOrganisasi?.kode_jenjang} - {profile?.SatuanOrganisasi?.nama}
        </h1>

        <div className="flex items-center gap-4 mt-6">
          <Link href="/profile">
            <Button className="bg-[#CDA327] hover:bg-[#b8921f] text-white rounded-lg px-4 py-2 h-10">
              Profil
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-[#0F766E] text-[#0F766E] hover:bg-[#0F766E] hover:text-white rounded-lg px-4 py-2 h-10"
            >
              Kontak
            </Button>
          </Link>
        </div>
      </div>

      <div className="w-full max-w-[1280px] h-[360px] lg:h-[640px] rounded-2xl overflow-hidden">
        <Carousel
          plugins={[
            Fade(),
            Autoplay({ delay: 5000, stopOnInteraction: false }),
          ]}
          opts={{ align: 'center', loop: true, duration: 300 }}
        >
          <CarouselContent>
            {sliderLanding?.map((row, k) => (
              <CarouselItem key={k}>
                <Image
                  src={row.gambar_url}
                  alt="Hero"
                  width={1280}
                  height={640}
                  className="h-[360px] lg:h-[640px] w-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default JumbotronSliderV16
