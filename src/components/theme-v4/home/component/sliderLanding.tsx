'use client'

import { useState, useEffect } from 'react'
import { UseGetSliderLanding } from '@/app/homepage/hooks'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { useStateContext } from '@/contexts'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { clsx } from 'clsx'
import { SliderLandingSkeleton } from '@/components/theme-v4/home/component/skeleton'
import { motion, AnimatePresence, Variants } from 'framer-motion'

export const SliderLandingTheme4 = () => {
  const { sliderLanding, loading } = UseGetSliderLanding()
  const [{ profile }] = useStateContext()
  const detail = profile?.SatuanOrganisasi

  const [current, setCurrent] = useState(0)
  const items = sliderLanding?.filter((row) => row?.is_atas) || []
  const length = items.length

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length)
    }, 5000)
    return () => clearInterval(interval)
  }, [length])

  // Variants
  const slideVariants: Variants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  }

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 15 } },
  }

  const iconVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.15, type: 'spring', stiffness: 100 },
    }),
  }

  if (loading) return <SliderLandingSkeleton />

  return (
    <div className="w-full mx-auto max-w-[1920px] lg:min-h-[600px] relative">
      {/* Carousel */}
      <div className="lg:p-5 w-full relative">
        {/* Overlay */}
        <div className="bg-[#33333380] absolute z-10 w-full lg:w-[calc(100%-40px)] h-full lg:h-[600px] lg:rounded-lg" />

        <div className="relative w-full h-[300px] lg:h-[600px] overflow-hidden lg:rounded-lg">
          <AnimatePresence mode="wait">
            {items.map((row, index) =>
              index === current ? (
                <motion.div
                  key={index}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="absolute top-0 left-0 w-full h-full"
                >
                  <Image
                    src={row.gambar_url}
                    alt={`Slide ${index}`}
                    width={1920}
                    height={600}
                    className="w-full h-full lg:rounded-lg object-cover"
                  />
                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {items.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  i === current ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Info Card */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        className={clsx(
          'lg:max-w-[960px] w-full p-2 absolute z-10 lg:-bottom-16 transform left-1/2 -translate-x-1/2',
          'w-[calc(100%-30px)] -bottom-20'
        )}
      >
        <Card>
          <CardContent className="p-2">
            <div className="flex flex-col justify-center items-center gap-1.5">
              <motion.p
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.1 } },
                }}
                className="text-center text-xs lg:text-base"
              >
                Selamat Datang di Website Resmi
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
                }}
                className="text-primary lg:text-4xl font-semibold text-2xl text-center"
              >
                {detail?.kode_jenjang}-{detail?.nama}
              </motion.p>

              <motion.div
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1, transition: { delay: 0.3, duration: 0.5 } },
                }}
                className="w-full bg-[#CDA327] h-[2px] my-1.5 origin-left"
              />

              <motion.ul className="w-fit flex items-center gap-5">
                {[FaFacebook, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={iconVariants}
                  >
                    <Icon className="size-8 text-primary cursor-pointer hover:scale-110 transition-transform duration-300" />
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
