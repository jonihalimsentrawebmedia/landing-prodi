import Image from 'next/image'
import { FaYoutube } from 'react-icons/fa'
import { SearchInput } from '@/components/common/filter/search'
import { useSearchParams } from 'next/navigation'
import { VideoSectionSkeleton } from './skeleton'
import { UseGetGalleryVideo } from '@/app/profile/gallery/hooks'

export const VideoSection = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  const { galleryVideo, loading } = UseGetGalleryVideo({
    search: search ?? '',
    page: '1',
    limit: '10',
  })

  if (loading) return <VideoSectionSkeleton />

  return (
    <>
      <div className={'container bg-white mt-2 dark:bg-primary'}>
        <SearchInput className={'w-full rounded'} placeholder={'Cari Video'} />
        <div className="py-4 grid lg:grid-cols-3 gap-5">
          {galleryVideo?.map((item, k) => (
            <div key={k}>
              <div className={'relative'}>
                <div className="absolute w-full h-full rounded flex items-center justify-center bg-[#333333]/60">
                  <FaYoutube className={'text-red-500 size-12'} />
                </div>
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
    </>
  )
}
