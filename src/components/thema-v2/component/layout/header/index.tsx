'use client'

import Image from 'next/image'
import { Suspense, useEffect } from 'react'
import { SectionMenu } from './sectionMenu'
import { useStateContext } from '@/contexts'
import { useThemeColor } from '@/hooks/useTheme'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'
import dynamic from 'next/dynamic'

const SheetMenu = dynamic(() => import('./SheetMenu').then((mod) => mod.SheetMenu), {
  ssr: false,
})

export const HeaderLayout = () => {
  const [{ profile }] = useStateContext()
  const detail = profile?.SatuanOrganisasi

  const { setTheme } = useThemeColor()

  const { data } = useQuery({
    queryKey: ['theme'],
    refetchOnWindowFocus: false,
    queryFn: () =>
      AxiosClient.get('/public-prodi/pengaturan-warna-halaman').then((res) => res.data?.data),
  })

  useEffect(() => {
    if (data) {
      setTheme({
        primary: data?.warna_halaman_utama,
        footer: data?.warna_background_footer,
      })
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <header className={'w-full bg-primary lg:p-2 mx-auto fixed z-[999]'}>
      <div className="flex items-center justify-between container py-2 lg:py-0">
        <div className="flex items-center gap-1.5">
          <Image
            src={detail?.logo ?? '/img/noimg.png'}
            alt="Logo"
            width={150}
            height={150}
            className={'object-contain size-10 lg:size-16 rounded-full'}
          />
          <div>
            <h1 className="text-white text-sm lg:text-2xl">{detail?.singkatan_universitas}</h1>
            <p className="text-white text-xs lg:text-base">
              {detail?.kode_jenjang}-{detail?.nama}
            </p>
          </div>
        </div>

        <Suspense>
          <SectionMenu />
          <SheetMenu />
        </Suspense>
      </div>
    </header>
  )
}
