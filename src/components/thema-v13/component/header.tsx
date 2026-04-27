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
import { SheetMenu } from '@/components/thema-v5/component/layout/header/sheetMenu'
import NewsQueueSection from '@/components/thema-v5/component/layout/header/newsQueue'
import ServiceDropdownMenu from '@/components/thema-v5/component/layout/header/dropdownMenu'

const HeaderLayoutThemaV13 = () => {
  const { profile: profiles, loading } = UseGetProfile()

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
      <header className="sticky top-0 z-50 bg-primary/50 backdrop-blur-lg border-b-2 border-[#CDA327]">
        <div className="w-full bg-primary py-2">
          <div className="container-sm ">
            <div className="flex items-center w-full gap-x-2">
              <ServiceDropdownMenu />
              <div className="w-full overflow-hidden">
                <NewsQueueSection />
              </div>
            </div>
          </div>
        </div>
        <div className="container-sm mx-auto lg:px-8 lg:py-4 flex items-center justify-between p-2">
          <Link href={'/'} className="flex items-center gap-2">
            <div className="rounded-full flex items-center justify-center relative">
              <div className="relative w-15 h-15 min-w-14 bg-white rounded-full">
                <Image
                  src={organization?.logo ?? '/img/noimg.png'}
                  fill
                  className={'w-14 size-14 object-contain'}
                  alt="Logo"
                />
              </div>
            </div>
            <div className={'space-y-1.5'}>
              <h1 className="text-white text-xs lg:text-xl font-semibold leading-none whitespace-pre-line">
                {organization?.nama}
              </h1>
              <p className="text-[#CDA327] text-[8px] lg:text-lg font-medium">
                {organization?.singkatan_universitas}
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <nav className="hidden md:flex items-center gap-4 text-primary">
              {NavMenuList?.map((row, k) => (
                <Link
                  href={row?.link}
                  key={k}
                  className="hover:text-[#CDA327] transition text-sm font-bold text-white"
                >
                  {row?.name}
                </Link>
              ))}
            </nav>
            <div className="hidden lg:block">
              <DarkModeToggle />
            </div>
            <div className="block lg:hidden">
              <SheetMenu profile={profile} />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default HeaderLayoutThemaV13
