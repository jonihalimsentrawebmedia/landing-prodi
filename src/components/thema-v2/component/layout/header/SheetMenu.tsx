'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useState } from 'react'
import { MenuHeader } from './menus'
import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const SheetMenu = () => {
  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  return (
    <div className={'block lg:hidden'}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className={'relative w-8 h-8 flex items-center justify-center'}>
          <span
            className={`absolute h-[2px] w-6 bg-white transition-all duration-300 ${
              open ? 'rotate-45' : '-translate-y-2'
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-white transition-all duration-300 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-white transition-all duration-300 ${
              open ? '-rotate-45' : 'translate-y-2'
            }`}
          />
          {/*</button>*/}
        </SheetTrigger>
        <SheetContent className={'top-14 w-full'}>
          <SheetHeader>
            <SheetTitle />
            <SheetDescription />

            <ul className={'flex flex-col'}>
              {MenuHeader?.map((item, index) => (
                <Link href={item?.link} key={index} onClick={() => setOpen(!open)}>
                  <li
                    className={clsx(
                      index === 0 && pathname === item?.link
                        ? 'bg-primary-foreground text-primary font-semibold'
                        : '',
                      index !== 0 && pathname.startsWith(item?.link)
                        ? 'bg-primary-foreground text-primary font-semibold'
                        : '',
                      'p-2'
                    )}
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
