'use client'

import { UseGetLecturer } from '@/app/homepage/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const OurLecturerHomeV14 = () => {
  const { lecturer } = UseGetLecturer({ page: '1', limit: '4' })

  return (
    <>
      <div className={'container-sm py-8'}>
        <h2 className="lg:text-3xl font-semibold text-primary mx-auto border-b-[3px] border-yellow-500 pb-2.5 w-fit">
          Dosen Kami
        </h2>
        <div className="grid grid-cols-4 gap-4 mt-8">
          {lecturer?.map((row, k) => (
            <div className={'border p-4 rounded-md hover:shadow-lg'} key={k}>
              <Image
                src={row?.gambar_url}
                alt={row?.nama}
                width={200}
                height={200}
                className={'rounded w-full h-[250px] object-cover'}
              />
              <p className="text-2xl mt-2">{row?.nama}</p>
            </div>
          ))}
        </div>
        <Link href={'/lecturer'} className={'flex items-center justify-center mt-4'}>
          <Button className={'bg-footer hover:bg-footer text-white'}>
            Lihat Semua Dosen <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  )
}

export default OurLecturerHomeV14
