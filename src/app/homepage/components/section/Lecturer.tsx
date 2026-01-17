// import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
// import Image from 'next/image'
// import Link from 'next/link'
// import { ArrowRight } from 'lucide-react'
//
// export const LecturerProdiSection = () => {
//   return (
//     <div className="w-full max-w-[1920px] pb-8 mx-auto bg-[#EAEAEA]">
//       <div className="flex justify-center">
//         <p className="text-center font-semibold w-fit text-3xl bg-yellow-500">Dosen Kami</p>
//       </div>
//
//       <Carousel
//         className="mt-6"
//         opts={{
//           align: 'center',
//           loop: true,
//           containScroll: 'trimSnaps',
//         }}
//       >
//         <CarouselContent className="-ml-4">
//           {Array.from({ length: 10 }).map((_, k) => (
//             <CarouselItem key={k} className="pl-4 basis-[60%] md:basis-[40%] lg:basis-[18%]">
//               <div className="bg-white shadow drop-shadow p-5">
//                 <Image
//                   src="/img/lecturer.jpg"
//                   alt="img"
//                   className="w-full h-[310px] object-cover"
//                   width={310}
//                   height={310}
//                 />
//                 <p className="mt-1.5 font-bold">Ir. Choco Wiedodo</p>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>
//
//       <Link href={'/lecturer'} className={'flex items-center mt-5 gap-1.5 justify-center'}>
//         Lihat Semua <ArrowRight className={'size-4'} />
//       </Link>
//     </div>
//   )
// }

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const LecturerProdiSection = () => {
  return (
    <section className="w-full max-w-[1920px] mx-auto bg-[#EAEAEA] py-5 lg:py-12">
      {/* Title */}
      <div className="flex justify-center px-4">
        <p
          className="text-center font-semibold
          text-xl sm:text-2xl lg:text-3xl
          bg-yellow-500"
        >
          Dosen Kami
        </p>
      </div>

      {/* Carousel */}
      <Carousel
        className="mt-6 lg:mt-8"
        opts={{
          align: 'center',
          loop: true,
          containScroll: 'trimSnaps',
        }}
      >
        <CarouselContent className="-ml-3 sm:-ml-4">
          {Array.from({ length: 10 }).map((_, k) => (
            <CarouselItem
              key={k}
              className="
                pl-3 sm:pl-4
                basis-[85%]
                sm:basis-[60%]
                md:basis-[40%]
                lg:basis-[22%]
                xl:basis-[18%]
              "
            >
              <div className="bg-white shadow-md hover:shadow-lg transition">
                {/* Image */}
                <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[310px]">
                  <Image
                    src="/img/lecturer.jpg"
                    alt="img"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="font-bold text-sm sm:text-base line-clamp-2">Ir. Choco Wiedodo</p>
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
