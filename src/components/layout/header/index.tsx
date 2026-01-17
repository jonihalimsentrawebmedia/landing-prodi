'use client'

import { UseGetProfile } from '@/hooks'
import Image from 'next/image'
import NOIMG from '../../../../public/img/noimg.png'
import { NavMenuList } from '@/components/layout/header/menuList'
import { useEffect, useState } from 'react'
import { useStateContext } from '@/contexts'
import Link from 'next/link'
import { HeaderMenuSkeleton } from '@/components/layout/header/skeleton'

export const HeaderMenuList = () => {
  const { profile, loading } = UseGetProfile()
  const detail = profile?.SatuanOrganisasi
  const [{}, Dispatch] = useStateContext()

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (profile) {
      Dispatch({
        type: 'SET_PROFILE',
        payload: profile,
      })
    }
  }, [Dispatch, profile])

  if (loading) return <HeaderMenuSkeleton />

  return (
    <>
      <div
        className={`lg:max-w-[1920px] mx-auto py-4 fixed z-50 top-0 w-full
        transition-colors duration-500 ease-in-out
        ${scrolled ? 'bg-primary/75 backdrop-blur' : 'bg-transparent'}
        `}
      >
        <div className={'flex items-center justify-between container mx-auto'}>
          <div className="flex items-center gap-2">
            <Image
              src={detail?.logo ?? NOIMG}
              alt={'logo'}
              width={100}
              height={100}
              loading={'eager'}
              priority={true}
              className={'object-cover lg:w-14 lg:h-14 size-10 rounded-full'}
            />
            <div>
              <p className="lg:text-2xl font-semibold text-white text-sm">
                {detail?.singkatan_universitas}
              </p>
              <p className={'text-white text-xs'}>
                {detail?.kode_jenjang}-{detail?.nama}
              </p>
            </div>
          </div>

          <ul className={'items-center gap-x-5 hidden lg:flex'}>
            {NavMenuList?.map((item) => (
              <Link href={item?.link} key={item.id}>
                <li className={'text-white'}>{item?.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
