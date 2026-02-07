'use client'

import { TitleContent } from '@/components/thema-v3/component/common/titleContent'
import { UseGetNews } from '@/app/homepage/hooks'
import { CardNewsTheme3 } from '@/components/thema-v3/component/common/CardNews'
import { NewsLandingSkeleton } from '@/components/thema-v3/Home/component/skeleton'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const InformationNews = () => {
  const { news, loading } = UseGetNews({
    page: '1',
    limit: '4',
  })
  if (loading) return <NewsLandingSkeleton />

  return (
    <>
      <div className="dark:bg-primary w-full max-w-[1920px] mx-auto">
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
            <div className="grid mt-5 gap-5 grid-cols-4">
              {news?.map((item, k) => (
                <div key={k}>
                  <CardNewsTheme3 data={item} />
                </div>
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
