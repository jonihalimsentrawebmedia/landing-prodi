'use client'

import { UseGetNews } from '@/app/homepage/hooks'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { TitleUnderline } from '@/components/thema-v2/component/common/titleUnderLine'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const NewsLandingV15 = () => {
  const { news } = UseGetNews({
    page: '1',
    limit: '4',
  })

  return (
    <section className="py-10">
      <div className="container-sm max-w-[1280px] mx-auto">
        <TitleUnderline text={'Berita Program Studi'} className={'text-center'} />
        <div className="flex flex-col gap-6 mt-6">
          {news?.map((item) => (
            <Link href={`/information/news/${item?.slug}`} key={item?.id_berita}>
              <div className="flex flex-row items-start gap-4 w-full h-[162px]">
                {/* Thumbnail */}
                <div className="w-full max-w-[216px] h-[162px] shrink-0">
                  <Image
                    src={item?.gambar ?? '/img/noimg.png'}
                    alt={item?.judul}
                    width={216}
                    height={162}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* Informasi */}
                <div className="flex flex-col items-start gap-2 flex-1 h-[162px]">
                  {/* Tgl dan Kategori */}
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex items-center gap-2 px-2 py-1.5 bg-[#E9F5F2] rounded-full">
                      <FaRegCalendarAlt className="size-5 text-[#1F7A63]" />
                      <span className="text-[#1F7A63] font-bold text-base leading-6">
                        {item?.tanggal_berita
                          ? format(new Date(item?.tanggal_berita), 'dd-MM-yyyy')
                          : ''}
                      </span>
                    </div>
                    <div className="px-3 py-1.5 bg-[#E9F5F2] rounded-full">
                      <span className="text-[#1F7A63] font-bold text-base leading-6">
                        {item?.nama_kategori_berita}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[#444444] text-[25px] leading-[38px] line-clamp-1">
                    {item?.judul}
                  </h3>

                  {/* Description */}
                  <p className="text-[#444444] text-base leading-6 line-clamp-3">
                    {item?.isi_berita?.replace(/<[^>]*>/g, '') ?? ''}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link href={'/information/news'} className={'flex justify-center mt-4'}>
          <Button className={'text-white'}>
            Lihat Berita <ChevronRight />
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default NewsLandingV15
