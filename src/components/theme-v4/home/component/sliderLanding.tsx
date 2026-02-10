// 'use client'
//
// import { UseGetSliderLanding } from '@/app/homepage/hooks'
// import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
// import Image from 'next/image'
// import Autoplay from 'embla-carousel-autoplay'
// import Fade from 'embla-carousel-fade'
// import { Card, CardContent } from '@/components/ui/card'
// import { useStateContext } from '@/contexts'
// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
// import { clsx } from 'clsx'
// import { SliderLandingSkeleton } from '@/components/theme-v4/home/component/skeleton'
//
// export const SliderLandingTheme4 = () => {
//   const { sliderLanding, loading } = UseGetSliderLanding()
//   const [{ profile }] = useStateContext()
//   const detail = profile?.SatuanOrganisasi
//
//   if (loading) return <SliderLandingSkeleton />
//
//   return (
//     <>
//       <div className={'w-full mx-auto max-w-[1920px] lg:min-h-[600px] relative'}>
//         <div className="lg:p-5 w-full relative">
//           <div
//             className={`bg-[#33333380] absolute z-10 w-full lg:w-[calc(100%-40px)] h-full lg:h-[600px] rounded-lg`}
//           />
//           <Carousel
//             opts={{ loop: true, align: 'center' }}
//             plugins={[Autoplay({ delay: 5000 }), Fade()]}
//           >
//             <CarouselContent>
//               {sliderLanding
//                 ?.filter((row) => row?.is_atas)
//                 .map((row, k) => (
//                   <CarouselItem key={k}>
//                     <Image
//                       src={row?.gambar_url}
//                       alt={'image'}
//                       width={1920}
//                       height={600}
//                       className={'w-full h-[300px] lg:h-[600px] lg:rounded-lg object-cover'}
//                     />
//                   </CarouselItem>
//                 ))}
//             </CarouselContent>
//           </Carousel>
//         </div>
//
//         <Card
//           className={clsx(
//             'lg:max-w-[960px] w-full p-2 absolute z-10 lg:-bottom-16 transform left-1/2 -translate-x-1/2',
//             'w-[calc(100%-30px)] -bottom-20'
//           )}
//         >
//           <CardContent className={'p-2'}>
//             <div className="flex flex-col justify-center items-center gap-1.5">
//               <p className="text-center text-xs lg:text-base">Selamat Datang di Website Resmi</p>
//               <p className="text-primary lg:text-4xl font-semibold text-2xl text-center">
//                 {detail?.kode_jenjang}-{detail?.nama}
//               </p>
//               <div className={'w-full bg-[#CDA327] h-[2px] my-1.5'} />
//               <ul className={'w-fit flex items-center gap-5'}>
//                 <FaFacebook className={'size-8 text-primary'} />
//                 <FaInstagram className={'size-8 text-primary'} />
//                 <FaTwitter className={'size-8 text-primary'} />
//                 <FaYoutube className={'size-8 text-primary'} />
//               </ul>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </>
//   )
// }

'use client'

import { UseGetSliderLanding } from '@/app/homepage/hooks'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { Card, CardContent } from '@/components/ui/card'
import { useStateContext } from '@/contexts'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { clsx } from 'clsx'
import { SliderLandingSkeleton } from '@/components/theme-v4/home/component/skeleton'
import { motion, Variants } from 'framer-motion'

export const SliderLandingTheme4 = () => {
  const { sliderLanding, loading } = UseGetSliderLanding()
  const [{ profile }] = useStateContext()
  const detail = profile?.SatuanOrganisasi

  if (loading) return <SliderLandingSkeleton />

  // Variants untuk card
  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 15 } },
  }

  // Variants untuk social icons
  const iconVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.15, type: 'spring', stiffness: 100 },
    }),
  }

  return (
    <div className="w-full mx-auto max-w-[1920px] lg:min-h-[600px] relative">
      {/* Carousel */}
      <div className="lg:p-5 w-full relative">
        <div className="bg-[#33333380] absolute z-10 w-full lg:w-[calc(100%-40px)] h-full lg:h-[600px] rounded-lg" />
        <Carousel
          opts={{ loop: true, align: 'center' }}
          plugins={[Autoplay({ delay: 5000 }), Fade()]}
        >
          <CarouselContent>
            {sliderLanding
              ?.filter((row) => row?.is_atas)
              .map((row, k) => (
                <CarouselItem key={k}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src={row?.gambar_url}
                      alt="image"
                      width={1920}
                      height={600}
                      className="w-full h-[300px] lg:h-[600px] lg:rounded-lg object-cover"
                    />
                  </motion.div>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Info Card */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        className={clsx(
          'lg:max-w-[960px] w-full p-2 absolute z-10 lg:-bottom-16 transform left-1/2 -translate-x-1/2',
          'w-[calc(100%-30px)] -bottom-20'
        )}
      >
        <Card>
          <CardContent className="p-2">
            <div className="flex flex-col justify-center items-center gap-1.5">
              <motion.p
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.1 } },
                }}
                className="text-center text-xs lg:text-base"
              >
                Selamat Datang di Website Resmi
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
                }}
                className="text-primary lg:text-4xl font-semibold text-2xl text-center"
              >
                {detail?.kode_jenjang}-{detail?.nama}
              </motion.p>

              <motion.div
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1, transition: { delay: 0.3, duration: 0.5 } },
                }}
                className="w-full bg-[#CDA327] h-[2px] my-1.5 origin-left"
              />

              <motion.ul className="w-fit flex items-center gap-5">
                {[FaFacebook, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={iconVariants}
                  >
                    <Icon className="size-8 text-primary cursor-pointer hover:scale-110 transition-transform duration-300" />
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
