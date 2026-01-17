import { UseGetGalleryVideo } from '@/app/profile/gallery/hooks'
import Image from 'next/image'
import { FaYoutube } from 'react-icons/fa'

export const VideoSection = () => {
  const { galleryVideo } = UseGetGalleryVideo()
  return (
    <>
      <div className={'container bg-[#EAEAEA] mt-8'}>
        <div className="lg:p-5 py-5 grid lg:grid-cols-3 gap-5">
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
