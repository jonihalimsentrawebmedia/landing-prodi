'use client'

import { UseGetGalleryPhoto } from '@/app/profile/gallery/hooks'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { IoEyeSharp } from 'react-icons/io5'
import { useEffect, useState } from 'react'
import { DialogCustom } from '@/components/comon/Dialog'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'

export const SectionPhotoGallery = () => {
  const { slug } = useParams()
  const { galleryPhoto } = UseGetGalleryPhoto({
    slug: (slug as string) ?? '',
  })

  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi | null>(null)

  // ketika modal terbuka, scroll ke gambar yang dipilih
  useEffect(() => {
    if (open && api) {
      api.scrollTo(currentIndex)
    }
  }, [open, api, currentIndex])

  return (
    <>
      <div className={'flex flex-col gap-5'}>
        <div className={'text-xl font-semibold flex items-center gap-2'}>
          <button
            onClick={() => router.back()}
            className={'rounded-full border border-primary p-1.5'}
          >
            <ArrowLeft className={'size-4'} />
          </button>
          {slug}
        </div>

        <div className="grid grid-cols-3 gap-5">
          {galleryPhoto?.map((row, k) => (
            <div
              className={'relative group cursor-pointer'}
              key={k}
              onClick={() => {
                setCurrentIndex(k) // simpan index yang diklik
                setOpen(!open)
              }}
            >
              <div
                className={`absolute w-full h-full opacity-0 group-hover:opacity-100
                  flex items-start justify-between flex-col p-2.5
                  bg-linear-to-t from-[#333333] to-[#333333]/40
                  `}
              >
                <div className={'w-full h-full flex items-center justify-center'}>
                  <IoEyeSharp className={'size-6 text-white'} />
                </div>
                <p className={'text-white text-sm'}>{row?.judul}</p>
              </div>
              <Image
                src={row?.link_foto}
                alt={row?.judul}
                className={'w-full h-[210px] object-cover rounded'}
                width={280}
                height={210}
              />
            </div>
          ))}
        </div>

        <DialogCustom
          open={open}
          setOpen={setOpen}
          className={'lg:min-w-3xl bg-transparent border-none'}
        >
          <div className="relative">
            <Carousel setApi={setApi}>
              <CarouselContent>
                {galleryPhoto?.map((row, k) => (
                  <CarouselItem key={k}>
                    <Image
                      src={row?.link_foto}
                      alt={row?.judul}
                      className={'object-contain h-[500px] w-auto mx-auto'}
                      width={1080}
                      height={1080}
                    />
                    <p className="text-white">{row?.judul}</p>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* BUTTON PREV */}
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute left-2 top-1/2 -translate-y-1/2
                bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            >
              <ChevronLeft className="size-5" />
            </button>

            {/* BUTTON NEXT */}
            <button
              onClick={() => api?.scrollNext()}
              className="absolute right-2 top-1/2 -translate-y-1/2
                bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </DialogCustom>
      </div>
    </>
  )
}
