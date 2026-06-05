'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { UseGetAboutProdi } from '@/app/homepage/hooks'
import { UseGetAccreditation } from '@/app/accreditation/hooks'

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'

const ContentAboutV15 = () => {
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

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section>
      <div className="mx-auto container-sm px-4">
        <div className={'pt-5'}>
          <div className="flex gap-4 items-start p-4 border rounded-lg">
            <div className="rounded-2xl" style={{ width: '540px' }}>
              <Carousel
                setApi={setApi}
                opts={{
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {aboutProdi?.gambar.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-[280px] md:h-[350px] lg:h-[397px] w-full rounded-lg overflow-hidden">
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

              <div className="mt-2">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => api?.scrollPrev()}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#1F7A63] bg-white/80 backdrop-blur"
                  >
                    <ChevronLeft size={22} className="text-[#1F7A63]" />
                  </button>

                  <div className="flex flex-1 gap-2">
                    {aboutProdi?.gambar.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`h-3 flex-1 rounded-full border border-[#1F7A63] transition-all duration-300 ${
                          current === index ? 'bg-primary' : 'bg-white'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => api?.scrollNext()}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#1F7A63] bg-white/80 backdrop-blur"
                  >
                    <ChevronRight size={22} className="text-[#1F7A63]" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center gap-3">
                <div className="bg-primary px-4 py-2">
                  <h2 className="font-serif text-2xl font-normal text-white md:text-[31px]">
                    Tentang Program Studi
                  </h2>
                </div>
                <div className="h-[2px] flex-1 bg-[#CDA327]" />
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-primary to-footer p-6 text-white">
                <h3 className="font-serif text-2xl">
                  {firstAccreditation?.nilai_akreditas ?? 'Terakreditasi Unggul'}
                </h3>

                <p className="mt-2 text-sm text-neutral-200 md:text-base">
                  {firstAccreditation?.no_surat_keputusan ?? 'No. 1239/SK/BAN-PT/Ak.KP/S/IV/2023'}
                </p>
              </div>

              {/* CONTENT */}
              <div
                className="prose prose-neutral max-w-none text-justify text-[#444444]"
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

export default ContentAboutV15
