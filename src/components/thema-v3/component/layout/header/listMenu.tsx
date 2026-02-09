'use client'

import { useStateContext } from '@/contexts'
import Image from 'next/image'
import { MenuHeader } from '@/components/thema-v2/component/layout/header/menus'
import Link from 'next/link'
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'
import { useMobile } from '@/hooks'
import { SheetMenu } from '@/components/thema-v2/component/layout/header/SheetMenu'

export const ListMenuTheme3 = () => {
  const [{ profile }] = useStateContext()
  const data = profile?.SatuanOrganisasi
  const { isMobile } = useMobile()

  const pathname = usePathname()

  return (
    <>
      <div className={'bg-primary py-2 w-full max-w-[1920px] mx-auto'}>
        <div
          className={clsx(!isMobile ? 'container' : 'px-2', 'flex items-center justify-between')}
        >
          <div className={'flex items-center gap-2'}>
            <Image
              src={data?.logo ?? '/img/noimg.png'}
              alt={data?.nama ?? 'logo'}
              width={150}
              height={150}
              className={'object-cover rounded-full w-10 h-10'}
            />
            <h1 className={'text-white text-sm lg:text-xl font-semibold'}>{data?.nama}</h1>
          </div>

          <ul className={'lg:flex items-center gap-x-5 text-sm font-semibold text-white hidden'}>
            {MenuHeader.map((item, k) => (
              <Link href={item?.link} key={k}>
                <li
                  className={clsx(
                    k === 0 &&
                      item.link === pathname &&
                      'bg-white text-primary p-1.5 px-3 rounded-full',
                    k !== 0 &&
                      pathname.startsWith(item?.link) &&
                      'bg-white text-primary p-1.5 px-3 rounded-full'
                  )}
                >
                  {item?.name}
                </li>
              </Link>
            ))}
          </ul>
          <SheetMenu className={'!top-22'} />
        </div>
      </div>
    </>
  )
}
