import Image from 'next/image'
import Link from 'next/link'

export const QuestionSection = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto lg:py-8 py-5 bg-[#EAEAEA] lg:h-[342px] relative'}>
        <div
          className={`bg-linear-to-t from-primary to-primary/60
          w-full h-full flex items-center absolute z-10
          `}
        >
          <div className="flex flex-col gap-5 container text-center items-center py-5 lg:py-0">
            <p className={'text-white lg:text-2xl font-semibold'}>
              Masih Ada Pertanyaan? Tim Kami Siap Membantumu! ☎️
            </p>
            <p className="text-white text-xs lg:text-base">
              Proses pendaftaran dan pemilihan jalur yang tepat adalah langkah awal yang krusial.
              Jika kamu masih memiliki pertanyaan spesifik yang belum terjawab, jangan ragu untuk
              menghubungi kami. Tim marketing dan administrasi Program Studi siap menjadi pemandu
              dan memberikan solusi terbaik untukmu
            </p>
            <Link href={'/contact'} className={'w-fit px-5 py-1.5 text-xs rounded-full text-white border border-white bg-white/32'}>
              Kunjungi Halaman Kontak & Pendaftaran
            </Link>
          </div>
        </div>
        <Image
          src={'/img/faq.jpg'}
          alt={'image'}
          className={'w-full lg:h-[342px] object-cover'}
          width={1920}
          height={342}
        />
      </div>
    </>
  )
}
