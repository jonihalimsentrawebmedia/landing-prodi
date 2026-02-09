'use client'

import { TitleContent } from '@/components/thema-v3/component/common/titleContent'
import { UseGetNews } from '@/app/homepage/hooks'
import { CardNewsTheme3 } from '@/components/thema-v3/component/common/CardNews'
import { NewsLandingSkeleton } from '@/components/thema-v3/Home/component/skeleton'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

export const InformationNews = () => {
  const { news, loading } = UseGetNews({
    page: '1',
    limit: '4',
  })
  if (loading) return <NewsLandingSkeleton />

  return (
    <>
      <div className="dark:bg-primary/30 w-full max-w-[1920px] mx-auto">
        <div
          style={{
            backgroundImage: "url('/img/grenbg.png')",
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className={'w-full py-5'}
        >
          <div className="container py-5">
            <TitleContent
              text={'Berita Program Studi'}
              className={'text-center w-full justify-center'}
              line_position={'bottom'}
            />
            
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

            <div className="flex items-center justify-center mt-5">
              <Link
                href={'/information/news'}
                className={
                  'flex items-center gap-2 text-primary border border-primary rounded-full p-1.5 px-3 text-sm font-semibold'
                }
              >
                Lihat Berita Lain
                <ArrowRight className={'size-4'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
