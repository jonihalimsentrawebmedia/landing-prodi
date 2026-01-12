import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const LecturerProdiSection = () => {
  return (
    <div className="w-full max-w-[1920px] pb-8 mx-auto bg-[#EAEAEA]">
      <div className="flex justify-center">
        <p className="text-center font-semibold w-fit text-3xl bg-yellow-500">
          Dosen Kami
        </p>
      </div>

      <Carousel
        className="mt-6"
        opts={{
          align: 'center',
          loop: true,
          containScroll: 'trimSnaps',
        }}
      >
        <CarouselContent className="-ml-4">
          {Array.from({ length: 10 }).map((_, k) => (
            <CarouselItem
              key={k}
              className="pl-4 basis-[60%] md:basis-[40%] lg:basis-[18%]"
            >
              <div className="bg-white shadow drop-shadow p-5">
                <Image
                  src="/img/lecturer.jpg"
                  alt="img"
                  className="w-full h-[310px] object-cover"
                  width={310}
                  height={310}
                />
                <p className="mt-1.5 font-bold">Ir. Choco Wiedodo</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <Link href={'#'} className={'flex items-center mt-5 gap-1.5 justify-center'}>
        Lihat Semua <ArrowRight />
      </Link>
    </div>
  )
}