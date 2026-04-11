'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { clsx } from 'clsx'
import { ChevronRight } from 'lucide-react'
import { Menus } from '@/app/profile/data/types'

export const SideMenu = () => {
  const pathname = usePathname()
  return (
    <>
      <ul className={'flex flex-col w-full lg:max-w-[280px] gap-2'}>
        {Menus?.map((menu, i) => (
          <Link href={menu.link} key={menu.id}>
            <li
              className={clsx(
                i === 0 && pathname === menu?.link && ' bg-primary! text-white',
                i !== 0 && pathname.includes(menu?.link) && ' bg-primary! text-white',
                'p-3 border-primary flex items-center text-primary bg-primary-foreground gap-2.5'
              )}
            >
              {menu?.icon}
              {menu.name}
              {((i === 0 && pathname === menu.link) ||
                (i !== 0 && pathname.startsWith(menu.link))) && (
                <ChevronRight className="size-4 ml-auto" />
              )}
            </li>
          </Link>
        ))}
      </ul>
    </>
  )
}
