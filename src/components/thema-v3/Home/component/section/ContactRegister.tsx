'use client'

import { motion, Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const section: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

/* ============ COMPONENT ============ */

export const ContactRegisterTheme3 = () => {
  return (
    <motion.div
      variants={section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative py-16 container flex items-center flex-col text-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -top-20 -z-10" />

      {/* Title */}
      <motion.h2 variants={item} className="text-primary font-semibold lg:text-2xl">
        Masih Ada Pertanyaan? Tim Kami Siap Membantumu! ☎️
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={item}
        className="max-w-5xl mx-auto mt-4 text-xs lg:text-base text-muted-foreground"
      >
        Proses pendaftaran dan pemilihan jalur yang tepat adalah langkah awal yang krusial. Jika
        kamu masih memiliki pertanyaan spesifik yang belum terjawab, jangan ragu untuk menghubungi
        kami. Tim marketing dan administrasi Program Studi siap menjadi pemandu dan memberikan
        solusi terbaik untukmu
      </motion.p>

      {/* Button */}
      <motion.div variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
        <Link href="/contact">
          <Button className="relative mt-6 rounded-full lg:px-8 lg:py-6 text-xs lg:text-sm text-white shadow-lg overflow-hidden group">
            <span className="relative z-10">Kunjungi Halaman Kontak & Pendaftaran</span>

            {/* Shine Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  )
}
