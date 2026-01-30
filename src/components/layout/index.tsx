'use client'

import { ReactNode, useEffect } from 'react'
import StateProvider from '@/contexts'
import { HeaderMenuList } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useThemeColor } from '@/hooks/useTheme'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'

interface Props {
  children: ReactNode
}

export const LandingLayout = (props: Props) => {
  const { children } = props

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
    <>
      <StateProvider>
        <div className={'relative lg:max-w-[1920px] mx-auto'}>
          <HeaderMenuList />
          {children}
          <Footer />
        </div>
      </StateProvider>
    </>
  )
}
