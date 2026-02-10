'use client'

import { UseGetAboutProdi } from '@/app/homepage/hooks'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AboutProdiSkeleton } from '@/components/theme-v4/home/component/skeleton'

export const AboutProdi = () => {
  const { aboutProdi, loading } = UseGetAboutProdi()

  if (loading) return <AboutProdiSkeleton />

  return (
    <>
      <div className={'w-full mx-auto max-w-[1920px] relative'}>
        <div className="hidden container absolute z-10 lg:flex items-center gap-x-5 transform -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2">
          <div className="max-w-1/2 w-full" />
          <div className="max-w-1/2 w-full pl-5">
            <p className="text-3xl">
              <span className={'underline underline-offset-[12px] decoration-primary'}>
                Tentang
              </span>{' '}
              Program Studi
            </p>
            <div
              className={'html-class flex flex-col gap-2.5 mt-7 text-justify line-clamp-6'}
              dangerouslySetInnerHTML={{ __html: aboutProdi?.isi_konten ?? '' }}
            />
            <Link
              href={'/profile'}
              className={
                'mt-5 text-primary underline underline-offset-8 decoration-primary flex items-center gap-1.5'
              }
            >
              Selengkapnya Tentang Prodi <ArrowRight className={'size-4'} />
            </Link>
          </div>
        </div>

        <Carousel className={'w-full lg:w-1/2 lg:min-h-[480px] relative z-10'}>
          <CarouselContent>
            {aboutProdi?.gambar?.map((row, k) => (
              <CarouselItem key={k}>
                <Image
                  src={row}
                  alt={'gambar'}
                  className={'w-full h-[300px] lg:h-[480px] object-cover'}
                  width={720}
                  height={480}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className={'lg:hidden flex px-2 flex-col gap-2.5'}>
          <p className="lg:text-3xl font-semibold">
              <span className={'underline underline-offset-[12px] decoration-primary'}>
                Tentang
              </span>{' '}
            Program Studi
          </p>
          
          <div
            className={'html-class text-xs flex flex-col gap-2.5 lg:mt-7 text-justify line-clamp-6'}
            dangerouslySetInnerHTML={{ __html: aboutProdi?.isi_konten ?? '' }}
          />
          <Link
            href={'/profile'}
            className={
              'mb-4 text-xs text-primary underline underline-offset-8 decoration-primary flex items-center gap-1.5'
            }
          >
            Selengkapnya Tentang Prodi <ArrowRight className={'size-4'} />
          </Link>
        </div>
        
      </div>
    </>
  )
}
