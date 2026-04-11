'use client'

import { UseGetNews } from '@/app/homepage/hooks'
import Link from 'next/link'
import { FaNewspaper } from 'react-icons/fa'
import { RunningTextNewsSkeleton } from '@/components/thema-v2/component/layout/header/skeleton'

const RunningTextNews = () => {
  const { news, loading } = UseGetNews({
    page: '1',
    limit: '5',
  })

  if (loading) return <RunningTextNewsSkeleton />

  return (
    <>
      <div className="w-full bg-footer text-white max-w-[1920px]">
        <div className="flex items-center gap-x-5 mx-auto w-full max-w-[1440px] overflow-hidden">
          <div
            className={
              'whitespace-nowrap z-10 p-2 bg-blue-500 font-semibold flex items-center gap-1.5'
            }
          >
            <FaNewspaper />
            Berita terbaru
          </div>
          <div className=" ml-4 flex w-max animate-marquee">
            {[...news, ...news].map((item, index) => (
              <Link
                href={`/information/news/${item?.slug}`}
                key={index}
                className="flex items-center gap-2 mx-4 whitespace-nowrap"
              >
                <span className="text-sm font-medium">{item?.judul}</span>
                <span className="text-red-500">•</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default RunningTextNews
