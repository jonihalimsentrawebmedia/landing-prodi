'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { UseGetLecturer } from '@/app/homepage/hooks'

export const LecturerProdiSection = () => {
  const { lecturer } = UseGetLecturer({
    page: '1',
    limit: '10',
  })

  return (
    <section className="w-full max-w-[1920px] mx-auto bg-[#EAEAEA] dark:bg-gray-900 py-5 lg:py-12">
      <div className="flex justify-center px-4">
        <p
          className="text-center font-semibold
          text-xl sm:text-2xl lg:text-3xl
          bg-yellow-500"
        >
          Dosen Kami
        </p>
      </div>

      <Carousel
        className="mt-6 lg:mt-8"
        opts={{
          align: 'center',
          loop: true,
          containScroll: 'trimSnaps',
        }}
      >
        <CarouselContent className="-ml-3 sm:-ml-4">
          {lecturer?.map((row, k) => (
            <CarouselItem
              key={k}
              className="pl-3 sm:pl-4 basis-[85%] sm:basis-[60%] md:basis-[40%] lg:basis-[22%] xl:basis-[18%]"
            >
              <div className="bg-white shadow-md hover:shadow-lg transition h-full flex flex-col">
                <div className="relative w-full h-[310px]">
                  <Image
                    src={row?.gambar_url ?? '/img/noimg.png'}
                    alt={row?.nama || 'lecturer'}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <p className="font-bold text-sm sm:text-base dark:text-primary line-clamp-2">
                    {row?.nama}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Link
        href="/lecturer"
        className="
          mt-6 lg:mt-8
          flex items-center justify-center gap-1.5
          text-sm sm:text-base
          font-medium text-primary
          hover:underline
        "
      >
        Lihat Semua <ArrowRight className="size-4" />
      </Link>
    </section>
  )
}
