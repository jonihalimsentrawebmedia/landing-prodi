'use client'

import { ReactNode } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { clsx } from 'clsx'
import { Menus } from '@/app/profile/data/types'

interface Props {
  children?: ReactNode
}

export const AccordionMenu = (props: Props) => {
  const { children } = props

  const pathname = usePathname()

  return (
    <div className={'container py-4'}>
      <Accordion type={'single'} className={'lg:hidden flex flex-col gap-2'} value={pathname}>
        {Menus?.map((item) => (
          <AccordionItem key={item.id} value={item?.link}>
            <Link href={item?.link}>
              <AccordionTrigger
                className={clsx(
                  'w-full bg-primary-foreground p-2 rounded-none text-primary border-l-4 border-l-primary',
                  pathname === item?.link ? 'bg-primary text-white border-l-yellow-500' : ''
                )}
              >
                {item?.name}
              </AccordionTrigger>
            </Link>
            <AccordionContent className={'p-4'}>{children}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
