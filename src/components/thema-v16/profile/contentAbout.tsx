'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { UseGetAboutProdi } from '@/app/homepage/hooks'
import { UseGetAccreditation } from '@/app/accreditation/hooks'

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'

const ContentAboutV16 = () => {
  const { aboutProdi } = UseGetAboutProdi()

  const { accreditation } = UseGetAccreditation({
    page: '1',
    limit: '1',
  })

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const firstAccreditation = accreditation?.[0]

  useEffect(() => {
    if (!api) return

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrent(api.selectedScrollSnap())

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on('select', onSelect)

    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <section className="py-8 lg:py-12">
      <div className="container-sm">
        <div
          className="
            rounded-2xl
            bg-white
            p-5
            lg:px-10
            lg:py-[30px]
            shadow-[0px_43px_17px_rgba(0,0,0,0.01),0px_24px_14px_rgba(0,0,0,0.05),0px_11px_11px_rgba(0,0,0,0.09),0px_3px_6px_rgba(0,0,0,0.1)]
          "
        >
          <div className="flex flex-col items-center gap-6 lg:flex-row">
            <div className="lg:w-[561px]">
              <Carousel
                setApi={setApi}
                opts={{
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {aboutProdi?.gambar?.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-[280px] md:h-[360px] lg:h-[421px] overflow-hidden rounded-2xl">
                        <Image
                          src={item?.url ?? '/noimg.png'}
                          alt={`Slide ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Navigation */}
              <div className="mt-4 px-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => api?.scrollPrev()}
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-primary
                      bg-white/80
                      transition
                      hover:bg-primary/5
                    "
                  >
                    <ChevronLeft size={22} className="text-primary" />
                  </button>

                  <div className="flex flex-1 gap-2">
                    {aboutProdi?.gambar?.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`
                          h-3
                          flex-1
                          rounded-full
                          border
                          border-primary
                          transition-all
                          duration-300
                          ${current === index ? 'bg-primary' : 'bg-white'}
                        `}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => api?.scrollNext()}
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-primary
                      bg-white/80
                      transition
                      hover:bg-primary/5
                    "
                  >
                    <ChevronRight size={22} className="text-primary" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-6">
              {/* TITLE */}
              <div className="flex items-center gap-2">
                <div
                  className="
                    border-b-4
                    border-l-4
                    border-[#CDA327]
                    px-4
                    py-2
                  "
                >
                  <h2
                    className="
                      font-sora
                      text-[24px]
                      font-normal
                      text-primary
                      lg:text-[31px]
                      lg:leading-[46px]
                    "
                  >
                    Tentang Program Studi
                  </h2>
                </div>

                <div className="h-[1px] flex-1 bg-[#CDA327]" />
              </div>

              <div
                className="
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#2DA98A]
                  to-[#12483B]
                  p-6
                  text-white
                "
              >
                <h3
                  className="
                    font-sora
                    text-xl
                    font-normal
                    text-[#E0E0E0]
                  "
                >
                  {firstAccreditation?.nilai_akreditas?.split('_').join(' ') ?? ''}
                </h3>

                <p className="mt-2 text-base text-[#E0E0E0]">
                  {firstAccreditation?.no_surat_keputusan ?? 'No. 1239/SK/BAN-PT/Ak.KP/S/IV/2023'}
                </p>
              </div>

              <div
                className="
                  prose
                  prose-neutral
                  max-w-none
                  text-justify
                  text-[#1F2937]
                  leading-6
                "
                dangerouslySetInnerHTML={{
                  __html: aboutProdi?.isi_konten ?? '',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentAboutV16
