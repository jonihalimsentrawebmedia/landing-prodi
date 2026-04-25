'use client'

import { UseGetAboutProdi } from '@/app/homepage/hooks'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { UseGetAccreditation } from '@/app/accreditation/hooks'

const ContentAboutV10 = () => {
  const { aboutProdi } = UseGetAboutProdi()
  const { accreditation } = UseGetAccreditation({ page: '1', limit: '1' })
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const fist = accreditation?.[0]

  useEffect(() => {
    if (!api) return

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrent(api.selectedScrollSnap() + 1)
    api.on('select', () => setCurrent(api.selectedScrollSnap() + 1))
  }, [api])

  return (
    <>
      <div className="container-sm lg:shadow lg:drop-shadow-2xl p-5 lg:border lg:rounded-3xl lg:my-5">
        <div className="flex flex-col lg:flex-row items-start gap-5 lg:px-5">
          <Carousel className={'w-full lg:w-[382px]'} setApi={setApi}>
            <CarouselContent className={''}>
              {aboutProdi?.gambar?.map((row, k) => (
                <CarouselItem key={k}>
                  <div className="relative w-full lg:w-[382px] h-[286px] rounded-2xl overflow-hidden">
                    <Image
                      src={row?.url ?? '/img/noimg.png'}
                      alt={'gambar'}
                      fill
                      className={'object-cover'}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
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

          <div className="flex flex-col gap-2.5 w-full">
            <div className={'flex flex-col lg:flex-row lg:items-center justify-between w-full gap-4'}>
              <p className="lg:text-3xl font-semibold w-fit border-b-2 border-b-yellow-500 text-primary pb-2">
                Tentang Program Studi
              </p>
              <div className="p-4 bg-linear-to-r from-primary to-footer rounded-2xl w-full lg:max-w-[340px]">
                <p className="text-lg text-white font-semibold">
                  {fist?.nilai_akreditas.split('_').join(' ')}
                </p>
                <p className={'text-white text-sm'}>{fist?.uraian}</p>
              </div>
            </div>

            <div
              className="flex flex-col gap-2"
              dangerouslySetInnerHTML={{ __html: aboutProdi?.isi_konten ?? '' }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentAboutV10
