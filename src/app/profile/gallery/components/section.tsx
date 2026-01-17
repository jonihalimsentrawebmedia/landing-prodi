'use client'

import { FilterSelect } from '@/components/common/filter/select'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { UseGetGalleryAlbum, UseGetGalleryVideo } from '@/app/profile/gallery/hooks'
import Image from 'next/image'
import { LuExternalLink } from 'react-icons/lu'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const GalleryProfileSection = () => {
  const selectData = [
    { label: 'Galeri Foto', value: 'photo' },
    { label: 'Galeri Video', value: 'video' },
  ]

  const { galleryAlbum, loading: load1 } = UseGetGalleryAlbum()
  const { galleryVideo, loading: load2 } = UseGetGalleryVideo()

  const loading = load1 || load2

  const router = useRouter()
  const searchParams = useSearchParams()
  const type = searchParams.get('type')

  useEffect(() => {
    if (!type) {
      const Params = new URLSearchParams()
      Params.set('type', selectData[0].value)
      router.push(`?${Params.toString()}`)
    }

    //eslint-disable-next-line
  }, [selectData, type])

  return (
    <>
      <div className={'space-y-5'}>
        {loading ? (
          <div className="h-9 w-40 bg-gray-200 rounded animate-pulse" />
        ) : (
          <p className="text-3xl font-semibold text-primary">Galeri</p>
        )}
        {loading ? (
          <div className="h-10 w-60 bg-gray-200 rounded animate-pulse" />
        ) : (
          <FilterSelect
            label={'Jenis'}
            data={selectData}
            placeholder={'Pilih Jenis'}
            name={'type'}
          />
        )}

        {loading && (
          <div className="grid lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="w-full h-[210px] bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        )}

        {type === 'photo' ? (
          <div className="grid lg:grid-cols-3 gap-5">
            {galleryAlbum?.map((row, k) => (
              <Link
                href={`/profile/gallery/${row?.slug}`}
                key={k}
                className={'relative group cursor-pointer'}
              >
                <div
                  className={`absolute w-full h-full opacity-0 group-hover:opacity-100
                  flex items-start justify-between flex-col p-2.5
                  bg-linear-to-t from-[#333333] to-[#333333]/40
                  `}
                >
                  <div className={'w-full h-full flex items-center justify-center'}>
                    <LuExternalLink className={'size-6 text-white'} />
                  </div>
                  <p className={'text-white text-sm'}>{row?.judul}</p>
                </div>
                <Image
                  src={row?.thumbnail}
                  alt={row?.judul}
                  className={'w-full h-[210px] object-cover rounded'}
                  width={280}
                  height={210}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-5">
            {galleryVideo?.map((row, k) => (
              <Link
                href={row?.link_video}
                target={'_blank'}
                key={k}
                className={'relative group cursor-pointer'}
              >
                <div
                  className={`absolute w-full h-full opacity-0 group-hover:opacity-100
                  flex items-start justify-between flex-col p-2.5
                  bg-linear-to-t from-[#333333] to-[#333333]/40
                  `}
                >
                  <div className={'w-full h-full flex items-center justify-center'}>
                    <LuExternalLink className={'size-6 text-white'} />
                  </div>
                  <p className={'text-white text-sm'}>{row?.judul}</p>
                </div>
                <Image
                  src={row?.thumbnail}
                  alt={row?.judul}
                  className={'w-full h-[210px] object-cover rounded'}
                  width={280}
                  height={210}
                />
              </Link>
            ))}
          </div>
        )}

        <div className="flex items-center mt-5 justify-between">
          <Link href={'/profile/news'}>
            <Button variant={'outline'} className={'rounded-full border border-primary'}>
              <ArrowLeft className={'size-4'} />
              Berita
            </Button>
          </Link>
          <Link href={'/profile/contact-us'}>
            <Button variant={'outline'} className={'rounded-full border border-primary'}>
              Hubungi Kami
              <ArrowRight className={'size-4'} />
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
