'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { useThemeColor } from '@/hooks/useTheme'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'
import { UseGetProfile } from '@/hooks'
import { useStateContext } from '@/contexts'
import HeaderSkeleton from '@/components/thema-v2/component/layout/header/skeleton'
import { MenuHeader } from '@/components/thema-v2/component/layout/header/menus'
import Link from 'next/link'
import { SheetMenu } from '@/components/thema-v2/component/layout/header/SheetMenu'

export const HeaderLayout = () => {
  const [{}, Dispatch] = useStateContext()
  const { profile, loading } = UseGetProfile()
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
    if (profile) {
      Dispatch({ type: 'SET_PROFILE', payload: profile })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, profile])

  if (loading) return <HeaderSkeleton />

  return (
    <header className={'w-full left-0 z-[999] bg-white max-w-[1920px]'}>
      <div className="w-full max-w-[1440px] mx-auto py-2.5 lg:py-5 flex items-center justify-between px-2 lg:px-0">
        <div className={'flex items-center gap-x-4'}>
          <Image
            src={detail?.logo ?? '/img/noimg.png'}
            alt={'logo'}
            width={100}
            height={100}
            className={'size-[75px] w-[75px] h-[75px]'}
          />
          <div className={'flex flex-col gap-y-1.5'}>
            <h1 className="lg:text-2xl lg:max-w-[450px] font-semibold text-primary whitespace-pre-wrap">
              {detail?.nama} ({detail?.kode_jenjang})
            </h1>
            <p className={'text-[10px]'}>{detail?.nama_parent_satuan_organisasi}</p>
          </div>
        </div>
        <SheetMenu/>
        <ul className={'lg:flex items-center gap-x-5 text-base hidden'}>
          {MenuHeader?.map((row, i) => (
            <Link href={row?.link} key={i} className={'font-semibold text-primary'}>
              <li>{row?.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </header>
  )
}
