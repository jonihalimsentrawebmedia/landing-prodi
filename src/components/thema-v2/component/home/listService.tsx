'use client'

import { UseGetServiceProdi } from '@/app/homepage/hooks'
import { domAnimation, LazyMotion } from 'framer-motion'
import { FaClipboard } from 'react-icons/fa6'
import Link from 'next/link'
import { clsx } from 'clsx'
import { Skeleton } from '@/components/ui/skeleton'

const ListService = () => {
  const { loading, services } = UseGetServiceProdi()
  const filtered = services?.filter((row) => row.tampil === 'Y') || []

  if (loading) return <ListServiceSkeleton />

  return (
    <LazyMotion features={domAnimation}>
      <div className="w-full bg-gray-100">
        <div
          className={clsx(
            filtered.length > 6
              ? 'grid lg:grid-cols-6 gap-6'
              : 'flex items-stretch lg:justify-center gap-4 overflow-x-auto lg:overflow-visible',
            'container py-10'
          )}
        >
          {[...filtered].map((row, index) => (
            <Link
              key={index}
              href={row?.url_layanan || '#'}
              target="_blank"
              className={
                'col-span-1 lg:w-full bg-gray-100 min-w-[300px] shadow p-4 rounded flex flex-col gap-2 hover:bg-primary hover:text-white items-center justify-center py-10 border'
              }
            >
              <FaClipboard className={'size-10'} />
              <p>{row?.nama_layanan}</p>
            </Link>
          ))}
        </div>
      </div>
    </LazyMotion>
  )
}

export default ListService

const ListServiceSkeleton = () => {
  const isGrid = true // default ambil kondisi terbanyak (>=6)

  return (
    <div className="w-full bg-gray-100">
      <div
        className={clsx(
          isGrid ? 'grid lg:grid-cols-6 gap-2  lg:gap-6' : 'flex flex-col lg:flex-row items-stretch justify-center gap-4',
          'container py-10'
        )}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="col-span-1 w-full bg-gray-100 shadow p-4 rounded flex flex-col gap-3 items-center justify-center py-10 border"
          >
            {/* Icon */}
            <Skeleton className="size-10 rounded-md" />

            {/* Text */}
            <Skeleton className="h-4 w-[70%]" />
          </div>
        ))}
      </div>
    </div>
  )
}
