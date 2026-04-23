'use client'

import { UseGetAboutProdi } from '@/app/homepage/hooks'
import { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const AboutProfileHomeV8 = () => {
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
      <div className="w-full  lg:py-15">
        <div className="container-sm lg:shadow lg:drop-shadow-xl bg-white rounded-lg lg:h-[424px]">
          <div className="lg:py-[60px] lg:px-[80px] flex flex-col lg:flex-row items-start gap-6 py-5">
            <Carousel setApi={setApi} className={'lg:max-w-[304px] w-full lg:h-[304px]'}>
              <CarouselContent className={'ml-0'}>
                {aboutProdi?.gambar?.map((row, k) => (
                  <CarouselItem className={'relative w-full lg:w-[304px] h-[304px]'} key={k}>
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
                      index === current - 1 ? 'bg-footer shadow w-8' : 'bg-gray-50 shadow'
                    }`}
                  />
                ))}
              </div>
            </Carousel>
            <div className={'space-y-4'}>
              <h2 className="lg:text-3xl font-semibold text-primary">Tentang Program Studi</h2>
              <div
                className="flex flex-col gap-2 html-class line-clamp-8! lg:line-clamp-none"
                dangerouslySetInnerHTML={{ __html: aboutProdi?.isi_konten ?? '' }}
              />
              <Link href={'/profile'}>
                <Button className={'text-white'}>
                  Baca Selengkapnya... <ChevronRight className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AboutProfileHomeV8
