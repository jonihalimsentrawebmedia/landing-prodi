import { UseGetGalleryVideo } from '@/app/profile/gallery/hooks'
import Image from 'next/image'
import { FaYoutube } from 'react-icons/fa'
import { SearchInput } from '@/components/common/filter/search'
import { useSearchParams } from 'next/navigation'

export const VideoSection = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  const { galleryVideo } = UseGetGalleryVideo({
    search: search ?? '',
  })
  return (
    <>
      <div className={'container lg:mt-8'}>
        <div className="lg:p-5 py-5 grid lg:grid-cols-3 gap-5 bg-gray-100 dark:bg-transparent">
          <div className="col-span-3">
            <SearchInput className={'w-full rounded'} placeholder={'Cari Video'} />
          </div>
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
              <p className={'p-2 py-1 font-semibold dark:text-white'}>{item?.judul}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
