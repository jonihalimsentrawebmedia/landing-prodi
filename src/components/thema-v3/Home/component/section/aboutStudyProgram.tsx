'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useStateContext } from '@/contexts'
import { UseGetAboutProdi } from '@/app/homepage/hooks'
import { AboutStudyProgramSkeleton } from '@/components/thema-v2/component/home/skeleton'
import { TitleContent } from '@/components/thema-v3/component/common/titleContent'

export const AboutStudyProgramTheme3 = () => {
  const [{ profile }] = useStateContext()
  const { aboutProdi, loading } = UseGetAboutProdi()

  if (loading) return <AboutStudyProgramSkeleton />

  return (
    <>
      <div className={'bg-gray-100 dark:bg-primary w-full h-full mx-auto max-w-[1920px] py-10'}>
        <div className="container">
          <TitleContent
            line_position={'bottom'}
            text={`Tentang ${profile?.SatuanOrganisasi?.kode_jenjang} ${profile?.SatuanOrganisasi?.nama}`}
            className={'text-start'}
          />

          <div className="flex flex-col lg:flex-row items-start gap-x-5 mt-5 w-full">
            <Carousel
              className={'w-full lg:w-[442px] lg:min-w-[442px]'}
              opts={{ loop: true }}
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
            >
              <CarouselContent>
                {aboutProdi?.gambar?.map((item, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={item?.url}
                      width={442}
                      height={265}
                      alt={'gambar'}
                      className={
                        'w-full lg:w-[442px] h-[200px] lg:h-[265px] object-cover rounded-md'
                      }
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className={'mt-2.5 lg:mt-0 flex flex-col gap-5 w-full justify-between h-full'}>
              <div
                dangerouslySetInnerHTML={{ __html: aboutProdi?.isi_konten ?? '' }}
                className={'text-justify html-class'}
              />
              <Link
                className={
                  'text-primary font-semibold flex items-center gap-1.5 text-sm lg:text-base'
                }
                href={'/profile'}
              >
                Selengkapnya Tentang Prodi
                <ArrowRight className={'size-4'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
