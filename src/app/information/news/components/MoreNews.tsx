'use client'

import { UseGetNews } from '@/app/homepage/hooks'
import { CardNewsCol } from '@/app/information/components/cardNewCol'

export const MoreNews = () => {
  const { news } = UseGetNews({
    page: '1',
    limit: '8',
    start_index: '5',
  })

  return (
    <>
      <div className="w-full bg-primary py-10">
        <div className={'grid lg:grid-cols-4 gap-5 container'}>
          {news?.map((item, l) => (
            <CardNewsCol
              titleClassName={'text-base'}
              className={'w-full h-[310px]'}
              key={l}
              item={item}
            />
          ))}
        </div>
      </div>
    </>
  )
}
