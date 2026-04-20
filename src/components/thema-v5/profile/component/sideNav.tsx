'use client'

import { Menus } from '@/app/profile/data/types'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const SideNavV5 = () => {
  const pathName = usePathname()
  return (
    <>
      <ul
        className={
          'relative  flex flex-row lg:flex-col whitespace-nowrap overflow-scroll lg:overflow-visible justify-start lg:space-y-4 lg:pl-5 lg:max-w-[250px] w-full'
        }
      >
        <div className="absolute w-[2px] h-full left-1 bg-linear-to-b from-footer to-primary hidden lg:block" />
        {Menus?.map((row, index) => {
          const isActive =
            row.link === '/profile'
              ? pathName === '/profile'
              : pathName === row.link || pathName.startsWith(row.link + '/')
          return (
            <Link key={index} href={row.link}>
              <li
                className={cn(
                  'text-footer w-full p-1.5 px-3',
                  isActive && 'bg-footer p-1.5 px-3 text-primary'
                )}
              >
                {row.name}
              </li>
            </Link>
          )
        })}
      </ul>
    </>
  )
}
export default SideNavV5
