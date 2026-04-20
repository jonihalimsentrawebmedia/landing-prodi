'use client'

import { UseGetNews } from '@/app/homepage/hooks'
import Image from 'next/image'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const NewsListSectionV5 = () => {
  const { news, loading: load1 } = UseGetNews({ page: '1', limit: '3' })

  if (load1) return <></>
  return (
    <>
      <div className="container-sm py-8 space-y-6">
        <p className="text-2xl font-semibold underline underline-offset-8 decoration-yellow-500 text-footer text-center">
          Berita Program Studi
        </p>
        <div className="flex flex-col lg:grid grid-cols-3 gap-4">
          {news?.map((row, index) => (
            <div key={index} className={'space-y-2'}>
              <Image
                src={row?.gambar}
                alt={row?.judul}
                className={'w-full h-[310px] object-cover rounded-xl'}
                width={500}
                height={310}
              />
              <p className="text-sm font-semibold text-footer">{row?.nama_kategori_berita}</p>
              <p className="text-2xl line-clamp-2">{row?.judul}</p>
              <p className="text-sm text-footer">
                {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM- yyyy') : ''}
              </p>
              <div
                className={'flex flex-col gap-2 html-class line-clamp-3! text-gray-500!'}
                dangerouslySetInnerHTML={{
                  __html: row?.isi_berita,
                }}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className={'bg-footer text-white mx-auto'}>
            Lihat Berita
            <ChevronRight className={'size-4'} />
          </Button>
        </div>
      </div>
    </>
  )
}
export default NewsListSectionV5
