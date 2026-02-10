'use client'

import { TitleContent } from '@/components/thema-v3/component/common/titleContent'
import { UseGetNews } from '@/app/homepage/hooks'
import { CardNewsTheme3 } from '@/components/thema-v3/component/common/CardNews'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { NewsLandingSkeleton } from '../skeleton'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { LazyMotion, domAnimation, m, Variants } from 'framer-motion'

export const NewsLanding = () => {
  const { news, loading } = UseGetNews({
    page: '1',
    limit: '4',
  })

  if (loading) return <NewsLandingSkeleton />

  /* ✨ stagger parent */
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  /* ✨ card anim */
  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  /* ✨ button anim */
  const buttonAnim = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.3 },
    },
  }

  return (
    <LazyMotion features={domAnimation}>
      <div className="w-full my-5 mx-auto max-w-[1920px]">
        <div className="container flex flex-col items-center">
          {/* 🔥 Title entrance */}
          <m.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <TitleContent text={'Berita Program Studi'} className={'w-full'} />
          </m.div>

          {/* 📱 MOBILE */}
          <Carousel className="block lg:hidden mt-4 w-full">
            <CarouselContent>
              {news?.map((row, k) => (
                <CarouselItem key={k} className="basis-5/6">
                  <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <Link href={`/information/news/${row?.slug}`}>
                      <CardNewsTheme3 data={row} />
                    </Link>
                  </m.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* 🖥 DESKTOP GRID */}
          <m.div
            className="hidden lg:grid grid-cols-4 gap-5 mt-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {news?.map((itemNews, k) => (
              <m.div
                key={k}
                variants={item}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <Link href={`/information/news/${itemNews?.slug}`}>
                  <CardNewsTheme3 data={itemNews} />
                </Link>
              </m.div>
            ))}
          </m.div>

          {/* 🔘 BUTTON */}
          <m.div
            variants={buttonAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto"
          >
            <Link href={'/information/news'}>
              <Button
                variant="outline"
                className="text-primary border-primary hover:text-primary rounded-full mt-5 group"
              >
                Lihat Berita Lain
                <ArrowRight className="size-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </m.div>
        </div>
      </div>
    </LazyMotion>
  )
}
