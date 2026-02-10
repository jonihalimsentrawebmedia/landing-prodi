'use client'

import { UseGetNews } from '@/app/homepage/hooks'
import Image from 'next/image'
import { format } from 'date-fns'
import { NewsCardSkeleton } from '@/app/homepage/components'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'

export const NewNewsSection = () => {
  const { news, loading } = UseGetNews()

  const FourNew = news?.slice(0, 4)
  if (loading)
    return (
      <div className="container flex-nowrap overflow-x-auto lg:grid grid-cols-4 gap-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <NewsCardSkeleton key={i} />
        ))}
      </div>
    )

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  }

  const card: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // modern smooth curve
      },
    },
  }

  return (
    <>
      <div className={'w-full max-w-[1920px] bg-[#EAEAEA] dark:bg-primary/40 py-8 relative'}>
        <div className="container relative z-30">
          <div className="flex items-center justify-between gap-5">
            <p className="text-2xl font-semibold col-span-4 dark:text-primary">
              Baca <span className={'bg-[#CDA327] px-0.5'}>Berita</span> Terbaru
            </p>
            <Link href={'/information/news'} className={'flex items-center gap-1.5'}>
              Lihat Semua
              <ArrowRight className={'size-4'} />
            </Link>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5"
          >
            {FourNew?.map((item, k) => (
              <motion.div key={k} variants={card}>
                <Link href={`/information/news/${item?.slug}`}>
                  <div className="group relative border border-b-white w-full lg:min-w-full min-w-[320px] overflow-hidden rounded">
                    {/* IMAGE */}
                    <Image
                      src={item?.gambar}
                      alt="gambar"
                      width={305}
                      height={305}
                      className="w-full h-[305px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent
                      flex p-3 flex-col justify-end
                      transition-all duration-500 group-hover:from-primary/95 group-hover:via-primary/60"
                    >
                      <p className="line-clamp-2 font-semibold text-white translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        {item?.judul}
                      </p>

                      <p className="text-xs text-white/90 mt-1">
                        {item?.published_at ? format(item?.published_at, 'dd MMMM yyyy') : '-'}
                      </p>
                    </div>

                    {/* FLOAT SHADOW */}
                    <div className="absolute inset-0 rounded ring-0 group-hover:ring-2 ring-primary/40 transition-all duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}
