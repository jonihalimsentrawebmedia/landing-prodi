'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { FaNewspaper } from 'react-icons/fa'

const HeaderSkeleton = () => {
  return (
    <header className="w-full left-0 z-[999] bg-white max-w-[1920px]">
      <div className="w-full max-w-[1440px] mx-auto py-5 flex items-center justify-between">
        {/* LEFT: Logo + Text */}
        <div className="flex items-center gap-x-4">
          {/* Logo */}
          <Skeleton className="size-[75px] rounded-md" />

          {/* Text */}
          <div className="flex flex-col gap-y-2">
            <Skeleton className="h-6 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>

        {/* RIGHT: Menu */}
        <ul className="flex items-center gap-x-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i}>
              <Skeleton className="h-5 w-[80px]" />
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default HeaderSkeleton

export const RunningTextNewsSkeleton = () => {
  return (
    <div className="w-full overflow-hidden bg-footer text-white max-w-[1656px] mx-auto animate-pulse">
      <div className="flex items-center gap-x-5">
        {/* Label kiri */}
        <div className="whitespace-nowrap z-10 p-2 bg-blue-500 font-semibold flex items-center gap-1.5">
          <FaNewspaper className="opacity-50" />
          <div className="h-4 w-[120px] bg-white/40 rounded" />
        </div>

        {/* Running text */}
        <div className="ml-4 flex w-max gap-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center gap-2 mx-4 whitespace-nowrap">
              <div className="h-4 w-[150px] bg-white/40 rounded" />
              <div className="h-2 w-2 bg-red-400 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
