'use client'

import { UseGetServiceProdi } from '@/app/homepage/hooks'
import Link from 'next/link'

const ServiceListV5 = () => {
  const { loading, services } = UseGetServiceProdi()
  const filtered = services?.filter((row) => row.tampil === 'Y') || []

  if (loading) return <></>

  return (
    <>
      <div className={'lg:max-w-[1920px] mx-auto bg-footer py-8'}>
        <div className="container-sm flex justify-start items-start overflow-scroll lg:overflow-visible flex-nowrap whitespace-nowrap  lg:grid grid-cols-4 lg:items-center lg:justify-center gap-x-6">
          {filtered.map((row, index) => (
            <Link key={index} href={`/layanan/${row?.slug}`}>
              <div
                className={'bg-white p-4 text-center border-primary text-footer rounded-lg'}
                key={index}
              >
                {row?.nama_layanan}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default ServiceListV5
