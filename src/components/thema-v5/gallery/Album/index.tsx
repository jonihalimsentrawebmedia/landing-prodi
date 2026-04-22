import { UseGetGalleryAlbum, UseGetGalleryPhoto } from '@/app/profile/gallery/hooks'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

const GalleryAlbumV5 = () => {
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

  const PassingSlug = (slug: string) => {
    const params = new URLSearchParams()
    params.set('slug', slug)
    if (slug === '') params.delete('slug')
    router.push(`?${params.toString()}`)
  }

  const loading = load1 || load2

  if (loading) return <></>

  return (
    <>
      {!slug ? (
        <div className={'lg:container mt-2'}>
          {/*<SearchInput className={'w-full rounded'} placeholder={'Cari Album'} />*/}
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
            <div className={'lg:grid lg:grid-cols-3 gap-5 bg-transparent dark:bg-primary flex flex-col'}>
              <div
                className={'text-xs lg:text-xl font-semibold flex items-center gap-2 col-span-3'}
              >
                <button
                  onClick={() => PassingSlug('')}
                  className={'rounded-full border border-primary bg-transparent p-1.5'}
                >
                  <ArrowLeft className={'size-4 text-footer'} />
                </button>
                {slug}
              </div>

              {galleryPhoto?.map((item, k) => (
                <div key={k} className={'cursor-pointer'}>
                  <div className={'relative group'}>
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
        </>
      )}
    </>
  )
}

export default GalleryAlbumV5
