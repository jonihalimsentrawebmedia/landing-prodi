import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const ContactRegisterTheme3 = () => {
  return (
    <>
      <div className={'py-10 container flex items-center flex-col'}>
        <h2 className="text-primary font-semibold lg:text-2xl text-center">
          Masih Ada Pertanyaan? Tim Kami Siap Membantumu! ☎️
        </h2>

        <p className="text-center max-w-5xl mx-auto mt-4 text-xs lg:text-base">
          Proses pendaftaran dan pemilihan jalur yang tepat adalah langkah awal yang krusial. Jika
          kamu masih memiliki pertanyaan spesifik yang belum terjawab, jangan ragu untuk menghubungi
          kami. Tim marketing dan administrasi Program Studi siap menjadi pemandu dan memberikan
          solusi terbaik untukmu
        </p>

        <Link href={'/contact'}>
          <Button className={'text-white mx-auto rounded-full max-w-[600px] mt-5'}>
            Kunjungi Halaman Kontak & Pendaftaran
          </Button>
        </Link>
      </div>
    </>
  )
}
