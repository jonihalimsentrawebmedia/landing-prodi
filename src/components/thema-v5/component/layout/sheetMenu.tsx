'use client'

import { useEffect, useState } from 'react'
import { clsx } from 'clsx'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'

import Link from 'next/link'
import { IProfileResponse } from '@/contexts/types'
import { RiGlobalFill } from 'react-icons/ri'
import { NavMenuList } from '@/components/layout/header/menuList'

interface props {
  profile?: IProfileResponse | null
}

export const SheetMenu = (props: props) => {
  const { profile } = props

  const [open, setOpen] = useState(false)
  const [client, setClient] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setClient(true)
  }, [])

  return (
    <>
      {client && (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <div className={'flex flex-col items-center justify-center'}>
              <button className="relative w-6 h-6 flex items-center justify-center">
                <span
                  className={clsx(
                    'absolute h-[1.5px] w-6 bg-footer transition-all duration-300 ease-in-out',
                    open ? 'rotate-45' : '-translate-y-2'
                  )}
                />
                <span
                  className={clsx(
                    'absolute h-[1.5px] w-6 bg-footer transition-all duration-300 ease-in-out',
                    open ? 'opacity-0' : ''
                  )}
                />
                <span
                  className={clsx(
                    'absolute h-[1.5px] w-6 bg-footer transition-all duration-300 ease-in-out',
                    open ? '-rotate-45' : 'translate-y-2'
                  )}
                />
              </button>
            </div>
          </SheetTrigger>

          <SheetContent className={'w-full z-[52] gap-0 bg-footer'}>
            <SheetHeader className={'p-2'}>
              <SheetTitle>
                <div className={'flex items-center gap-1.5'}>
                  <Image
                    src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
                    alt={'logo'}
                    width={52}
                    height={52}
                    className={'rounded-full object-cover size-16'}
                  />
                  <div>
                    <p className="lg:text-2xl font-semibold text-white">
                      {profile?.SatuanOrganisasi?.nama}
                    </p>
                    <p className={'text-xs text-white'}>
                      {profile?.SatuanOrganisasi?.singkatan_universitas}
                    </p>
                  </div>
                </div>
              </SheetTitle>
              <SheetDescription asChild>
                <div className={'w-full flex flex-col gap-2'}>
                  <Link
                    target={profile?.domain ?? '_blank'}
                    href={profile?.domain ? 'https://' + profile?.domain : ''}
                    className={
                      'flex bg-white items-center gap-1.5 w-full p-1.5 rounded text-footer mt-2'
                    }
                  >
                    <RiGlobalFill />
                    Website Utama
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
            <ul className="p-4 py-0 overflow-scroll h-full space-y-4">
              {NavMenuList.map((menu, i) => {
                return (
                  <Link className={''} href={menu?.link} onClick={() => setOpen(!open)} key={i}>
                    <li className={'py-2'} key={i}>
                      {menu?.name}
                    </li>
                  </Link>
                )
              })}
            </ul>
          </SheetContent>
        </Sheet>
      )}
    </>
  )
}
