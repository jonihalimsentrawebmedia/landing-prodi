import { UseGetGalleryVideo } from '@/app/profile/gallery/hooks'
import Image from 'next/image'
import { FaCirclePlay } from 'react-icons/fa6'
import Link from 'next/link'

const GalleryVideo = () => {
  const { galleryVideo } = UseGetGalleryVideo({
    page: '1',
    limit: '9',
  })

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-5">
        {galleryVideo?.map((row, k) => (
          <Link href={row?.link_video} target={'_blank'} key={k}>
            <div className="relative w-full h-fit rounded-lg">
              <div className="absolute w-full h-full bg-[#333333]/80 rounded-lg flex items-center justify-center">
                <FaCirclePlay className={'size-8'} />
              </div>
              <Image
                src={row?.thumbnail}
                alt={row?.judul}
                className={'w-full h-[225px] object-cover rounded-lg'}
                width={500}
                height={250}
              />
            </div>
            <p>{row?.judul}</p>
          </Link>
        ))}
      </div>
    </>
  )
}

export default GalleryVideo
