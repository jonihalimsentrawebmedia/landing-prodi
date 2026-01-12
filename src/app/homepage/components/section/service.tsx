'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useStateContext } from '@/contexts'
import Link from 'next/link'

const SectionServices = () => {
  const [{ profile }] = useStateContext()
  const loading = false

  const DumpService = [
    { url_layanan: '#', nama_layanan: 'SIAM Mahasiswa' },
    { url_layanan: '#', nama_layanan: 'SIAM Dosen' },
    { url_layanan: '#', nama_layanan: 'SIMPEG' },
    { url_layanan: '#', nama_layanan: 'Penerimaan Mahasiswa Baru' },
  ]

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="flex gap-4 w-full relative py-4 container">
          <div className="rounded-full bg-primary whitespace-nowrap text-white px-5 py-1.5 text-xs lg:text-sm flex items-center">
            {profile?.domain}
          </div>
          <div className="w-[2px] h-8 lg:h-11 bg-[#C8C8C8]" />
          <div className="flex gap-4 items-center w-full overflow-hidden">
            <ArrowLeft className="text-primary hidden lg:block" />
            <div className="lg:flex w-fit gap-4 flex overflow-x-auto text-xs">
              {DumpService?.map((row, k) => (
                <Link
                  href={row?.url_layanan || '#'}
                  target="_blank"
                  key={k}
                  className={`rounded-full w-full
                  flex gap-2 border items-center
                  text-primary bg-blue-100 border-blue-400
                  whitespace-nowrap  px-4 py-2 font-semibold
                  `}
                >
                  {row?.nama_layanan}
                </Link>
              ))}
            </div>
            <ArrowRight className="text-primary hidden lg:block" />
          </div>
        </div>
      )}
    </>
  )
}

export default SectionServices
