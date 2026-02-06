'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useMobile } from '@/hooks'

export const ContactRegister = () => {
  const { isMobile } = useMobile()
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto h-full max-h-[290px] relative'}>
        <div
          className={`absolute w-full h-full bg-linear-to-t from-[#33333399] to-[#33333399]/60 z-10`}
        >
          <div className="container flex flex-col gap-2 items-center justify-center h-full">
            <h3 className={'lg:text-2xl text-white text-center'}>
              Masih Ada Pertanyaan? Tim Kami Siap Membantumu! ☎️
            </h3>
            <p className="text-white text-center text-xs">
              Proses pendaftaran dan pemilihan jalur yang tepat adalah langkah awal yang krusial.
              Jika kamu masih memiliki pertanyaan spesifik yang belum terjawab, jangan ragu untuk
              menghubungi kami. Tim marketing dan administrasi Program Studi siap menjadi pemandu
              dan memberikan solusi terbaik untukmu
            </p>
            <Link href={'/contact'}>
              <Button
                size={isMobile ? 'sm' : 'default'}
                variant={'outline'}
                className={
                  'bg-white/30 border-white text-white rounded-full w-fit hover:text-white hover:bg-white/40'
                }
              >
                Kunjungi Halaman Kontak & Pendaftaran
              </Button>
            </Link>
          </div>
        </div>

        <div className={'relative w-full h-[290px] flex items-center justify-center'}>
          <Image
            src="/img/contact.png"
            alt="contact"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </>
  )
}
