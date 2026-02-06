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
      <ul className={'flex flex-col bg-primary-foreground w-full lg:max-w-[280px]'}>
        {Menus?.map((menu, i) => (
          <Link href={menu.link} key={menu.id}>
            <li
              className={clsx(
                i === 0 && pathname === menu?.link && 'border-l-yellow-500 bg-primary text-white',
                i !== 0 &&
                  pathname.includes(menu?.link) &&
                  'border-l-yellow-500 bg-primary text-white',
                'p-3 border-l-4 border-primary flex items-center text-primary'
              )}
            >
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
