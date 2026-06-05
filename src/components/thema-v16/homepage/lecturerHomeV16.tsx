'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { UseGetLecturer } from '@/app/homepage/hooks'

const ContentLecturerV16 = () => {
  const { lecturer } = UseGetLecturer({
    page: '1',
    limit: '8',
  })

  return (
    <section className="py-16 lg:py-20">
      <div className="container-sm mx-auto px-4">
        <div className="mb-10 flex justify-center">
          <div className="border-b-4 border-[#CDA327] pb-4">
            <h2 className="font-sora text-3xl font-normal text-primary lg:text-[31px]">
              Dosen Kami
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-5">
          {lecturer?.map((item) => (
            <div
              key={item.id_dosen}
              className="rounded-2xl border border-[#C8C8C8] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* FOTO */}
              <div className="flex justify-center">
                <div className="relative h-[220px] w-[220px] overflow-hidden rounded-full">
                  <Image
                    src={item.gambar_url ?? 'noimg.png'}
                    alt={item.nama}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* INFO */}
              <div className="mt-4 text-center">
                <h3 className="line-clamp-2 font-sora text-xl text-gray-800">{item.nama}</h3>

                {item.nidn && <p className="mt-2 text-sm text-gray-500">NIDN {item.nidn}</p>}

                {item.golongan && <p className="mt-1 text-sm text-gray-500">{item.golongan}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-10 flex justify-center">
          <Link
            href={'/lecturer'}
            className="inline-flex items-center gap-2 rounded-lg border border-primary bg-primary px-6 py-2.5 font-semibold text-white transition hover:bg-[#0d675f]"
          >
            Lihat Semua Dosen
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContentLecturerV16
