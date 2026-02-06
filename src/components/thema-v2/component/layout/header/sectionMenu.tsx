'use client'

import { MenuHeader } from './menus'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { clsx } from 'clsx'
import { useEffect } from 'react'
import { ButtonDarkMode } from './darkMode'
import { useStateContext } from '@/contexts'
import { UseGetProfile } from '@/hooks'

export const SectionMenu = () => {
  const pathname = usePathname()
  const { profile } = UseGetProfile()
  const [, Dispatch] = useStateContext()

  useEffect(() => {
    if (profile) {
      Dispatch({ type: 'SET_PROFILE', payload: profile })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile])

  return (
    <ul className={'hidden lg:flex gap-5 items-center text-white text-sm'}>
      {MenuHeader?.map((item, index) => (
        <Link href={item?.link} key={index}>
          <li
            className={clsx(
              index === 0 && pathname === item?.link
                ? 'underline decoration-2 underline-offset-8 font-bold decoration-yellow-600'
                : '',
              index !== 0 && pathname.startsWith(item?.link)
                ? 'underline decoration-2 underline-offset-8 font-bold decoration-yellow-600'
                : '',
              ''
            )}
          >
            {item.name}
          </li>
        </Link>
      ))}
      <li>
        <ButtonDarkMode />
      </li>
    </ul>
  )
}
