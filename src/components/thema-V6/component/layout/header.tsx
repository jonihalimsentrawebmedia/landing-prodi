'use client'

import { UseGetProfile } from '@/hooks'
import { useStateContext } from '@/contexts'
import { useThemeColor } from '@/hooks/useTheme'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'
import React, { useEffect } from 'react'
import ServiceDropdownMenu from '@/components/thema-v5/component/layout/header/dropdownMenu'
import NewsQueueSection from '@/components/thema-v5/component/layout/header/newsQueue'

const HeaderLayoutThemaV6 = () => {
  const { profile: profiles, loading } = UseGetProfile()

  const [{}, Dispatch] = useStateContext()

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

  if (loading)
    return (
      <>
        <header className="sticky top-0 z-50 bg-[#FFFCF5]/90 backdrop-blur-md border-b-2 border-[#CDA327]">
          <div className="w-full bg-footer p-4">
            <div className="container-sm">
              <div className="flex items-center w-full gap-x-2">
                <ServiceDropdownMenu />
                <div className="w-full overflow-hidden">
                  <NewsQueueSection />
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    )

  return <></>
}

export default HeaderLayoutThemaV6
