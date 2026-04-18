'use client'

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { MdEmail } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { AboutDetailSkeleton } from '../skeleton'
import { UseGetAboutProdi } from '@/app/homepage/hooks'
import { useStateContext } from '@/contexts'

export const AboutSection = () => {
  const [{ profile }] = useStateContext()
  const { aboutProdi, loading } = UseGetAboutProdi()

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

  const detail = profile?.SatuanOrganisasi

  if (loading) return <AboutDetailSkeleton />

  return (
    <>
      <p className="text-2xl text-primary dark:text-white">
        Tentang {detail?.kode_jenjang}-{detail?.nama}
      </p>
      <div className={'rounded-lg w-full p-4 mt-2 bg-linear-to-r from-primary to-[#004080]'}>
        <p className="text-2xl text-white">Terakreditasi Unggul</p>
        <p className="mt-1.5 text-white">No. 1239/SK/BAN-PT/Ak.KP/S/IV/2023</p>
      </div>

      <div className="w-full lg:w-3/4 mt-5">
        <div className="relative">
          <Carousel setApi={setApi}>
            <CarouselContent>
              {aboutProdi?.gambar?.map((row, k) => (
                <CarouselItem key={k}>
                  <Image
                    src={row?.url}
                    alt={'string'}
                    className={'w-full h-[250px] lg:h-[350px] object-cover'}
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
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className={'text-xs'}>Butuh informasi lebih lanjut? hubungi kami via email</p>
          <button
            className={
              'flex items-center gap-1.5 text-sm border bg-blue-100 rounded p-1.5 dark:bg-primary'
            }
          >
            <MdEmail />
            {detail?.email}
          </button>
        </div>
      </div>

      <div className={`mt-5`} dangerouslySetInnerHTML={{ __html: aboutProdi?.isi_konten ?? '' }} />

      <div className="flex items-center justify-end">
        <Link href={'/profile/unit'}>
          <Button variant={'outline'} className={'rounded-full border border-primary'}>
            Unit Pengelola
            <ArrowRight className={'size-4'} />
          </Button>
        </Link>
      </div>
    </>
  )
}
