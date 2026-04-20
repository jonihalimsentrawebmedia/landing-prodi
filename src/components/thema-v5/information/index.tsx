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

const InformationPageSectionV5 = () => {
  const { agenda } = UseGetAgenda({
    page: '1',
    limit: '3',
  })

  const { news } = UseGetNews({
    page: '1',
    limit: '3',
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
  const SecondNews = news?.slice(1, 4)

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

            <div className="flex flex-col lg:flex-row items-start gap-x-5 mt-5 lg:mt-0">
              <Link
                href={`/information/news/${FirstNews?.slug}`}
                className="w-full lg:w-1/2 space-y-1.5"
              >
                <Image
                  src={FirstNews?.gambar ?? '/img/noimg.png'}
                  alt={'gamabr'}
                  width={650}
                  height={315}
                  className={'w-full h-[315px] object-cover rounded-md'}
                />
                <p className="text-footer text-sm">{FirstNews?.nama_kategori_berita}</p>
                <p className={'line-clamp-2 lg:text-2xl font-semibold'}>{FirstNews?.judul}</p>
                <p>
                  {FirstNews?.tanggal_berita ? format(FirstNews?.tanggal_berita, 'dd-MM-yyyy') : ''}
                </p>
                <div
                  className={'html-class flex flex-col ap1 gap-1.5 line-clamp-3!'}
                  dangerouslySetInnerHTML={{ __html: FirstNews?.isi_berita ?? '' }}
                />
              </Link>
              <div className="lg:w-1/2 w-full space-y-4">
                {SecondNews?.map((row, k) => (
                  <Link
                    href={`/information/news/${row?.slug}`}
                    key={k}
                    className={'flex flex-col lg:flex-row items-start gap-4'}
                  >
                    <Image
                      src={row?.gambar ?? '/img/noimg.png'}
                      alt={'gambar'}
                      width={650}
                      height={315}
                      className={'w-full lg:w-[230px] lg:h-[175px] object-cover rounded-md'}
                    />
                    <div className={'space-y-2'}>
                      <p className="text-footer text-sm">{row?.nama_kategori_berita}</p>
                      <p className={'line-clamp-2 lg:text-2xl font-semibold'}>{row?.judul}</p>
                      <p className={'text-footer text-sm'}>
                        {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
                      </p>
                      <p></p>
                    </div>
                  </Link>
                ))}
              </div>
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
