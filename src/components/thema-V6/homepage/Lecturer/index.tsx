'use client'

import { UseGetLecturer } from '@/app/homepage/hooks'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const OurLecturerSection = () => {
  const { lecturer } = UseGetLecturer({
    page: '1',
    limit: '8',
  })

  return (
    <>
      <div className="w-full bg-primary/20 py-10">
        <div className="container-sm">
          <h2 className={'text-center lg:text-2xl font-semibold'}>Dosen Kami</h2>
          <div className="my-5 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {lecturer?.map((row, k) => (
              <div key={k}>
                <div
                  className={
                    'relative w-full h-[210px] lg:h-[400px] border border-footer rounded-lg'
                  }
                >
                  <Image
                    src={row?.gambar_url ?? '/img/noimg.png'}
                    alt={row?.nama}
                    fill
                    className={'object-cover object-center rounded-lg'}
                  />
                  <div className="absolute p-4 bg-linear-to-b from-transparent to-footer w-full bottom-0 rounded-b-lg">
                    <p className={'text-white lg:text-base text-xs'}>{row?.nama}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <a href={'/lecturer'} className={'text-footer'}>
              <Button className={'bg-footer hover:bg-footer text-white'}>
                Lihat Semua Dosen
                <ChevronRight className={'size-4'} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurLecturerSection
