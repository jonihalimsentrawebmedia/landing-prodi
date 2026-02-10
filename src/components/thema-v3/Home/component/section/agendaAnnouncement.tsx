'use client'

import { TitleContent } from '@/components/thema-v3/component/common/titleContent'
import { UseGetAgenda, UseGetAnnouncement } from '@/app/homepage/hooks'
import Image from 'next/image'
import { FaLocationDot } from 'react-icons/fa6'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import Link from 'next/link'
// import { ArrowRight } from 'lucide-react'
import { useStateContext } from '@/contexts'
import { AgendaAnnouncementSkeleton } from '@/components/thema-v3/Home/component/skeleton'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { LazyMotion, domAnimation, m, Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const AgendaAnnouncement = () => {
  const [{ profile }] = useStateContext()
  const { agenda, loading: load1 } = UseGetAgenda({ page: '1', limit: '3' })
  const { announcement, loading: load2 } = UseGetAnnouncement({ page: '1', limit: '3' })

  const loading = load1 || load2
  if (loading) return <AgendaAnnouncementSkeleton />

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="w-full relative my-10 max-w-[1920px] mx-auto"
      >
        <div className="w-1/2 h-full bg-primary absolute top-0 left-0" />
        <div className="w-1/2 h-full absolute top-0 right-0" />

        <div className="container min-h-[500px] relative z-10 py-5">
          <div className="flex flex-col lg:flex-row gap-2 items-center lg:gap-x-12">
            {/* ================= AGENDA ================= */}
            <div className="w-full bg-primary-foreground p-2.5 lg:p-5">
              <TitleContent
                text="Agenda Program Studi"
                className="text-primary text-base lg:text-2xl"
              />

              {/* MOBILE */}
              <Carousel className="mt-4 block lg:hidden">
                <CarouselContent>
                  {agenda?.map((itemA, k) => (
                    <CarouselItem key={k}>
                      <m.div whileHover={{ y: -4 }}>
                        <Link
                          href={`/information/agenda/${itemA?.slug}`}
                          className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 border border-gray-300 rounded overflow-hidden group"
                        >
                          <div className="w-full lg:min-w-[108px] overflow-hidden">
                            <Image
                              src={itemA?.gambar}
                              alt={itemA.judul}
                              width={300}
                              height={200}
                              className="w-full h-[280px] lg:h-[136px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <div className="flex flex-col gap-1.5 p-2.5 pt-0">
                            <p className="text-xs lg:text-base font-semibold text-primary">
                              {itemA?.judul}
                            </p>
                            <p className="flex items-center gap-1.5 text-gray-500 text-xs lg:text-base">
                              <FaLocationDot className="size-4 text-primary" />
                              {itemA?.lokasi_kegiatan}
                            </p>
                            <p className="text-primary flex items-center gap-1.5 text-xs lg:text-base">
                              <FaRegCalendarAlt className="size-4 text-primary" />
                              {itemA?.published_at
                                ? format(itemA?.published_at, 'dd MMM yyyy')
                                : ''}
                            </p>
                          </div>
                        </Link>
                      </m.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* DESKTOP */}
              <m.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="lg:flex flex-col gap-4 mt-4 hidden"
              >
                {agenda?.map((itemA, k) => (
                  <m.div key={k} variants={item} whileHover={{ y: -6, scale: 1.01 }}>
                    <Link
                      href={`/information/agenda/${itemA?.slug}`}
                      className="flex flex-col lg:flex-row items-center gap-4 group"
                    >
                      <div className="min-w-[108px] overflow-hidden rounded">
                        <Image
                          src={itemA?.gambar}
                          alt={itemA.judul}
                          width={300}
                          height={200}
                          className="w-full lg:h-[136px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <p className="text-xs lg:text-base font-semibold text-primary">
                          {itemA?.judul}
                        </p>
                        <p className="flex items-center gap-1.5 text-gray-500 text-xs lg:text-base">
                          <FaLocationDot className="size-4 text-primary" />
                          {itemA?.lokasi_kegiatan}
                        </p>
                        <p className="text-primary flex items-center gap-1.5 text-xs lg:text-base">
                          <FaRegCalendarAlt className="size-4 text-primary" />
                          {itemA?.published_at ? format(itemA?.published_at, 'dd MMM yyyy') : ''}
                        </p>
                      </div>
                    </Link>
                  </m.div>
                ))}

                <Link href={'/information/agenda'} className={'flex justify-center'}>
                  <Button
                    variant="outline"
                    className="text-primary border-primary hover:text-primary rounded-full mt-5 group"
                  >
                    Lihat Agenda Lain
                    <ArrowRight className="size-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </m.div>
            </div>

            {/* ================= PENGUMUMAN ================= */}
            <div className="w-full bg-primary-foreground p-5 border-primary border">
              <TitleContent
                text="Pengumuman Program Studi"
                className="text-primary text-base lg:text-2xl"
              />

              <m.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="hidden lg:flex flex-col gap-4 mt-4"
              >
                {announcement?.map((row, k) => (
                  <m.div key={k} variants={item} whileHover={{ y: -6 }}>
                    <Link
                      href={`/information/announcements/${row?.slug}`}
                      className="flex flex-col lg:flex-row items-center gap-4 group"
                    >
                      <Image
                        src={profile?.SatuanOrganisasi?.logo ?? '/noimg.png'}
                        alt="logo"
                        width={136}
                        height={136}
                        className="rounded-full object-cover size-20 lg:size-[136px] transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="flex flex-col gap-1.5">
                        <p className="font-semibold line-clamp-2 text-primary text-xs lg:text-base">
                          {row?.judul_pengumuman}
                        </p>
                        <p className="flex items-center gap-1.5 text-gray-500 text-xs lg:text-base">
                          <FaRegCalendarAlt className="size-4 text-primary" />
                          {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : ''}
                        </p>
                      </div>
                    </Link>
                  </m.div>
                ))}
                
                <Link href={'/information/announcements'} className={'flex justify-center'}>
                  <Button
                    variant="outline"
                    className="text-primary border-primary hover:text-primary rounded-full mt-5 group"
                  >
                    Lihat Pengumuman Lain
                    <ArrowRight className="size-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
                
              </m.div>
            </div>
          </div>
        </div>
      </m.div>
    </LazyMotion>
  )
}
