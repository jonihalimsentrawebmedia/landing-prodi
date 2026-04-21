'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { UseGetAgenda, UseGetAnnouncement, UseGetNews } from '@/app/homepage/hooks'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { format } from 'date-fns'
import Image from 'next/image'
import { UseGetPromotion } from '@/app/information/hooks'
import Link from 'next/link'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaCircleChevronRight } from 'react-icons/fa6'

const InformationPageSectionV5 = () => {
  const { agenda } = UseGetAgenda({
    page: '1',
    limit: '3',
  })

  const { news } = UseGetNews({
    page: '1',
    limit: '5',
  })

  const { announcement } = UseGetAnnouncement({
    page: '1',
    limit: '3',
  })

  const { promotion } = UseGetPromotion({
    page: '1',
    limit: '3',
  })

  const FirstNews = news?.[0]
  const SecondNews = news?.slice(1, 3)
  const MoresNews = news?.slice(3, 5)

  return (
    <>
      <ProfileLayout title={'Informasi'} context={'INFORMASI'}>
        <div className={'bg-footer w-full max-w-[1920px] mx-auto p-4'}>
          <div className="container-sm">
            <BreadcrumbBasic data={[{ name: 'Beranda', link: '/' }, { name: 'Informasi' }]} />
          </div>
        </div>
        <div className="lg:p-5 bg-primary dark:bg-gray-800">
          <div className="container-sm py-5 lg:space-y-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0">
              <p className="lg:text-2xl font-semibold text-footer underline underline-offset-8 decoration-yellow-500">
                Agenda Program Studi
              </p>
              <Link href={'/information/agenda'}>
                <Button className={'bg-footer text-primary hover:bg-footer'}>
                  Semua Agenda
                  <ChevronRight className={'size-4'} />
                </Button>
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-5 mt-5 lg:mt-0">
              {agenda?.map((row, k) => (
                <Link
                  href={`/information/agenda/${row?.slug}`}
                  className={'flex items-center gap-4 p-4 border rounded-lg'}
                  key={k}
                >
                  <div className={'min-w-[30px]'}>
                    <p className={'text-footer text-lg'}>
                      {row?.waktu_mulai ? format(row?.waktu_mulai, 'dd') : ''}
                    </p>
                    <p className={'text-red-500'}>
                      {row?.waktu_mulai ? format(row?.waktu_mulai, 'MMM') : ''}
                    </p>
                  </div>
                  <div className={'border-l-2 border-l-gray-500 pl-4'}>
                    <p className="text-lg line-clamp-2">{row?.judul}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-12 gap-4 lg:gap-0">
              <p className="lg:text-2xl font-semibold text-footer underline underline-offset-8 decoration-yellow-500">
                Berita Program Studi
              </p>
              <Link href={'/information/news'}>
                <Button className={'bg-footer text-primary hover:bg-footer'}>
                  Semua Berita
                  <ChevronRight className={'size-4'} />
                </Button>
              </Link>
            </div>

            <div className={'block lg:hidden space-y-4 mt-4'}>
              <Link href={`/information/news/${FirstNews?.slug}`}>
                <div className="relative w-full h-full">
                  <div className="absolute space-y-2.5 p-2.5 top-0 left-0 w-full h-full bg-linear-to-b from-footer to-transparent">
                    <p className="text-xs bg-white w-fit rounded-full px-3 py-1.5 text-footer">
                      {FirstNews?.nama_kategori_berita}
                    </p>
                    <p className={'text-white line-clamp-2 font-semibold'}>{FirstNews?.judul}</p>
                    <p className={'text-white text-sm'}>
                      {FirstNews?.tanggal_berita ? format(FirstNews?.tanggal_berita, 'dd-MM-yyyy') : ''}
                    </p>
                  </div>
                  <Image
                    src={FirstNews?.gambar ?? '/img/noimg.png'}
                    alt={'gamabr'}
                    className={'w-full h-[310px] object-cover'}
                    width={500}
                    height={310}
                  />
                </div>
              </Link>
              <div className="mt-4 flex flex-col gap-4">
                {SecondNews?.map((row, index) => (
                  <Link href={`/information/news/${row?.slug}`} key={index}>
                    <div className={'border bg-white dark:bg-gray-800 p-4 rounded'}>
                      <p className={'text-footer text-xs'}>
                        {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
                      </p>
                      <p className={'text-footer line-clamp-2 font-semibold'}>{row?.judul}</p>
                    </div>
                  </Link>
                ))}
              </div>
              {MoresNews?.length > 0 && (
                <div className={'flex gap-4 flex-nowrap items-start overflow-x-scroll'}>
                  {MoresNews?.map((row, index) => (
                    <Link
                      href={`/information/news/${row?.slug}`}
                      key={index}
                      className={'flex flex-col gap-2 border rounded-lg overflow-hidden w-full min-w-[250px]'}
                    >
                      <Image
                        src={row?.gambar ?? '/img/noimg.png'}
                        alt={'gamabr'}
                        className={'w-full min-w-[280px] h-[250px] rounded-md object-cover'}
                        width={500}
                        height={310}
                      />
                      <div className="p-2 bg-white">
                        <p className="font-semibold line-clamp-2">{row?.judul}</p>
                        <p className="text-gray-400 text-sm">
                          {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:block hidden">
              <Carousel
                opts={{
                  loop: true,
                  align: 'start',
                }}
                plugins={[Autoplay({ delay: 3000 })]}
              >
                <CarouselContent className={'flex items-stretch'}>
                  {news?.map((row, index) => (
                    <CarouselItem key={index} className={'basis-1/3'}>
                      <Link href={`/information/news/${row?.slug}`}>
                        <div className={'shadow rounded-lg border h-full group'}>
                          <div className="w-full h-[310px] overflow-hidden rounded-t-lg">
                            <Image
                              src={row?.gambar}
                              alt={row?.judul}
                              className={
                                'w-full h-[310px] object-cover rounded-t-lg group-hover:scale-110 transition-all duration-300'
                              }
                              width={500}
                              height={310}
                            />
                          </div>
                          <div className={'p-4 space-y-2.5 relative'}>
                            <div className="flex items-center gap-x-2">
                              <p className="text-sm py-1.5 px-3 rounded-full font-semibold bg-footer/10 text-footer flex items-center gap-1">
                                <FaRegCalendarAlt />
                                {row?.tanggal_berita
                                  ? format(row?.tanggal_berita, 'dd-MM- yyyy')
                                  : ''}
                              </p>
                              <p className="text-sm py-1.5 px-3 rounded-full font-semibold bg-footer/10 text-footer flex items-center gap-1">
                                {row?.nama_kategori_berita}
                              </p>
                            </div>
                            <p className="font-semibold group-hover:text-footer line-clamp-2">
                              {row?.judul}
                            </p>
                            <button className={'text-footer flex items-center gap-1 text-sm'}>
                              <FaCircleChevronRight className={'size-4'} />
                              Baca Lebih Lanjut
                            </button>
                          </div>
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            <div className="bg-white p-4 border rounded-lg space-y-4 border-footer mt-5 lg:mt-0">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-0">
                <h2 className="lg:text-2xl font-semibold text-footer underline-offset-8 decoration-yellow-500 underline">
                  Pengumuman Prgoram Studi
                </h2>
                <Link href={'/information/announcements'}>
                  <Button className={'bg-footer text-white hover:bg-footer'}>
                    Lihat Pengumuman
                    <ChevronRight className={'size-4'} />
                  </Button>
                </Link>
              </div>

              <div className="grid lg:grid-cols-3 gap-4 py-4">
                {announcement?.map((row, index) => (
                  <Link
                    href={`/information/announcements/${row?.slug}`}
                    key={index}
                    className="space-y-2 border-l-2 border-l-gray-500 pl-2"
                  >
                    <p className="text-sm">
                      {row?.published_at ? format(row?.published_at, 'dd-MM- yyyy') : ''}
                    </p>
                    <p className={'text-footer font-semibold line-clamp-2'}>
                      {row?.judul_pengumuman}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-12 gap-4 lg:gap-0">
              <p className="text-2xl font-semibold text-footer underline underline-offset-8 decoration-yellow-500">
                Promosi Program Studi
              </p>
              <Link href={'/information/promotion'}>
                <Button className={'bg-footer text-primary hover:bg-footer'}>
                  Semua Promosi
                  <ChevronRight className={'size-4'} />
                </Button>
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-5 mt-5 lg:mt-0">
              {promotion?.map((row, k) => (
                <Link
                  href={`/information/promotion/${row?.slug}`}
                  className={'w-full flex flex-col gap-4'}
                  key={k}
                >
                  <Image
                    src={row?.gambar ?? '/img/noimg.png'}
                    alt={'gamabr'}
                    width={650}
                    height={315}
                    className={'w-full h-[315px] object-cover rounded-md'}
                  />
                  <p className={'line-clamp-2 text-2xl font-semibold'}>{row?.judul}</p>
                  <p>{row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}</p>
                  <div
                    className={'html-class flex flex-col ap1 gap-1.5 line-clamp-3!'}
                    dangerouslySetInnerHTML={{ __html: row?.isi_promosi ?? '' }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}

export default InformationPageSectionV5
