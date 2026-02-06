'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menus } from '@/app/profile/data/types'

export const SideMenuProfile = () => {
  const pathName = usePathname()

  return (
    <ul className="flex flex-nowrap pb-2 lg:pb-0 overflow-x-auto whitespace-nowrap lg:whitespace-pre-line lg:flex-col gap-5 mt-5 pl-8 relative h-fit">
      <div className="absolute w-[2px] h-full left-1 bg-linear-to-b from-white to-primary hidden lg:block" />
      {Menus.map((row) => {
        const isActive =
          row.link === '/profile'
            ? pathName === '/profile'
            : pathName === row.link || pathName.startsWith(row.link + '/')
        return (
          <li key={row.id}>
            <Link
              href={row.link}
              className={cn(
                'text-gray-500 transition-colors',
                isActive && 'text-white font-semibold'
              )}
            >
              {row.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
