'use client'

import { UseGetAboutProdi, UseGetLecturer } from '@/app/homepage/hooks'
import { TitleUnderline } from '@/components/thema-v2/component/common/titleUnderLine'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const AboutAndLecturer13 = () => {
  const { aboutProdi } = UseGetAboutProdi()
  const { lecturer } = UseGetLecturer({
    page: '1',
    limit: '4',
  })

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
      <div className="container py-10 flex flex-col lg:flex-row items-start gap-8">
        <div className="w-full lg:w-1/2">
          <TitleUnderline className={'decoration-yellow-500 text-center'} text={'Tentang Prodi'} />
          <Carousel className={'mt-8 relative h-[250px] lg:h-[471px] w-full'} setApi={setApi}>
            <CarouselContent>
              {aboutProdi?.gambar.map((row, k) => (
                <CarouselItem key={k}>
                  <Image
                    src={row?.url}
                    alt={'gambar'}
                    className={'object-cover rounded-lg w-full h-[250px] lg:h-[471px]'}
                    width={628}
                    height={471}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-center gap-4 mt-6 absolute bottom-4 transform -translate-x-1/2 left-1/2 w-full">
              <button
                onClick={() => api?.scrollPrev()}
                className="lg:w-10 lg:h-10 rounded border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 active:scale-95 transition shadow"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: aboutProdi?.gambar?.length ?? 0 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === current - 1
                        ? 'bg-[#1E3A8A] w-10 lg:w-20'
                        : 'bg-white border border-gray-300 w-10 lg:w-20'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => api?.scrollNext()}
                className="lg:w-10 lg:h-10 rounded border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 active:scale-95 transition shadow"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </Carousel>

          <div
            className="html-class flex flex-col gap-2 mt-5"
            dangerouslySetInnerHTML={{
              __html: aboutProdi?.isi_konten ?? '',
            }}
          />

          <Link href={'/profile'}>
            <Button className={'w-full mt-4 text-white'}>
              Baca Selengkapnya ...
              <ChevronRight />
            </Button>
          </Link>
        </div>

        <div className="w-full lg:w-1/2">
          <TitleUnderline className={'decoration-yellow-500 text-center'} text={'Dosen'} />
          <div className="grid lg:grid-cols-2 gap-5 mt-8">
            {lecturer?.map((row, k) => (
              <div key={k} className={'w-full h-[365px] relative rounded-lg border shadow'}>
                <Image
                  src={row?.gambar_url}
                  alt={'dosen'}
                  fill
                  className={'object-cover rounded-lg'}
                />
                <div className="absolute bg-white z-10 p-4 font-semibold rounded-b-lg w-full bottom-0">
                  {row?.nama}
                </div>
              </div>
            ))}
          </div>

          <Link href={'/lecturer'}>
            <Button className={'w-full mt-4 text-white'}>
              Lihat Dosen Prodi
              <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default AboutAndLecturer13
