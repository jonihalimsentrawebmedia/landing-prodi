import Image from 'next/image'
import { MdCalendarMonth } from 'react-icons/md'
import { format } from 'date-fns'
import { INews } from '@/app/homepage/data/types'

type Props = {
  item: INews
  className?: string
  titleClassName?: string
}

export const CardNewsCol = (props: Props) => {
  const { item, className = 'w-full h-[415px]', titleClassName } = props
  return (
    <div className={'flex flex-col justify-center gap-2 bg-white'}>
      <div className={className}>
        {item?.gambar && (
          <Image
            src={item?.gambar}
            alt={item?.judul}
            className={'w-full h-full object-cover'}
            width={214}
            height={180}
          />
        )}
      </div>
      <div className={'p-1 px-2.5'}>
        <p className={`text-2xl line-clamp-2 font-semibold ${titleClassName}`}>{item?.judul}</p>
        <p className={'flex items-center gap-1 mt-1.5 text-gray-500'}>
          <MdCalendarMonth />
          {item?.published_at ? format(item?.published_at, 'dd MMM yyyy') : '-'}
        </p>
        <div
          className={'line-clamp-2 mt-1.5'}
          dangerouslySetInnerHTML={{ __html: item?.isi_berita ?? '' }}
        />
      </div>
    </div>
  )
}
