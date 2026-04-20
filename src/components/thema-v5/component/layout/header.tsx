'use client'

import { UseGetProfile } from '@/hooks'
import { useStateContext } from '@/contexts'
import { useThemeColor } from '@/hooks/useTheme'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { NavMenuList } from '@/components/layout/header/menuList'
import Link from 'next/link'
import DarkModeToggle from '@/components/thema-v5/component/common/darkmode'

const HeaderLayoutTheme5 = () => {
  const { profile: profiles, loading } = UseGetProfile()

  // const pathname = usePathname()
  const [{ profile }, Dispatch] = useStateContext()
  const organization = profile?.SatuanOrganisasi

  const { setTheme } = useThemeColor()

  const { data } = useQuery({
    queryKey: ['theme'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/public').then((res) => res.data?.data),
  })

  useEffect(() => {
    if (data) {
      setTheme({
        primary: data?.warna_halaman_utama,
        footer: data?.warna_background_footer,
      })
    }
    if (profiles) {
      Dispatch({
        type: 'SET_PROFILE',
        payload: profiles,
      })
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, profiles])

  if (loading) return <></>

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#FFFCF5]/90 backdrop-blur-md border-b-2 border-[#CDA327]">
        <div className="container-sm mx-auto lg:px-8 lg:py-6 flex items-center justify-between p-2">
          <Link href={'/'} className="flex items-center gap-3">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center relative">
              <Image
                src={organization?.logo ?? '/img/noimg.png'}
                fill
                alt="Logo"
                className="lg:w-12 lg:h-12 rounded-full size-8 w-8 h-8"
              />
            </div>
            <div className={'space-y-1.5'}>
              <h1 className="text-[#278374] text-sm lg:text-2xl font-semibold leading-none">
                {organization?.nama}
              </h1>
              <p className="text-[#CDA327] text-xs lg:text-lg font-medium">
                {organization?.singkatan_universitas}
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <nav className="hidden md:flex items-center gap-4 text-[#278374]">
              {NavMenuList?.map((row, k) => (
                <Link href={row?.link} key={k} className="hover:text-[#CDA327] transition text-xs">
                  {row?.name}
                </Link>
              ))}
            </nav>
            <DarkModeToggle />
          </div>
        </div>
      </header>
    </>
  )
}
export default HeaderLayoutTheme5
