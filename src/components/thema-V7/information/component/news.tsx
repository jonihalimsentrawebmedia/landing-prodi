import { UseGetNews } from '@/app/homepage/hooks'
import Link from 'next/link'
import { format } from 'date-fns'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const InformationNewsV7 = () => {
  const { news } = UseGetNews({
    page: '1',
    limit: '3',
  })

  const FirstNews = news[0]
  const SecondNews = news.slice(1, 3)

  return (
    <>
      <p className="lg:text-3xl font-semibold text-primary underline decoration-2 decoration-yellow-500 underline-offset-[16px]">
        Berita Program Studi
      </p>
      <div className={'block lg:hidden space-y-4'}>
        <Link href={`/information/news/${FirstNews?.slug}`}>
          <div className="relative w-full h-full">
            <div className="absolute space-y-2.5 p-2.5 top-0 left-0 w-full h-full bg-linear-to-b from-primary to-transparent">
              <p className="text-xs bg-white w-fit rounded-full px-3 py-1.5 text-primary">
                {FirstNews?.nama_kategori_berita}
              </p>
              <p className={'text-white line-clamp-2 font-semibold'}>{FirstNews?.judul}</p>
              <p className={'text-white text-sm'}>
                {FirstNews?.tanggal_berita ? format(FirstNews?.tanggal_berita, 'dd-MM-yyyy') : ''}
              </p>
            </div>
            <Image
              src={FirstNews?.gambar ?? '/img/noimg.png'}
              alt={'gamabr'}
              className={'w-full h-[310px] object-cover'}
              width={500}
              height={310}
            />
          </div>
        </Link>
        <div className="mt-4 flex flex-col gap-4">
          {SecondNews?.map((row, index) => (
            <Link href={`/information/news/${row?.slug}`} key={index}>
              <div className={'border bg-white dark:bg-gray-800 p-4 rounded'}>
                <p className={'text-primary text-xs'}>
                  {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
                </p>
                <p className={'text-primary line-clamp-2 font-semibold'}>{row?.judul}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="items-start gap-5 py-5 hidden lg:flex">
        <Link href={`/information/news/${FirstNews?.slug}`} className="w-1/3">
          <div className="w-full h-[347px] relative">
            <Image
              src={FirstNews?.gambar ?? '/img/noimg.png'}
              sizes="100vw"
              alt={'gambar'}
              fill
              className={'object-cover object-center w-full h-[471px] rounded-lg'}
            />
          </div>
          <div className="space-y-4 mt-4">
            <div className={'flex gap-2'}>
              <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-primary flex items-center gap-1">
                <FaRegCalendarAlt className={'size-4'} />
                {FirstNews?.tanggal_berita ? format(FirstNews?.tanggal_berita, 'dd-MM-yyyy') : ''}
              </p>
              <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-primary">
                {FirstNews?.nama_kategori_berita}
              </p>
            </div>
            <p className="text-2xl text-gray-800 font-semibold line-clamp-2">{FirstNews?.judul}</p>
            <div
              className="flex flex-col line-clamp-3! items-center gap-2 html-class"
              dangerouslySetInnerHTML={{ __html: FirstNews?.isi_berita ?? '' }}
            />
          </div>
        </Link>

        <div className="w-2/3 flex flex-col gap-4">
          <div className="w-full flex gap-5">
            {SecondNews?.map((row, k) => (
              <Link key={k} href={`/information/news/${FirstNews?.slug}`} className="w-full">
                <div className="w-full h-[288px] relative">
                  <Image
                    src={row?.gambar ?? '/img/noimg.png'}
                    sizes="100vw"
                    alt={'gambar'}
                    fill
                    className={'object-cover object-center w-full h-[471px] rounded-lg'}
                  />
                </div>
                <div className="space-y-4 mt-4">
                  <div className={'flex gap-2'}>
                    <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-primary flex items-center gap-1">
                      <FaRegCalendarAlt className={'size-4'} />
                      {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
                    </p>
                    <p className="text-xs font-semibold bg-[#E6F4F1] w-fit rounded-full px-3 py-1.5 text-primary">
                      {row?.nama_kategori_berita}
                    </p>
                  </div>
                  <p className="text-2xl line-clamp-2 text-gray-800 font-semibold">{row?.judul}</p>
                  <div
                    className="flex flex-col line-clamp-3! items-center gap-2 html-class"
                    dangerouslySetInnerHTML={{ __html: row?.isi_berita ?? '' }}
                  />
                </div>
              </Link>
            ))}
          </div>
          <Link href={'/information/news'}>
            <Button className={'w-full bg-primary hover:bg-primary text-white'}>
              Lihat Berita <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default InformationNewsV7
