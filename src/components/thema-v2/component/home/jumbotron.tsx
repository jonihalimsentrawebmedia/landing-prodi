// 'use client'
//
// import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
// import Image from 'next/image'
// import Autoplay from 'embla-carousel-autoplay'
// import Fade from 'embla-carousel-fade'
// import { Button } from '@/components/ui/button'
// import { ChevronDown } from 'lucide-react'
// import { JumbotronSkeleton } from './skeleton'
// import { useStateContext } from '@/contexts'
// import { UseGetSliderLanding } from '@/app/homepage/hooks'
//
// export const Jumbotron = () => {
//   const { sliderLanding, loading } = UseGetSliderLanding()
//   const [{ profile }] = useStateContext()
//
//   const scrollToBottom = () => {
//     const scrollHeight = document.documentElement.scrollHeight
//     window.scrollTo({
//       top: scrollHeight,
//       behavior: 'smooth',
//     })
//   }
//
//   if (loading) return <JumbotronSkeleton />
//
//   return (
//     <>
//       <div className={'w-full max-w-[1920px] mx-auto relative'}>
//         <div className="absolute z-10 w-full h-full flex items-center justify-center flex-col pointer-events-none bg-linear-to-t from-primary to-transparent">
//           <div className="w-fit flex flex-col gap-5 lg:gap-12">
//             <div className="hero-text text-center">
//               <p className="text-white text-xs lg:text-base font-medium tracking-wide">
//                 Selamat Datang di
//               </p>
//               <h1 className="text-white text-lg lg:text-4xl font-semibold underline underline-offset-[14px] decoration-yellow-600">
//                 {profile?.SatuanOrganisasi?.kode_jenjang} {profile?.SatuanOrganisasi?.nama}
//               </h1>
//             </div>
//             <Button
//               onClick={scrollToBottom}
//               variant={'outline'}
//               className={'hero-text bg-white/30 border-white text-white rounded-full w-full'}
//             >
//               Jelajahi Website <ChevronDown />
//             </Button>
//           </div>
//         </div>
//         <Carousel
//           opts={{ loop: true }}
//           plugins={[
//             Fade(),
//             Autoplay({
//               delay: 5000,
//               stopOnInteraction: false,
//               playOnInit: true,
//             }),
//           ]}
//         >
//           <CarouselContent>
//             {sliderLanding
//               .filter((row) => row?.is_atas)
//               ?.map((item, index) => (
//                 <CarouselItem key={index}>
//                   <div className="relative w-full h-[480px] lg:h-[540px]">
//                     <Image
//                       src={item.gambar_url}
//                       alt="slider"
//                       fill
//                       sizes="100vw"
//                       loading="eager"
//                       placeholder="empty"
//                       priority={index === 0}
//                       className="object-cover"
//                     />
//                   </div>
//                 </CarouselItem>
//               ))}
//           </CarouselContent>
//         </Carousel>
//       </div>
//     </>
//   )
// }

'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { JumbotronSkeleton } from './skeleton'
import { UseGetSliderLanding } from '@/app/homepage/hooks'
import { useStateContext } from '@/contexts'

export const Jumbotron = () => {
  const { sliderLanding, loading } = UseGetSliderLanding()
  const [{ profile }] = useStateContext()

  if (loading) return <JumbotronSkeleton />

  return (
    <div className="w-full max-w-[1920px] mx-auto">
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Fade(),
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            playOnInit: true,
          }),
        ]}
      >
        <CarouselContent>
          {sliderLanding
            .filter((row) => row?.is_atas)
            ?.map((item, index) => (
              <CarouselItem key={index}>
                <div className="w-full h-[480px] lg:h-[640px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-60% to-transparent z-10">
                    <div className="container flex flex-col gap-2.5 justify-end pb-2 lg:justify-center h-full">
                      <p className="text-xl lg:text-5xl font-bold text-gray-800">
                        {profile?.SatuanOrganisasi?.nama} ({profile?.SatuanOrganisasi.kode_jenjang})
                      </p>
                      <p className={'text-sm lg:text-lg font-semibold'}>
                        {profile?.SatuanOrganisasi.nama_parent_satuan_organisasi}
                      </p>
                      <p className={'lg:mt-4 text-sm lg:text-base'}>Mempersiapkan Lulusan Unggul Di Bidang</p>
                      <p className={'text-sm lg:text-base'}>{profile?.SatuanOrganisasi?.nama}</p>
                    </div>
                  </div>
                  <Image
                    src={item.gambar_url}
                    alt="slider"
                    fill
                    sizes="100vw"
                    loading="eager"
                    priority={index === 0}
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
