// 'use client'
//
// import { UseGetAgenda, UseGetAnnouncement, UseGetSliderLanding } from '@/app/homepage/hooks'
// import Image from 'next/image'
// import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
// import Autoplay from 'embla-carousel-autoplay'
// import Fade from 'embla-carousel-fade'
// import { format } from 'date-fns'
// import { FaRegCalendarAlt } from 'react-icons/fa'
// import Link from 'next/link'
// import { ArrowRight } from 'lucide-react'
// import { AgendaAnnouncementSkeleton } from '@/app/homepage/components/skeleton'
//
// export const AnnouncementAgenda = () => {
//   const { sliderLanding, loading: load1 } = UseGetSliderLanding()
//   const { announcement, loading: load2 } = UseGetAnnouncement()
//   const { agenda, loading: load3 } = UseGetAgenda()
//
//   const loading = load1 || load2 || load3
//
//   const ButtonSlider = sliderLanding.filter((row) => row.is_bawah)
//   const ShowAnnouncement = announcement?.slice(0, 3)
//   const ShowAgenda = agenda?.slice(0, 3)
//
//   if (loading) return <AgendaAnnouncementSkeleton />
//
//   return (
//     <>
//       <div className={'w-full max-w-[1920px] h-full relative z-10 -mt-36'}>
//         <div className="absolute h-full w-full bg-linear-to-t from-primary to-primary/70 z-10">
//           <div className="container h-full pt-44 flex-col lg:flex-row flex gap-y-5 lg:gap-y-0 items-start gap-x-8">
//             <div className="lg:w-1/2 w-full">
//               <p className="text-center underline underline-offset-8 decoration-yellow-500 font-semibold text-3xl text-white">
//                 Pengumuman
//               </p>
//               <div className={'flex flex-col gap-y-4 mt-8'}>
//                 {ShowAnnouncement?.map((row, k) => (
//                   <Link href={`/information/announcements/${row?.slug}`} key={k}>
//                     <div className={'border p-2.5 rounded'}>
//                       <p className="text-white font-semibold line-clamp-2">
//                         {row?.judul_pengumuman}
//                       </p>
//                       <p className={'text-white text-xs mt-1.5 flex items-center gap-1.5'}>
//                         <FaRegCalendarAlt className={'size-4'} />
//                         {row?.published_at ? format(row?.published_at, 'dd MMMM yyyy') : '-'}
//                       </p>
//                     </div>
//                   </Link>
//                 ))}
//                 <Link
//                   href={'/information/announcements'}
//                   className={'text-white flex items-center gap-1.5 justify-center'}
//                 >
//                   Lihat Semua <ArrowRight className={'size-4'} />
//                 </Link>
//               </div>
//             </div>
//
//             <div className="w-full lg:w-1/2">
//               <p className="text-center underline underline-offset-8 decoration-yellow-500 font-semibold text-3xl text-white">
//                 Agenda
//               </p>
//               <div className={'space-y-4 mt-8'}>
//                 {ShowAgenda?.map((row, k) => (
//                   <div key={k} className={'flex items-center gap-2'}>
//                     <div className={'border p-3 px-4 rounded text-center'}>
//                       <p className={'text-white text-2xl font-semibold'}>
//                         {row?.published_at ? format(row?.published_at, 'dd') : '-'}
//                       </p>
//                       <p className={'text-white text-2xl font-semibold'}>
//                         {row?.published_at ? format(row?.published_at, 'MMM') : '-'}
//                       </p>
//                     </div>
//                     <Link href={`/information/agenda/${row?.slug}`}>
//                       <p className="text-white font-semibold">{row?.judul}</p>
//                     </Link>
//                   </div>
//                 ))}
//                 <Link
//                   href={'/information/agenda'}
//                   className={'text-white flex items-center gap-1.5 justify-center'}
//                 >
//                   Lihat Semua <ArrowRight className={'size-4'} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Carousel
//           opts={{ loop: true }}
//           plugins={[Autoplay({ delay: 5000, stopOnInteraction: false }), Fade()]}
//         >
//           <CarouselContent>
//             {ButtonSlider?.map((row, k) => (
//               <CarouselItem key={k}>
//                 <Image
//                   src={row?.gambar_url}
//                   alt={'img'}
//                   className={'w-full h-[1050px] lg:h-[680px] object-cover'}
//                   width={1920}
//                   height={680}
//                 />
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//         </Carousel>
//       </div>
//     </>
//   )
// }


'use client'

import { UseGetAgenda, UseGetAnnouncement, UseGetSliderLanding } from '@/app/homepage/hooks'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { format } from 'date-fns'
import { FaRegCalendarAlt } from 'react-icons/fa'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AgendaAnnouncementSkeleton } from '@/app/homepage/components/skeleton'
import { motion } from 'framer-motion'

export const AnnouncementAgenda = () => {
  const { sliderLanding, loading: load1 } = UseGetSliderLanding()
  const { announcement, loading: load2 } = UseGetAnnouncement()
  const { agenda, loading: load3 } = UseGetAgenda()
  
  const loading = load1 || load2 || load3
  
  const ButtonSlider = sliderLanding.filter((row) => row.is_bawah)
  const ShowAnnouncement = announcement?.slice(0, 3)
  const ShowAgenda = agenda?.slice(0, 3)
  
  if (loading) return <AgendaAnnouncementSkeleton />
  
  // ✨ VARIANTS
  const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6 }
    }
  }
  
  const stagger = {
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 }
    }
  }
  
  return (
    <div className="w-full max-w-[1920px] h-full relative z-10 -mt-36">
      
      {/* 🔥 OVERLAY CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute h-full w-full bg-linear-to-t from-primary to-primary/70 z-10"
      >
        <div className="container h-full pt-44 flex-col lg:flex-row flex gap-y-5 lg:gap-y-0 items-start gap-x-8">
          
          {/* ===== PENGUMUMAN ===== */}
          <div className="lg:w-1/2 w-full">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="text-center underline underline-offset-8 decoration-yellow-500 font-semibold text-3xl text-white"
            >
              Pengumuman
            </motion.p>
            
            <motion.div variants={stagger} initial="hidden" whileInView="show" className="flex flex-col gap-y-4 mt-8">
              {ShowAnnouncement?.map((row, k) => (
                <motion.div key={k} variants={item}>
                  <Link href={`/information/announcements/${row?.slug}`}>
                    <div className="border p-2.5 rounded transition-all duration-300 hover:scale-[1.03] hover:bg-white/10 hover:shadow-lg">
                      <p className="text-white font-semibold line-clamp-2">{row?.judul_pengumuman}</p>
                      <p className="text-white text-xs mt-1.5 flex items-center gap-1.5">
                        <FaRegCalendarAlt className="size-4" />
                        {row?.published_at ? format(row?.published_at, 'dd MMMM yyyy') : '-'}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
              
              <Link href="/information/announcements" className="text-white flex items-center gap-1.5 justify-center mt-2">
                Lihat Semua <ArrowRight className="size-4" />
              </Link>
            </motion.div>
          </div>
          
          {/* ===== AGENDA ===== */}
          <div className="w-full lg:w-1/2">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="text-center underline underline-offset-8 decoration-yellow-500 font-semibold text-3xl text-white"
            >
              Agenda
            </motion.p>
            
            <motion.div variants={stagger} initial="hidden" whileInView="show" className="space-y-4 mt-8">
              {ShowAgenda?.map((row, k) => (
                <motion.div key={k} variants={item} className="flex items-center gap-2">
                  <div className="border p-3 px-4 rounded text-center">
                    <p className="text-white text-2xl font-semibold">
                      {row?.published_at ? format(row?.published_at, 'dd') : '-'}
                    </p>
                    <p className="text-white text-2xl font-semibold">
                      {row?.published_at ? format(row?.published_at, 'MMM') : '-'}
                    </p>
                  </div>
                  <Link href={`/information/agenda/${row?.slug}`}>
                    <p className="text-white font-semibold hover:translate-x-1 transition-all">
                      {row?.judul}
                    </p>
                  </Link>
                </motion.div>
              ))}
              
              <Link href="/information/agenda" className="text-white flex items-center gap-1.5 justify-center mt-2">
                Lihat Semua <ArrowRight className="size-4" />
              </Link>
            </motion.div>
          </div>
        
        </div>
      </motion.div>
      
      {/* 🔥 BACKGROUND SLIDER */}
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: false }), Fade()]}
      >
        <CarouselContent>
          {ButtonSlider?.map((row, k) => (
            <CarouselItem key={k}>
              <motion.div
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: 'linear' }}
              >
                <Image
                  src={row?.gambar_url}
                  alt="img"
                  className="w-full h-[1050px] lg:h-[680px] object-cover"
                  width={1920}
                  height={680}
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
