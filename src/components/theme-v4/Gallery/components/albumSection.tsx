import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { useEffect, useState } from 'react'
import { IoEyeSharp } from 'react-icons/io5'
import { SearchInput } from '@/components/common/filter/search'
import { AlbumListSkeleton, AlbumPhotoSkeleton } from './skeleton'
import { UseGetGalleryAlbum, UseGetGalleryPhoto } from '@/app/profile/gallery/hooks'
import { DialogCustom } from '@/components/common/Dialog'

export const AlbumSection = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const slug = searchParams.get('slug')
  const search = searchParams.get('search')

  const { galleryAlbum, loading: load1 } = UseGetGalleryAlbum({
    search: search ?? '',
    page: '1',
    limit: '10',
  })

  const { galleryPhoto, loading: load2 } = UseGetGalleryPhoto({
    slug: slug ?? '',
  })

  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    if (open && api) {
      api.scrollTo(currentIndex)
    }
  }, [open, api, currentIndex])

  const PassingSlug = (slug: string) => {
    const params = new URLSearchParams()
    params.set('slug', slug)
    if (slug === '') params.delete('slug')
    router.push(`?${params.toString()}`)
  }

  const loading = load1 || load2

  if (loading) {
    return slug ? <AlbumPhotoSkeleton /> : <AlbumListSkeleton />
  }

  return (
    <>
      {!slug ? (
        <div className={'lg:container mt-2'}>
          <p className="text-2xl font-semibold mb-2.5">Galeri Album Photo</p>
          <SearchInput className={'w-full rounded'} placeholder={'Cari Album'} />
          <div className="grid lg:grid-cols-3 gap-5 mt-4">
            {galleryAlbum?.map((item, k) => (
              <div key={k} className={'cursor-pointer'} onClick={() => PassingSlug(item?.slug)}>
                <div className={'relative'}>
                  <Image
                    src={item?.thumbnail}
                    alt={'image'}
                    className={'w-full h-[240px] object-cover rounded'}
                    width={500}
                    height={240}
                  />
                </div>
                <p className={'p-2 py-1 font-semibold'}>{item?.judul}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="lg:container mt-2">
            <div className={'lg:grid lg:grid-cols-3 gap-5 bg-white dark:bg-primary flex flex-col'}>
              <div
                className={'text-xs lg:text-xl font-semibold flex items-center gap-2 col-span-3'}
              >
                <button
                  onClick={() => PassingSlug('')}
                  className={'rounded-full border border-primary bg-white p-1.5'}
                >
                  <ArrowLeft className={'size-4 text-primary'} />
                </button>
                {slug}
              </div>

              {galleryPhoto?.map((item, k) => (
                <div
                  key={k}
                  className={'cursor-pointer'}
                  onClick={() => {
                    setCurrentIndex(k)
                    setOpen(!open)
                  }}
                >
                  <div className={'relative group'}>
                    <div className="absolute w-full h-full rounded flex items-center justify-center bg-[#333333]/60">
                      <IoEyeSharp className={'text-white size-5 hidden group-hover:block'} />
                    </div>
                    <Image
                      src={item?.link_foto}
                      alt={'image'}
                      className={'w-full h-[200px] lg:h-[240px] object-cover rounded'}
                      width={500}
                      height={240}
                    />
                  </div>
                </div>
              ))}
            </div>
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
        </>
      )}
    </>
  )
}
