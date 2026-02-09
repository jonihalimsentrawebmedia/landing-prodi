'use client'

import { TitleContent } from '@/components/thema-v3/component/common/titleContent'
import { UseGetNews } from '@/app/homepage/hooks'
import { CardNewsTheme3 } from '@/components/thema-v3/component/common/CardNews'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { NewsLandingSkeleton } from '../skeleton'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

export const NewsLanding = () => {
  const { news, loading } = UseGetNews({
    page: '1',
    limit: '4',
  })

  if (loading) return <NewsLandingSkeleton />

  return (
    <>
      <div className={'w-full my-5 mx-auto max-w-[1920px]'}>
        <div className={'container flex flex-col items-center'}>
          <TitleContent text={'Berita Program Studi'} className={'w-full'} />

          <Carousel className={'block lg:hidden mt-4 w-full'}>
            <CarouselContent>
              {news?.map((row, k) => (
                <CarouselItem key={k} className={'basis-5/6'}>
                  <Link href={`/information/news/${row?.slug}`}>
                    <CardNewsTheme3 data={row} />
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="hidden lg:grid grid-cols-4 gap-5 mt-4">
            {news?.map((item, k) => (
              <Link href={`/information/news/${item?.slug}`} key={k}>
                <CardNewsTheme3 data={item} />
              </Link>
            ))}
          </div>

          <Link href={'/information/news'}>
            <Button
              variant={'outline'}
              className={'text-primary border-primary hover:text-primary mx-auto rounded-full mt-5'}
            >
              Lihat Berita Lain
              <ArrowRight className={'size-4'} />
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
