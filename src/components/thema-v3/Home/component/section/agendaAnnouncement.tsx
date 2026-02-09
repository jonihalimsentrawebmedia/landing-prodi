'use client'

import { TitleContent } from '@/components/thema-v3/component/common/titleContent'
import { UseGetAgenda, UseGetAnnouncement } from '@/app/homepage/hooks'
import Image from 'next/image'
import { FaLocationDot } from 'react-icons/fa6'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useStateContext } from '@/contexts'
import { AgendaAnnouncementSkeleton } from '@/components/thema-v3/Home/component/skeleton'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

export const AgendaAnnouncement = () => {
  const [{ profile }] = useStateContext()
  const { agenda, loading: load1 } = UseGetAgenda({
    page: '1',
    limit: '3',
  })

  const { announcement, loading: load2 } = UseGetAnnouncement({
    page: '1',
    limit: '3',
  })

  const loading = load1 || load2

  if (loading) return <AgendaAnnouncementSkeleton />

  return (
    <>
      <div className={'w-full relative my-10 max-w-[1920px] mx-auto'}>
        <div className="w-1/2 h-full bg-primary absolute top-0 left-0" />
        <div className="w-1/2 h-full absolute top-0 right-0 " />

        <div className="container min-h-[500px] relative z-10 py-5">
          <div className="flex flex-col lg:flex-row gap-2 items-center lg:gap-x-12">
            <div className="w-full bg-primary-foreground p-2.5 lg:p-5">
              <TitleContent
                text={'Agenda Program Studi'}
                className={'text-primary text-base lg:text-2xl'}
              />

              <Carousel className={'mt-4 block lg:hidden'}>
                <CarouselContent>
                  {agenda?.map((item, k) => (
                    <CarouselItem key={k} className={''}>
                      <Link
                        href={`/information/agenda/${item?.slug}`}
                        className={
                          'flex flex-col lg:flex-row items-center gap-2 lg:gap-4 border border-gray-300 rounded'
                        }
                      >
                        <div className="w-full lg:min-w-[108px]">
                          <Image
                            src={item?.gambar}
                            alt={item.judul}
                            width={300}
                            height={200}
                            className={'w-full h-[280px] lg:h-[136px] object-cover'}
                          />
                        </div>
                        <div className={'flex flex-col gap-1.5 p-2.5 pt-0'}>
                          <p className="text-xs lg:text-base font-semibold text-primary">
                            {item?.judul}
                          </p>
                          <p className="flex items-center gap-1.5 text-gray-500 text-xs lg:text-base">
                            <FaLocationDot className={'size-4 text-primary'} />
                            {item?.lokasi_kegiatan}
                          </p>
                          <p
                            className={
                              'text-primary flex items-center gap-1.5 text-xs lg:text-base'
                            }
                          >
                            <FaRegCalendarAlt className={'size-4 text-primary'} />
                            {item?.published_at ? format(item?.published_at, 'dd MMM yyyy') : ''}
                          </p>
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <Link
                  href={'/information/agenda'}
                  className={
                    'rounded-full mt-3 border border-primary flex items-center gap-1.5 w-fit p-1.5 px-3 mx-auto text-primary font-semibold text-sm bg-primary-foreground'
                  }
                >
                  Lihat Agenda Lain <ArrowRight className={'size-4 text-primary'} />
                </Link>
              </Carousel>

              <div className={'lg:flex flex-col gap-4 mt-4 hidden'}>
                {agenda?.map((item, k) => (
                  <Link
                    href={`/information/agenda/${item?.slug}`}
                    key={k}
                    className={'flex flex-col lg:flex-row items-center gap-4'}
                  >
                    <div className="min-w-[108px]">
                      <Image
                        src={item?.gambar}
                        alt={item.judul}
                        width={300}
                        height={200}
                        className={'w-full lg:h-[136px] object-cover'}
                      />
                    </div>
                    <div className={'flex flex-col gap-1.5'}>
                      <p className="text-xs lg:text-base font-semibold text-primary">
                        {item?.judul}
                      </p>
                      <p className="flex items-center gap-1.5 text-gray-500 text-xs lg:text-base">
                        <FaLocationDot className={'size-4 text-primary'} />
                        {item?.lokasi_kegiatan}
                      </p>
                      <p className={'text-primary flex items-center gap-1.5 text-xs lg:text-base'}>
                        <FaRegCalendarAlt className={'size-4 text-primary'} />
                        {item?.published_at ? format(item?.published_at, 'dd MMM yyyy') : ''}
                      </p>
                    </div>
                  </Link>
                ))}

                <Link
                  href={'/information/agenda'}
                  className={
                    'rounded-full border border-primary flex items-center gap-1.5 w-fit p-1.5 px-3 mx-auto text-primary font-semibold text-sm bg-primary-foreground'
                  }
                >
                  Lihat Agenda Lain <ArrowRight className={'size-4 text-primary'} />
                </Link>
              </div>
            </div>

            <div className="w-full bg-primary-foreground p-5 border-primary border">
              <TitleContent
                text={'Pengumuman Program Studi'}
                className={'text-primary text-base lg:text-2xl'}
              />

              <Carousel className={'mt-4 block lg:hidden'}>
                <CarouselContent>
                  {announcement?.map((row, k) => (
                    <CarouselItem key={k}>
                      <Link
                        href={`/information/announcements/${row?.slug}`}
                        className={
                          'flex flex-col lg:flex-row items-center gap-4 border border-gray-300 p-2.5 rounded'
                        }
                      >
                        <Image
                          src={profile?.SatuanOrganisasi?.logo ?? '/noimg.png'}
                          alt={'logo'}
                          width={136}
                          height={136}
                          className={'rounded-full object-cover size-20 lg:size-[136px]'}
                        />
                        <div className={'flex flex-col gap-1.5'}>
                          <p className="font-semibold line-clamp-2 text-primary text-xs lg:text-base">
                            {row?.judul_pengumuman}
                          </p>
                          <p
                            className={
                              'flex items-center gap-1.5 text-gray-500 dark:text-primary text-xs lg:text-base'
                            }
                          >
                            <FaRegCalendarAlt className={'size-4 text-primary'} />
                            {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : ''}
                          </p>
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <Link
                  href={'/information/announcements'}
                  className={
                    'mt-5 rounded-full border border-primary flex items-center gap-1.5 w-fit p-1.5 px-3 mx-auto text-primary font-semibold text-sm bg-primary-foreground'
                  }
                >
                  Lihat Pengumuman Lain <ArrowRight className={'size-4 text-primary'} />
                </Link>
              </Carousel>

              <div className={'hidden lg:flex flex-col gap-4 mt-4'}>
                {announcement?.map((row, k) => (
                  <Link
                    href={`/information/announcements/${row?.slug}`}
                    className={'flex flex-col lg:flex-row items-center gap-4'}
                    key={k}
                  >
                    <Image
                      src={profile?.SatuanOrganisasi?.logo ?? '/noimg.png'}
                      alt={'logo'}
                      width={136}
                      height={136}
                      className={'rounded-full object-cover size-20 lg:size-[136px]'}
                    />
                    <div className={'flex flex-col gap-1.5'}>
                      <p className="font-semibold line-clamp-2 text-primary text-xs lg:text-base">
                        {row?.judul_pengumuman}
                      </p>
                      <p
                        className={
                          'flex items-center gap-1.5 text-gray-500 dark:text-primary text-xs lg:text-base'
                        }
                      >
                        <FaRegCalendarAlt className={'size-4 text-primary'} />
                        {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : ''}
                      </p>
                    </div>
                  </Link>
                ))}
                <Link
                  href={'/information/announcements'}
                  className={
                    'rounded-full border border-primary flex items-center gap-1.5 w-fit p-1.5 px-3 mx-auto text-primary font-semibold text-sm bg-primary-foreground'
                  }
                >
                  Lihat Pengumuman Lain <ArrowRight className={'size-4 text-primary'} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
