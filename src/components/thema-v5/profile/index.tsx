'use client'

import ProfileLayout from '@/components/thema-v5/profile/layout'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import SideNavV5 from '@/components/thema-v5/profile/component/sideNav'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { UseGetAboutProdi } from '@/app/homepage/hooks'
import Autoplay from 'embla-carousel-autoplay'

const ProfilePageV5 = () => {
  const { aboutProdi } = UseGetAboutProdi()

  return (
    <>
      <ProfileLayout title={'Profil'} context={'PROFIL'}>
        <div className={'bg-footer w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
          <div className="container-sm px-2!">
            <BreadcrumbBasic data={[{ name: 'Beranda', link: '/' }, { name: 'Profil' }]} />
          </div>
        </div>
        <div className="p-0 py-2 lg:p-5 bg-primary dark:bg-gray-800">
          <div className="container-sm px-2!">
            <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8">
              <SideNavV5 />
              <div className={'w-full space-y-4'}>
                <p className="text-2xl font-semibold text-footer underline underline-offset-8 decoration-yellow-500">
                  Tentang Program Studi
                </p>
                <div className={'rounded-lg w-full p-4 bg-linear-to-r from-footer/80 to-footer'}>
                  <p className="text-2xl text-white">Terakreditasi Unggul</p>
                  <p className="mt-1.5 text-white">No. 1239/SK/BAN-PT/Ak.KP/S/IV/2023</p>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-x-6 gap-2.5">
                  <Carousel
                    className={'lg:w-[480px] lg:min-w-[480px]'}
                    plugins={[Autoplay({ delay: 5000 })]}
                  >
                    <CarouselContent>
                      {aboutProdi?.gambar?.map((row, k) => (
                        <CarouselItem key={k}>
                          <Image
                            src={row?.url}
                            className={'object-cover w-[480px] h-[250px] lg:h-[360px] rounded-xl'}
                            alt={'image'}
                            width={480}
                            height={360}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                  <div className={'space-y-5'}>
                    <p className="text-2xl font-semibold underline underline-offset-8 decoration-yellow-500 text-footer">
                      Tentang Program Studi
                    </p>
                    <div
                      className="flex flex-col gap-4 html-class"
                      dangerouslySetInnerHTML={{ __html: aboutProdi?.isi_konten ?? '' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}

export default ProfilePageV5
