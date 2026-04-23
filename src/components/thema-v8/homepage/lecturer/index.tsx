'use client'

import { UseGetLecturer } from '@/app/homepage/hooks'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const OurLecturerSectionV8 = () => {
  const { lecturer } = UseGetLecturer({
    page: '1',
    limit: '8',
  })

  return (
    <div className="py-16 bg-white">
      <div className="container-sm px-5 lg:px-20">
        {/* Title */}
        <h2 className="text-center text-[#1A365D] text-[31px] font-semibold font-montserrat mb-12">
          Dosen Kami
        </h2>

        {/* Grid Dosen */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {lecturer?.map((row, k) => (
            <div
              key={k}
              className="border-4 border-[#1A365D] rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow"
            >
              {/* Foto Dosen */}
              <div className="relative w-full aspect-square">
                <Image
                  src={row?.gambar_url ?? '/img/noimg.png'}
                  alt={row?.nama}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Nama Dosen */}
              <div className="bg-[#1A365D] p-4 text-center h-full">
                <p className="text-white font-montserrat font-semibold text-[20px] leading-tight">
                  {row?.nama}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button Lihat Semua */}
        <div className="flex justify-center mt-12">
          <Link href="/lecturer">
            <Button className="bg-[#1A365D] hover:bg-[#132a47] text-white text-base rounded font-semibold flex items-center gap-2">
              Lihat Semua Dosen
              <ChevronRight className="size-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OurLecturerSectionV8
