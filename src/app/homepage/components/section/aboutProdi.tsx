'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { UseGetAboutProdi } from '@/app/homepage/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const AboutProdiSection = () => {
  const { aboutProdi } = UseGetAboutProdi()
  return (
    <>
      <div className="flex items-stretch py-8 w-full max-w-[1920px] mx-auto bg-[#EAEAEA]">
        <div className="w-1/2">
          <Carousel>
            <CarouselContent>
              {aboutProdi?.gambar?.map((row, k) => (
                <CarouselItem key={k}>
                  <Image
                    src={row}
                    alt={'image'}
                    className={'w-full h-[400px] object-cover'}
                    width={1080}
                    height={400}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="w-1/2  bg-primary p-8 h-[400px] flex items-center">
          <div className="bg-[#EAEAEA] p-6 flex flex-col justify-center gap-5 h-full">
            <p className="text-2xl font-semibold">
              Profil <span className={'px-1 bg-[#CDA327]'}>Program Studi</span>
            </p>
            <div
              className={'line-clamp-6'}
              dangerouslySetInnerHTML={{ __html: aboutProdi?.isi_konten ?? '' }}
            />
            <Link
              href={'/profile'}
              className={'flex items-center gap-1.5 text-blue-600 capitalize'}
            >
              Selengkapnya Profil
              <ArrowRight className={'size-4'} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
