import { clsx } from 'clsx'
import Image from 'next/image'
import { format } from 'date-fns'

interface Props {
  gambar: string
  judul: string
  isi_berita: string
  published_at: string
}

export const CardNewsItem = (props: Props) => {
  const { gambar, judul, isi_berita, published_at } = props
  return (
    <>
      <div
        className={clsx(
          'bg-white shadow rounded-md overflow-hidden group hover:bg-primary-foreground',
          'dark:bg-primary border-gray-100/30 border'
        )}
      >
        <div className={'w-full h-[200px] lg:h-[240px] relative overflow-hidden'}>
          <Image
            src={gambar}
            alt={judul}
            className={
              'w-full h-[200px] lg:h-[240px] object-cover group-hover:scale-110 transition-all duration-300 cursor-pointer'
            }
            width={330}
            height={240}
          />
        </div>

        <div className={'p-2 flex flex-col gap-1.5'}>
          <p className="font-semibold line-clamp-2 group-hover:text-primary dark:group-hover:text-white">
            {judul}
          </p>
          <p className="text-gray-500 text-xs font-semibold">
            {published_at ? format(published_at, 'dd MMM yyyy') : '-'}
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: isi_berita }}
            className={'line-clamp-3 text-sm'}
          />
        </div>
      </div>
    </>
  )
}
