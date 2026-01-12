import Image from 'next/image'

export const QuestionSection = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto py-8 bg-[#EAEAEA] h-[342px] relative'}>
        <div
          className={`bg-linear-to-t from-primary to-primary/60
          w-full h-full flex items-center absolute z-10
          `}
        >
          <div className="flex flex-col gap-5 container text-center items-center">
            <p className={'text-white text-2xl font-semibold'}>
              Masih Ada Pertanyaan? Tim Kami Siap Membantumu! ☎️
            </p>
            <p className="text-white">
              Proses pendaftaran dan pemilihan jalur yang tepat adalah langkah awal yang krusial.
              Jika kamu masih memiliki pertanyaan spesifik yang belum terjawab, jangan ragu untuk
              menghubungi kami. Tim marketing dan administrasi Program Studi siap menjadi pemandu
              dan memberikan solusi terbaik untukmu
            </p>
            <button className={'w-fit px-5 py-1.5 rounded-full text-white border border-white bg-white/32'}>
              Kunjungi Halaman Kontak & Pendaftaran
            </button>
          </div>
        </div>
        <Image
          src={'/img/faq.jpg'}
          alt={'image'}
          className={'w-full h-[342px] object-cover'}
          width={1920}
          height={342}
        />
      </div>
    </>
  )
}
