'use client'

import { UseGetAboutProdi } from '@/app/homepage/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useEffect, useState } from 'react'

const AboutProfileHomeV10 = () => {
  const { aboutProdi } = UseGetAboutProdi()

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="w-full py-12 lg:py-20 bg-primary/5">
      <div className="container-sm px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="flex-1 space-y-6">
            <div className="border-b-4 border-[#CDA327] pb-4 inline-block">
              <h2 className="text-[#1E3A8A] text-3xl lg:text-[31px] font-semibold">
                Tentang Program Studi
              </h2>
            </div>

            <div
              className="text-[#444444] leading-relaxed text-[16px] lg:text-[17px] line-clamp-[10]"
              dangerouslySetInnerHTML={{ __html: aboutProdi?.isi_konten ?? '' }}
            />

            <Link href="/profile">
              <Button className="bg-[#1E3A8A] hover:bg-[#162e6b] text-white px-8 py-6 rounded-lg">
                Baca selengkapnya...
                <ChevronRight className="ml-2" />
              </Button>
            </Link>
          </div>

          {/* Right Side - Image Carousel */}
          <div className="flex-1 w-full max-w-[411px] relative">
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {aboutProdi?.gambar?.map((row, k) => (
                  <CarouselItem key={k}>
                    <div className="relative aspect-[411/309] w-full rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={row?.url}
                        alt="Tentang Program Studi"
                        fill
                        className="object-cover"
                        priority={k === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Arrows */}
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border shadow-md h-10 w-10" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border shadow-md h-10 w-10" />
            </Carousel>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: aboutProdi?.gambar?.length ?? 0 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === current - 1 ? 'bg-[#1E3A8A] w-8' : 'bg-gray-300 w-2.5'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutProfileHomeV10
