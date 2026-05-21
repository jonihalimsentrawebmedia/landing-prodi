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

const JumbotronSliderV14 = () => {
  const [{ profile }] = useStateContext()
  const { sliderLanding } = UseGetSliderLanding()
  const { accreditation } = UseGetAccreditation()
  const fist = accreditation?.[0]

  return (
    <div className={'w-full lg:h-[720px] relative'}>
      <div className="absolute container-sm bottom-5 mb-4 left-1/2 z-20 transform -translate-x-1/2">
        <div className="bg-white p-4 border-l-4 border-yellow-500 w-fit space-y-2">
          <div className={'p-1.5 px-3 rounded-full border-primary border-2 w-fit'}>
            <p className="font-semibold text-primary">
              {fist?.nilai_akreditas.split('_').join(' ')}
            </p>
          </div>
          <p className="text-yellow-500 font-semibold text-xl">Selamat datang di Website Resmi</p>
          <p className={'text-4xl font-semibold'}>
            {profile?.SatuanOrganisasi?.kode_jenjang} - {profile?.SatuanOrganisasi?.nama}
          </p>
          <div className="flex items-center gap-2.5">
            <Link href={'/profile'}>
              <Button className={'bg-yellow-500 hover:bg-yellow-600 text-white'}>Profile</Button>
            </Link>
            <Link href={'/contact'}>
              <Button
                variant={'outline'}
                className={'text-primary hover:text-primary border-primary'}
              >
                Kontak
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Carousel
        plugins={[
          Fade(),
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{ align: 'center', loop: true, duration: 300 }}
      >
        <CarouselContent>
          {sliderLanding?.map((row, k) => (
            <CarouselItem key={k}>
              <Image
                src={row?.gambar_url}
                alt={'carousel'}
                className={'w-full h-[720px] object-cover'}
                width={1920}
                height={720}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default JumbotronSliderV14
