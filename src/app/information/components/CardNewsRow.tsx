import Image from 'next/image'
import { MdCalendarMonth } from 'react-icons/md'
import { format } from 'date-fns'
import { INews } from '@/app/homepage/data/types'

type Props = {
  item: INews
}

export const CardNewsRow = (props: Props) => {
  const { item } = props
  return (
    <div className={'flex items-center gap-5 bg-white'}>
      <div className="min-w-[214px] h-[180px]">
        <Image
          src={item?.gambar}
          alt={item.judul}
          className={'w-[214px] h-[180px] object-cover'}
          width={214}
          height={180}
        />
      </div>
      <div className={'pl-0 p-2'}>
        <p className="text-2xl line-clamp-2 font-semibold">{item?.judul}</p>
        <p className={'flex items-center gap-1 text-gray-500'}>
          <MdCalendarMonth />
          {item?.published_at ? format(item?.published_at, 'dd MMM yyyy') : '-'}
        </p>
        <div
          className={'line-clamp-2'}
          dangerouslySetInnerHTML={{ __html: item?.isi_berita ?? '' }}
        />
      </div>
    </div>
  )
}
