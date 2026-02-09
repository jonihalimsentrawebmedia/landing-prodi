'use client'

import { useStateContext } from '@/contexts'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'
import { useEffect } from 'react'
import { useThemeColor } from '@/hooks/useTheme'
import { UseGetProfile } from '@/hooks'
import Link from 'next/link'
import { NavMenuList } from '@/components/layout/header/menuList'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { ButtonDarkMode } from '@/components/thema-v2/component/layout/header/darkMode'

export const HeaderLayoutTheme4 = () => {
  const { profile: profiles } = UseGetProfile()

  const pathname = usePathname()
  const [{ profile }, Dispatch] = useStateContext()
  const organization = profile?.SatuanOrganisasi

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
    if (profiles) {
      Dispatch({
        type: 'SET_PROFILE',
        payload: profiles,
      })
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, profiles])

  return (
    <>
      <div className="fixed w-full z-[60]">
        <div className={'w-full mx-auto max-w-[1920px] bg-white drop-shadow py-2 relative'}>
          <div className="absolute h-full w-2/3 rounded-bl-3xl bg-primary top-0 right-0 z-[1]" />
          <div className="container relative z-[2] flex items-center justify-between gap-x-5">
            <div className="flex items-center gap-2">
              <Image
                src={organization?.logo ?? '/img/noimg.png'}
                alt={'logo'}
                width={40}
                height={40}
                className={'size-10 w-10'}
              />
              <div>
                <p className={'text-2xl font-semibold text-primary'}>
                  {organization?.singkatan_universitas}
                </p>
                <p className={'text-xs capitalize'}>
                  {organization?.kode_jenjang} - {organization?.nama}
                </p>
              </div>
            </div>
            <ul className={'flex items-center gap-x-5 mt-2 lg:mt-0 text-sm text-white'}>
              {NavMenuList?.map((item, k) => (
                <Link href={item?.link} key={item.id}>
                  <li
                    className={clsx(
                      k === 0 &&
                        item?.link === pathname &&
                        'underline underline-offset-8 decoration-white decoration-2',
                      k !== 0 && pathname.startsWith(item?.link)
                        ? 'underline underline-offset-8 decoration-white decoration-2'
                        : ''
                    )}
                  >
                    {item?.name}
                  </li>
                </Link>
              ))}
              <li>
                <div className="p-1 bg-cyan-900 rounded">
                  <ButtonDarkMode />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
