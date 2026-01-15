'use client'

import { SkeletonNewsCol, SkeletonNewsRow } from '@/app/information/components/skeleton'
import { CardNewsCol } from '@/app/information/components/cardNewCol'
import { CardNewsRow } from '@/app/information/components/CardNewsRow'
import { UseGetNews } from '@/app/homepage/hooks'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Dispatch, SetStateAction, useEffect } from 'react'

interface Props {
  setNotIncludeId: Dispatch<SetStateAction<string>>
}

export const SectionNews = (props: Props) => {
  const { setNotIncludeId } = props

  const { news, loading } = UseGetNews({
    page: '1',
    limit: '4',
  })

  useEffect(() => {
    if (news) {
      const temp = news.map((row) => row.id_berita)
      setNotIncludeId(temp.join('|'))
    }

    //eslint-disable-next-line
  }, [news])

  const newNews = news.slice(0, 1)
  const newNews2 = news.slice(1, 4)

  return (
    <>
      <div className={'w-full py-8 pb-10 bg-[#EAEAEA]'}>
        <div className="grid grid-cols-2 items-start gap-5 container">
          <Link href={'/information'} className={'flex items-center gap-1.5'}>
            <ArrowLeft className={'size-4'} />
            Kembali
          </Link>
          <p className="text-2xl font-semibold col-span-4">
            <span className={'bg-[#CDA327] px-0.5 '}>Berita</span> Terbaru
          </p>
          {loading ? (
            <>
              <SkeletonNewsCol />
              <div className={'flex flex-col gap-5'}>
                {Array.from({ length: 3 }).map((_, i) => (
                  <SkeletonNewsRow key={i} />
                ))}
              </div>
            </>
          ) : (
            <>
              <Link href={`/information/news/${newNews[0]?.slug}`}>
                <CardNewsCol item={newNews[0]} />
              </Link>
              <div className={'flex flex-col gap-5'}>
                {newNews2.map((item, index) => (
                  <Link href={'/information/news/' + item?.slug} key={index}>
                    <CardNewsRow item={item} key={index} />
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
