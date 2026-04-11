'use client'

import { UseGetAboutProdi } from '@/app/homepage/hooks'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useStateContext } from '@/contexts'

export const AboutProfile = () => {
  const { aboutProdi, loading } = UseGetAboutProdi()
  const [{ profile }] = useStateContext()
  const detail = profile?.SatuanOrganisasi
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <>
      <div className="relative pt-10 container-sm">
        <p className="text-2xl text-primary dark:text-white">
          Tentang {detail?.kode_jenjang}-{detail?.nama}
        </p>
        <div className={'rounded-lg w-full p-4 mt-2 bg-linear-to-r from-primary to-[#004080] mb-5'}>
          <p className="text-2xl text-white">Terakreditasi Unggul</p>
          <p className="mt-1.5 text-white">No. 1239/SK/BAN-PT/Ak.KP/S/IV/2023</p>
        </div>

        <Carousel setApi={setApi}>
          <CarouselContent>
            {aboutProdi?.gambar?.map((row, k) => (
              <CarouselItem key={k}>
                <Image
                  src={row}
                  alt={'string'}
                  className={'w-full h-[250px] lg:h-[600px] object-cover'}
                  width={500}
                  height={500}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div
          className={`flex justify-center gap-2 mt-4 absolute bottom-2.5 transform -translate-x-1/2 left-1/2`}
        >
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                i === current ? 'bg-primary w-4' : 'bg-gray-300 hover:bg-gray-400'
              } shadow drop-shadow`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div
          className={`mt-5`}
          dangerouslySetInnerHTML={{ __html: aboutProdi?.isi_konten ?? '' }}
        />
      </div>
    </>
  )
}
