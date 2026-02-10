'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import { format } from 'date-fns'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AgendaAnnouncementSkeleton } from './skeleton'
import { UseGetAgenda, UseGetAnnouncement, UseGetSliderLanding } from '@/app/homepage/hooks'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { LazyMotion, domAnimation, m } from 'framer-motion'

export const AgendaAnnouncement = () => {
  const { sliderLanding, loading: load1 } = UseGetSliderLanding()
  const { agenda, loading: load2 } = UseGetAgenda({
    page: '1',
    limit: '3',
  })
  const { announcement, loading: load3 } = UseGetAnnouncement({
    page: '1',
    limit: '3',
  })

  const loading = load1 || load2 || load3

  if (loading) return <AgendaAnnouncementSkeleton />

  return (
    <LazyMotion features={domAnimation}>
      <div className={'relative mx-auto w-full max-w-[1920px]'}>
        {/* overlay & slider tetap */}
        <div className="absolute bg-linear-to-t from-primary to-[#24429799] w-full h-full flex items-center z-20 top-0 left-0" />
        <div className="w-full h-full z-10 top-0 left-0 absolute">
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
                ?.filter((row) => row?.is_bawah)
                .map((item, index) => (
                  <CarouselItem key={index}>
                    <div className={'w-full max-w-[1920px] h-full max-h-[470px]'}>
                      <Image
                        src={item?.gambar_url}
                        alt={'slider'}
                        className={'w-full h-[470px] object-cover'}
                        width={1440}
                        height={470}
                      />
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="container z-30 flex flex-col lg:flex-row items-center gap-x-8 relative lg:h-[480px] py-5 lg:py-0 gap-5">
          {/* ================= AGENDA ================= */}
          <m.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-5/12 p-2.5 lg:p-4 bg-blue-50 flex flex-col gap-1.5 lg:gap-5 dark:bg-primary"
          >
            <p className="pl-2 lg:ml-2 border-l-2 border-primary text-primary lg:text-2xl dark:text-white dark:border-l-yellow-500">
              Agenda
            </p>

            <ul className="pl-2">
              {agenda?.map((row, index) => (
                <m.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link href={`/information/agenda/${row?.slug}`}>
                    <div className="py-1 flex items-start lg:items-center gap-1.5">
                      <div className="flex flex-col justify-center items-center whitespace-nowrap gap-1.5 w-fit p-1.5 lg:p-2 lg:px-3 border border-primary bg-white dark:bg-primary dark:border-gray-100 rounded">
                        <p className="text-sm font-semibold lg:text-xl">
                          {row?.waktu_mulai ? format(row?.waktu_mulai, 'dd') : ''}
                        </p>
                        <p className="text-sm lg:text-base">
                          {row?.waktu_mulai ? format(row?.waktu_mulai, 'MMM yy') : ''}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <p className="text-sm font-semibold line-clamp-2 lg:line-clamp-none">
                          {row?.judul}
                        </p>
                        <p className="text-xs lg:font-semibold">{row?.lokasi_kegiatan}</p>
                      </div>
                    </div>
                  </Link>
                </m.li>
              ))}
            </ul>

            <Link
              href={'/information/agenda'}
              className="flex items-center gap-1.5 text-primary font-semibold text-xs lg:text-base dark:text-white"
            >
              Lihat Agenda <ArrowRight className="size-4" />
            </Link>
          </m.div>

          {/* ================= PENGUMUMAN ================= */}
          <m.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-7/12 p-2.5 lg:p-4 border border-white"
          >
            <p className="pl-2 lg:ml-2 border-l-2 border-white text-white lg:text-2xl">
              Pengumuman
            </p>

            <ul className="pl-2 lg:pl-4 flex flex-col gap-1.5 lg:mt-5">
              {announcement?.map((row, index) => (
                <m.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link href={`/information/announcement/${row?.slug}`}>
                    <div className="py-1 flex items-center gap-1.5 text-white">
                      <div className="flex flex-col gap-1.5">
                        <p className="text-sm lg:text-base font-semibold line-clamp-3 lg:line-clamp-none">
                          {row?.judul_pengumuman}
                        </p>
                        <p className="text-xs lg:text-sm flex items-center gap-1.5">
                          <FaRegCalendarAlt />
                          {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : ''}
                        </p>
                      </div>
                    </div>
                  </Link>
                </m.li>
              ))}
            </ul>

            <Link
              href={'/information/announcement'}
              className="flex items-center gap-1.5 mt-2 font-semibold text-xs lg:text-base text-white"
            >
              Lihat Pengumuman <ArrowRight className="size-4" />
            </Link>
          </m.div>
        </div>
      </div>
    </LazyMotion>
  )

  // return (
  //   <>
  //     <div className={'relative mx-auto w-full max-w-[1920px]'}>
  //       <div className="absolute bg-linear-to-t from-primary to-[#24429799] w-full h-full flex items-center z-20 top-0 left-0" />
  //       <div className={`w-full h-full z-10 top-0 left-0 absolute`}>
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
  //               ?.filter((row) => row?.is_bawah)
  //               .map((item, index) => (
  //                 <CarouselItem key={index}>
  //                   <div className={'w-full max-w-[1920px] h-full max-h-[470px]'}>
  //                     <Image
  //                       src={item?.gambar_url}
  //                       alt={'slider'}
  //                       className={'w-full h-[470px] object-cover'}
  //                       width={1440}
  //                       height={470}
  //                     />
  //                   </div>
  //                 </CarouselItem>
  //               ))}
  //           </CarouselContent>
  //         </Carousel>
  //       </div>
  //
  //       <div className="container z-30 flex flex-col lg:flex-row items-center gap-x-8 relative lg:h-[480px] py-5 lg:py-0 gap-5">
  //         <div className="w-full lg:w-5/12 p-2.5 lg:p-4 bg-blue-50 flex flex-col gap-1.5 lg:gap-5 dark:bg-primary">
  //           <p className="pl-2 lg:ml-2 border-l-2 border-primary text-primary lg:text-2xl dark:text-white dark:border-l-yellow-500">
  //             Agenda
  //           </p>
  //           <ul className="pl-2">
  //             {agenda?.map((row, index) => (
  //               <Link href={`/information/agenda/${row?.slug}`} key={index}>
  //                 <li className="py-1 flex items-start lg:items-center gap-1.5">
  //                   <div
  //                     className={clsx(
  //                       `flex flex-col justify-center items-center whitespace-nowrap`,
  //                       'gap-1.5 w-fit p-1.5 lg:p-2 lg:px-3 border border-primary bg-white dark:bg-primary',
  //                       'dark:border-gray-100 rounded'
  //                     )}
  //                   >
  //                     <p className={'text-sm font-semibold lg:text-xl'}>
  //                       {row?.waktu_mulai ? format(row?.waktu_mulai, 'dd') : ''}
  //                     </p>
  //                     <p className={'text-sm lg:text-base'}>
  //                       {row?.waktu_mulai ? format(row?.waktu_mulai, `MMM yy`) : ''}
  //                     </p>
  //                   </div>
  //                   <div className="flex flex-col gap-1.5">
  //                     <p className="text-sm font-semibold line-clamp-2 lg:line-clamp-none">
  //                       {row?.judul}
  //                     </p>
  //                     <p className="text-xs lg:font-semibold">{row?.lokasi_kegiatan}</p>
  //                   </div>
  //                 </li>
  //               </Link>
  //             ))}
  //           </ul>
  //           <Link
  //             href={'/information/agenda'}
  //             className={clsx(
  //               'flex items-center gap-1.5 text-primary font-semibold text-xs lg:text-base',
  //               'dark:text-white'
  //             )}
  //           >
  //             Lihat Agenda <ArrowRight className={'size-4'} />
  //           </Link>
  //         </div>
  //
  //         <div className="w-full lg:w-7/12 p-2.5 lg:p-4 border border-white">
  //           <p className="pl-2 lg:ml-2 border-l-2 border-white text-white lg:text-2xl">
  //             Pengumuman
  //           </p>
  //           <ul className={'pl-2 lg:pl-4 flex flex-col gap-1.5 lg:mt-5'}>
  //             {announcement?.map((row, index) => (
  //               <Link href={`/information/announcement/${row?.slug}`} key={index}>
  //                 <li className="py-1 flex items-center gap-1.5 text-white">
  //                   <div className="flex flex-col gap-1.5">
  //                     <p className="text-sm lg:text-base font-semibold line-clamp-3 lg:line-clamp-none">
  //                       {row?.judul_pengumuman}
  //                     </p>
  //                     <p className="text-xs lg:text-sm flex items-center gap-1.5">
  //                       <FaRegCalendarAlt />
  //                       {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : ''}
  //                     </p>
  //                   </div>
  //                 </li>
  //               </Link>
  //             ))}
  //           </ul>
  //           <Link
  //             href={'/information/announcement'}
  //             className={
  //               'flex items-center gap-1.5 mt-2 font-semibold text-xs lg:text-base text-white'
  //             }
  //           >
  //             Lihat Pengumuman <ArrowRight className={'size-4'} />
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // )
}
