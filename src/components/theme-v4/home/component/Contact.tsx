import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const ContactRegister = () => {
  return (
    <>
      <div className="w-full bg-white py-5 lg:py-10 mx-auto max-w-[1920px] px-4 lg:px-0">
        <div className="container bg-linear-to-r from-primary to-[#074B4B] p-5 rounded-xl flex flex-col items-center justify-center">
          <h2 className="text-white font-semibold lg:text-2xl text-center">
            Masih Ada Pertanyaan? Tim Kami Siap Membantumu! ☎️
          </h2>

          <p className="text-center max-w-5xl mx-auto mt-4 text-xs lg:text-base text-white">
            Proses pendaftaran dan pemilihan jalur yang tepat adalah langkah awal yang krusial. Jika
            kamu masih memiliki pertanyaan spesifik yang belum terjawab, jangan ragu untuk
            menghubungi kami. Tim marketing dan administrasi Program Studi siap menjadi pemandu dan
            memberikan solusi terbaik untukmu
          </p>

          <Link href={'/contact'}>
            <Button
              className={
                'text-white mx-auto bg-white/40 hover:bg-white/50 rounded-full w-fit text-xs lg:max-w-[600px] mt-5'
              }
            >
              Kunjungi Halaman Kontak & Pendaftaran
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
