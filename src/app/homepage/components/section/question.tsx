// import Image from 'next/image'
// import Link from 'next/link'
//
// export const QuestionSection = () => {
//   return (
//     <>
//       <div className={'w-full max-w-[1920px] mx-auto lg:py-8 py-5 bg-[#EAEAEA] dark:bg-gray-900 lg:h-[342px] relative'}>
//         <div
//           className={`bg-linear-to-t from-primary to-primary/60
//           w-full h-full flex items-center absolute z-10
//           `}
//         >
//           <div className="flex flex-col gap-5 container text-center items-center py-5 lg:py-0">
//             <p className={'text-white lg:text-2xl font-semibold'}>
//               Masih Ada Pertanyaan? Tim Kami Siap Membantumu! ☎️
//             </p>
//             <p className="text-white text-xs lg:text-base">
//               Proses pendaftaran dan pemilihan jalur yang tepat adalah langkah awal yang krusial.
//               Jika kamu masih memiliki pertanyaan spesifik yang belum terjawab, jangan ragu untuk
//               menghubungi kami. Tim marketing dan administrasi Program Studi siap menjadi pemandu
//               dan memberikan solusi terbaik untukmu
//             </p>
//             <Link href={'/contact'} className={'w-fit px-5 py-1.5 text-xs rounded-full text-white border border-white bg-white/32'}>
//               Kunjungi Halaman Kontak & Pendaftaran
//             </Link>
//           </div>
//         </div>
//         <Image
//           src={'/img/faq.jpg'}
//           alt={'image'}
//           className={'w-full lg:h-[342px] object-cover'}
//           width={1920}
//           height={342}
//         />
//       </div>
//     </>
//   )
// }


'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export const QuestionSection = () => {
  return (
    <div className="w-full max-w-[1920px] mx-auto lg:py-8 py-5 bg-[#EAEAEA] dark:bg-gray-900 lg:h-[342px] relative overflow-hidden">
      
      {/* PARALLAX BACKGROUND */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src="/img/faq.jpg"
          alt="image"
          fill
          className="object-cover"
        />
      </motion.div>
      
      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/50 z-10" />
      
      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="relative z-20 container flex flex-col gap-5 text-center items-center py-5 lg:py-0 h-full justify-center"
      >
        <motion.p variants={fadeUp} className="text-white lg:text-2xl font-semibold">
          Masih Ada Pertanyaan? Tim Kami Siap Membantumu! ☎️
        </motion.p>
        
        <motion.p variants={fadeUp} className="text-white text-xs lg:text-base max-w-2xl">
          Proses pendaftaran dan pemilihan jalur yang tepat adalah langkah awal yang krusial.
          Jika kamu masih memiliki pertanyaan spesifik yang belum terjawab, jangan ragu untuk
          menghubungi kami. Tim marketing dan administrasi Program Studi siap menjadi pemandu
          dan memberikan solusi terbaik untukmu
        </motion.p>
        
        {/* BUTTON */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            href="/contact"
            className="relative w-fit px-6 py-2 text-xs lg:text-sm rounded-full text-white border border-white bg-white/20 backdrop-blur-md overflow-hidden group"
          >
            <span className="relative z-10">
              Kunjungi Halaman Kontak & Pendaftaran
            </span>
            
            {/* glow effect */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-yellow-400/40 via-white/30 to-yellow-400/40 blur-xl" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
