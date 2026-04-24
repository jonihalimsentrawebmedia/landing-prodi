'use client'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { UseGetAboutProdi } from '@/app/homepage/hooks'
import { useEffect, useState } from 'react'

const ContentAboutV9 = () => {
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
    <>
      <div className="bg-primary/10 pb-5 pt-10">
        <div className="container-sm">
          <div className="flex flex-col lg:flex-row items-center gap-5">
            <Carousel setApi={setApi} className={'lg:max-w-[310px] w-full lg:h-[381px]'}>
              <CarouselContent className={'ml-0'}>
                {aboutProdi?.gambar?.map((row, k) => (
                  <CarouselItem className={'relative w-full lg:w-[302px] h-[381px]'} key={k}>
                    <Image
                      src={row?.url}
                      alt={'gambar thumnail'}
                      fill
                      className={'object-cover rounded-md'}
                      priority={k === 0}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black border shadow-md h-10 w-10" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black border shadow-md h-10 w-10" />

              <div className="flex justify-center gap-2 mt-4 absolute bottom-2 transform -translate-x-1/2 left-1/2">
                {Array.from({ length: aboutProdi?.gambar?.length ?? 0 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      index === current - 1 ? 'bg-primary shadow w-8' : 'bg-white shadow'
                    }`}
                  />
                ))}
              </div>
            </Carousel>

            <div className="flex flex-col gap-4 w-full">
              <h2 className="lg:text-3xl font-semibold text-primary underline decoration-2 underline-offset-8 lg:underline-offset-[24px] decoration-yellow-500">
                Tentang Program Studi
              </h2>
              <div className="lg:mt-4 bg-linear-to-r from-primary/70 to-primary p-5 rounded-lg w-full space-y-2 lg:space-y-4">
                <p className="lg:text-xl font-semibold text-white">Terakreditasi Unggul</p>
                <p className={'text-white text-sm lg:text-base'}>
                  No. 1239/SK/BAN-PT/Ak.KP/S/IV/2023
                </p>
              </div>

              <div
                className="flex flex-col gap-2 html-class"
                dangerouslySetInnerHTML={{ __html: aboutProdi?.isi_konten ?? '' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentAboutV9
