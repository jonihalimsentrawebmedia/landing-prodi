'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useStateContext } from '@/contexts'
import { UseGetServiceProdi } from '@/app/homepage/hooks'
import { useMobile } from '@/hooks'
import { clsx } from 'clsx'

const ListService = () => {
  const [{ profile }] = useStateContext()
  const { loading, services } = UseGetServiceProdi()
  const { isMobile } = useMobile()

  return (
    <>
      {loading ? (
        <>
          <div className="flex gap-4 py-4 container animate-pulse">
            <div className="h-8 w-40 rounded-full bg-gray-300" />
            <div className="flex gap-3 overflow-hidden">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-8 w-60 rounded-full bg-gray-200" />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div
          className={clsx(
            'flex flex-col lg:flex-row gap-2 lg:gap-4 w-full relative py-4',
            isMobile ? 'px-2' : 'container'
          )}
        >
          <div className="rounded-full w-fit bg-primary whitespace-nowrap text-white px-3 py-1 lg:px-5 lg:py-1.5 text-xs lg:text-sm flex items-center">
            {profile?.domain}
          </div>
          <div className="w-[2px] h-8 lg:h-11 bg-[#C8C8C8] hidden lg:block" />
          <div className="flex gap-4 items-center w-full overflow-hidden">
            <ArrowLeft className="text-primary dark:text-white size-4 hidden lg:block" />
            <div className="lg:flex w-fit gap-4 flex overflow-x-auto text-xs">
              {services
                .filter((row) => row.tampil === 'Y')
                ?.map((row, k) => (
                  <Link
                    href={row?.url_layanan || '#'}
                    target="_blank"
                    key={k}
                    className={`rounded-full w-full flex gap-2 border items-center
                    p-1 px-3 mb-2 lg:mb-0 text-xs lg:text-sm text-primary bg-primary/20
                    border-primary whitespace-nowrap lg:px-4 lg:py-2 font-semibold
                    dark:text-white dark:border-white dark:bg-primary
                  `}
                  >
                    {row?.nama_layanan}
                  </Link>
                ))}
            </div>
            <ArrowRight className="text-primary hidden lg:block size-4 dark:text-white" />
          </div>
        </div>
      )}
    </>
  )
}

export default ListService
