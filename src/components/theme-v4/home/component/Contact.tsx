'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion, Variants } from 'framer-motion'

export const ContactRegister = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="w-full bg-white py-5 lg:py-10 mx-auto max-w-[1920px] px-4 lg:px-0">
      <motion.div
        className="container bg-linear-to-r from-primary to-[#074B4B] p-5 rounded-xl flex flex-col items-center justify-center overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-white font-semibold lg:text-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Masih Ada Pertanyaan? Tim Kami Siap Membantumu! ☎️
        </motion.h2>

        <motion.p
          className="text-center max-w-5xl mx-auto mt-4 text-xs lg:text-base text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Proses pendaftaran dan pemilihan jalur yang tepat adalah langkah awal yang krusial. Jika
          kamu masih memiliki pertanyaan spesifik yang belum terjawab, jangan ragu untuk menghubungi
          kami. Tim marketing dan administrasi Program Studi siap menjadi pemandu dan memberikan
          solusi terbaik untukmu
        </motion.p>

        <motion.div
          className="mt-5 w-fit overflow-hidden rounded-full"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link href={'/contact'}>
            <Button className="rounded-full text-white bg-white/40 hover:bg-white/50 w-full text-xs lg:max-w-[600px]">
              Kunjungi Halaman Kontak & Pendaftaran
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
