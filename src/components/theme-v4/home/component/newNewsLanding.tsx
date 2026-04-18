'use client'

import { UseGetNews } from '@/app/homepage/hooks'
import { UseGetProfileBackground } from '@/app/profile/hooks'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { FaCalendarAlt } from 'react-icons/fa'
import { formatDate } from 'date-fns'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NewsLandingSkeleton } from './skeleton'
import { motion, Variants } from 'framer-motion'

export const NewNewsLanding = () => {
  const { profileBackground: bg, loading: load2 } = UseGetProfileBackground({
    context: 'INFORMASI',
  })
  
  const { news, loading: load1 } = UseGetNews({ page: '1', limit: '4' })
  
  const loading = load1 || load2
  if (loading) return <NewsLandingSkeleton />
  
  // Variants untuk berita card
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: 'spring', stiffness: 80 },
    }),
  }
  
  return (
    <div className="w-full mx-auto max-w-[1920px] relative lg:h-[552px] flex items-center justify-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute top-0 z-10 w-full h-[552px] lg:h-full bg-linear-to-t from-primary to-[#33333300]" />
      
      {/* Carousel background */}
      <Carousel
        className="absolute w-full h-full"
        opts={{ loop: true, align: 'center' }}
        plugins={[Autoplay({ delay: 5000 }), Fade()]}
      >
        <CarouselContent>
          {bg?.map((row, k) => (
            <CarouselItem key={k}>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }} // animasi jalan saat 30% terlihat
                transition={{ duration: 1 }}
                style={{ transformOrigin: 'center' }}
              >
                <Image
                  src={row?.gambar_url}
                  alt="gambar"
                  className="w-full h-[552px] object-cover"
                  width={1920}
                  height={552}
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      {/* Content */}
      <div className="container py-10 relative z-20">
        <p className="font-semibold text-3xl">
          <span className="underline underline-offset-[8px] decoration-primary">Berita</span>
          Terbaru
        </p>
        
        <div className="mt-5 flex flex-nowrap overflow-hidden lg:grid grid-cols-4 gap-5">
          {news?.map((row, k) => (
            <motion.div
              key={k}
              custom={k}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // animasi jalan saat card terlihat
              variants={cardVariants}
              whileHover={{ scale: 1, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className="w-full rounded overflow-hidden min-w-[288px] mb-2 lg:mb-0 lg:w-full"
              style={{ transformOrigin: 'center' }}
            >
              <Image
                src={row?.gambar}
                alt="gambar"
                className="w-full h-[230px]"
                width={305}
                height={230}
              />
              <div className="p-2.5 flex flex-col bg-white dark:bg-primary border border-white">
                <p className="font-semibold line-clamp-2">{row?.judul}</p>
                <p className="flex items-center gap-1.5 text-sm text-gray-500">
                  <FaCalendarAlt className="text-primary" />
                  {row?.tanggal_berita ? formatDate(row?.tanggal_berita, 'dd MMM yyyy') : ''}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <Link
          href="/information/news"
          className="mt-5 text-center w-full flex items-center justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <Button className="rounded-full bg-white text-primary hover:bg-gray-50">
              Lihat Berita Lainnya
            </Button>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
