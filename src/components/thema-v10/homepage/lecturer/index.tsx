'use client'

import { UseGetLecturer } from '@/app/homepage/hooks'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

const OurLecturerSectionV10 = () => {
  const { lecturer } = UseGetLecturer({ page: '1', limit: '10' })

  return (
    <>
      <div className="lg:py-10">
        <div className="container-sm">
          <div className="flex justify-center">
            <p className="text-3xl text-center text-primary font-semibold border-b-[4px] pb-2 border-b-yellow-500 w-fit">
              Dosen Kami
            </p>
          </div>
        </div>

        <div className="w-full max-w-[1920px] mx-auto mt-8  ">
          <Carousel
            opts={{
              align: 'center',
              loop: true,
              duration: 300,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent>
              {lecturer?.map((row, k) => (
                <CarouselItem key={k} className={'basis-[302px] lg:w-[302px] pl-5 ml-0 mb-2'}>
                  <div className="w-full h-[364px] relative rounded-lg overflow-hidden shadow border-2 border-primary">
                    <Image
                      fill
                      src={row?.gambar_url ?? '/img/noimg.png'}
                      alt={row?.nama}
                      className={'object-cover'}
                    />
                    <div className={'bg-white shadow border absolute z-10 bottom-0 w-full p-2'}>
                      {row?.nama}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselNext className="right-0 h-full w-[150px] hover:bg-gradient-to-r hover:from-transparent rounded-none border-none shadow-none bg-gradient-to-r from-transparent to-[#1E3A8A] text-white hover:to-[#162e6b]" />
            <CarouselPrevious className="right-0 h-full w-[150px] hover:bg-gradient-to-l hover:from-transparent rounded-none border-none shadow-none bg-gradient-to-l from-transparent to-[#1E3A8A] text-white hover:to-[#162e6b]" />
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default OurLecturerSectionV10
