import { INews } from '@/app/homepage/data/types'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'

interface Props {
  data: INews
}

export const CardNewsTheme3 = (props: Props) => {
  const { data } = props
  return (
    <>
      <div className={'rounded-md overflow-hidden border'}>
        <div className={'w-full h-[200px] overflow-hidden'}>
          <Image
            className={'object-cover w-full h-[200px]'}
            height={200}
            width={310}
            src={data.gambar}
            alt={data.judul}
          />
        </div>
        <div className={'p-2 flex flex-col gap-1.5'}>
          <p className="line-clamp-2 font-semibold">{data?.judul}</p>
          <p className="flex items-center gap-1.5 text-gray-500 text-sm">
            <FaRegCalendarAlt className={'size-4 text-primary'} />
            {data?.published_at ? format(data?.published_at, 'dd MMM yyyy') : ''}
          </p>
          <div
            className="text-xs line-clamp-3"
            dangerouslySetInnerHTML={{ __html: data?.isi_berita ?? '' }}
          />
        </div>
      </div>
    </>
  )
}
