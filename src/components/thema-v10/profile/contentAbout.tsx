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

const ContentAboutV10 = () => {
  const { aboutProdi } = UseGetAboutProdi()
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrent(api.selectedScrollSnap() + 1)
    api.on('select', () => setCurrent(api.selectedScrollSnap() + 1))
  }, [api])

  return (
    <div className="bg-white">
      <div className="container-sm px-5 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-5/12 pl-6 py-6 relative flex items-center flex-col justify-center">
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {aboutProdi?.gambar?.map((row, k) => (
                    <CarouselItem key={k}>
                      <Image
                        src={row?.url}
                        alt="Tentang Program Studi"
                        width={382}
                        height={286}
                        className="object-cover w-full"
                        priority={k === 0}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black border shadow-md h-10 w-10" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black border shadow-md h-10 w-10" />
              </Carousel>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4 pb-6">
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

            {/* Right - Content */}
            <div className="lg:w-7/12 p-4 lg:p-6 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-[#1E3A8A] text-3xl lg:text-[31px] font-semibold">
                  Tentang Program Studi
                </h2>

                {/* Accreditation Badge */}
                <div className="bg-[#1E3A8A] text-white text-sm px-5 py-3 rounded-2xl text-center hidden lg:block">
                  <p className="font-semibold">Terakreditasi Unggul</p>
                  <p className="text-xs mt-1">No. 1239/SK/BAN-PT/Ak.KP/S/IV/2023</p>
                </div>
              </div>

              <div
                className="text-[#444444] leading-relaxed text-[15.5px] lg:text-[16px]"
                dangerouslySetInnerHTML={{ __html: aboutProdi?.isi_konten ?? '' }}
              />

              <div className="mt-auto pt-8">
                <Link href="/profile">
                  <Button className="bg-[#1E3A8A] hover:bg-[#162e6b] text-white px-8 py-6 rounded-xl">
                    Baca selengkapnya...
                    <ChevronRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentAboutV10
