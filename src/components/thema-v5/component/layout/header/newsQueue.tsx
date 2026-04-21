import Link from 'next/link'
import { UseGetNews } from '@/app/homepage/hooks'

const NewsQueueSection = () => {
  const { news } = UseGetNews({
    page: '1',
    limit: '5',
  })
  return (
    <div className=" ml-4 flex w-max animate-marquee">
      {[...news, ...news].map((item, index) => (
        <Link
          href={`/information/news/${item?.slug}`}
          key={index}
          className="flex items-center gap-2 mx-4 whitespace-nowrap text-white"
        >
          <span className="text-sm font-medium">{item?.judul}</span>
          <span className="text-red-500">•</span>
        </Link>
      ))}
    </div>
  )
}

export default NewsQueueSection
