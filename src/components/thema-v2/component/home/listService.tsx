'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useStateContext } from '@/contexts'
import { UseGetServiceProdi } from '@/app/homepage/hooks'
import { useMobile } from '@/hooks'
import { clsx } from 'clsx'
import { LazyMotion, domAnimation, m, Variants } from 'framer-motion'

const ListService = () => {
  const [{ profile }] = useStateContext()
  const { loading, services } = UseGetServiceProdi()
  const { isMobile } = useMobile()

  const filtered = services?.filter((row) => row.tampil === 'Y') || []
  
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  }
  
  const item: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1], // modern cubic-bezier
      },
    },
  }

  return (
    <LazyMotion features={domAnimation}>
      {loading ? (
        <div className="flex gap-4 py-4 container animate-pulse">
          <div className="h-8 w-40 rounded-full bg-gray-300" />
          <div className="flex gap-3 overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-8 w-60 rounded-full bg-gray-200" />
            ))}
          </div>
        </div>
      ) : (
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={clsx(
            'flex flex-col lg:flex-row gap-2 lg:gap-4 w-full relative py-4 overflow-hidden',
            isMobile ? 'px-2' : 'container'
          )}
        >
          {/* DOMAIN BADGE */}
          <div className="rounded-full w-fit bg-primary whitespace-nowrap text-white px-3 py-1 lg:px-5 lg:py-1.5 text-xs lg:text-sm flex items-center">
            {profile?.domain}
          </div>

          <div className="w-[2px] h-8 lg:h-11 bg-[#C8C8C8] hidden lg:block" />

          <div className="flex gap-4 items-center w-full overflow-hidden">
            <ArrowLeft className="text-primary dark:text-white size-4 hidden lg:block" />

            {/* 🔥 Animated List */}
            <m.div
              variants={container}
              initial="hidden"
              animate="show"
              className="lg:flex w-fit gap-4 flex overflow-x-auto overflow-y-hidden text-xs"
            >
              {filtered.map((row, k) => (
                <m.div key={k} variants={item}>
                  <Link
                    href={row?.url_layanan || '#'}
                    target="_blank"
                    className="rounded-full w-full flex gap-2 border items-center
                      p-1 px-3 mb-2 lg:mb-0 text-xs lg:text-sm text-primary bg-primary/20
                      border-primary whitespace-nowrap lg:px-4 lg:py-2 font-semibold
                      dark:text-white dark:border-white dark:bg-primary
                      transition-all duration-300 hover:pr-2"
                  >
                    {row?.nama_layanan}
                  </Link>
                </m.div>
              ))}
            </m.div>

            <ArrowRight className="text-primary hidden lg:block size-4 dark:text-white" />
          </div>
        </m.div>
      )}
    </LazyMotion>
  )
}

export default ListService
