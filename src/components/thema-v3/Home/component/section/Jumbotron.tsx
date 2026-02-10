'use client'

import { UseGetSliderLanding } from '@/app/homepage/hooks'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { useStateContext } from '@/contexts'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import { SliderHomeSkeleton } from '../skeleton'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTypingText } from '@/helper'

export const SliderHomeTheme3 = () => {
  const { sliderLanding, loading } = UseGetSliderLanding()
  const [{ profile }] = useStateContext()
  const detail = profile?.SatuanOrganisasi

  const fullText = `${detail?.kode_jenjang ?? ''}- ${detail?.nama ?? ''}`

  const [startAnim, setStartAnim] = useState(false)

  useEffect(() => {
    if (!loading && detail?.nama) {
      const t = setTimeout(() => setStartAnim(true), 400) // delay dikit biar smooth
      return () => clearTimeout(t)
    }
  }, [loading, detail?.nama])

  const typedText = useTypingText(fullText, 35, startAnim)

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15, // jeda antar icon
        delayChildren: 0.2, // nunggu dikit setelah typing selesai
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  if (loading) return <SliderHomeSkeleton />

  return (
    <div className="w-full lg:h-[600px] lg:max-w-[1920px] mx-auto relative">
      <div className="bg-linear-to-t from-primary to-transparent w-full h-full absolute z-10 flex items-end justify-center">
        <div className="container py-8">
          <div className="mb-4 border-l-4 border-l-yellow-500 pl-4">
            <p className="text-xs lg:text-base text-white">Selamat Datang di Website Resmi</p>

            <motion.p
              className="text-lg lg:text-4xl text-white font-semibold"
              initial={{ opacity: 0, y: 30 }}
              animate={startAnim ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {typedText}
            </motion.p>
          </div>

          <motion.div
            className="mt-4 flex items-center gap-4"
            variants={container}
            initial="hidden"
            animate={'show'}
          >
            <motion.div variants={item}>
              <Link href={detail?.facebook ?? ''} target="_blank">
                <FaFacebook className="size-5 lg:size-9 text-white" />
              </Link>
            </motion.div>

            <motion.div variants={item}>
              <Link href={detail?.instagram ?? ''} target="_blank">
                <FaInstagram className="size-5 lg:size-9 text-white" />
              </Link>
            </motion.div>

            <motion.div variants={item}>
              <Link href={detail?.twitter ?? ''} target="_blank">
                <FaTwitter className="size-5 lg:size-9 text-white" />
              </Link>
            </motion.div>

            <motion.div variants={item}>
              <Link href={detail?.youtube ?? ''} target="_blank">
                <FaYoutube className="size-5 lg:size-9 text-white" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Carousel
        opts={{ loop: true, align: 'center' }}
        plugins={[Autoplay({ delay: 5000 }), Fade()]}
      >
        <CarouselContent>
          {sliderLanding
            ?.filter((row) => row?.is_atas)
            .map((row, k) => (
              <CarouselItem key={k}>
                <Image
                  src={row?.gambar_url}
                  alt="gambar"
                  width={1920}
                  height={600}
                  className="w-full h-[400px] lg:h-[600px] object-cover"
                />
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
