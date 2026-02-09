'use client'

import { UseGetProfile, useMobile } from '@/hooks'
import { useStateContext } from '@/contexts'
import { useEffect } from 'react'
import { useThemeColor } from '@/hooks/useTheme'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'
import { DarkModeTheme3 } from '../../common/darkMode'
import { ListMenuTheme3 } from './listMenu'
import { HeaderSkeleton, ListMenuSkeleton } from './skeleton'

export const HeaderLayoutTheme3 = () => {
  const { profile: profiles, loading } = UseGetProfile()

  const { isMobile } = useMobile()
  const [{ profile }, Dispatch] = useStateContext()
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
    if (profiles) Dispatch({ type: 'SET_PROFILE', payload: profiles })

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, profiles])

  if (loading)
    return (
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <HeaderSkeleton />
        <ListMenuSkeleton />
      </div>
    )

  return (
    <div className={'!fixed z-[51] w-full'}>
      <div className={'bg-[#03421F] w-full max-w-[1920px] mx-auto'}>
        <div className={`${isMobile ? '' : 'container'} flex items-center justify-between`}>
          <p
            className={
              'text-primary text-sm lg:text-base font-semibold w-fit bg-primary-foreground p-1.5'
            }
          >
            {detail?.kode_jenjang}-{detail?.nama}
          </p>
          <DarkModeTheme3 />
        </div>
      </div>
      <ListMenuTheme3 />
    </div>
  )
}
