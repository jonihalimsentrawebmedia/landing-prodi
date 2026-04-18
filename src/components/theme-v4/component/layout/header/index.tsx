'use client'

import { useStateContext } from '@/contexts'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'
import { useEffect } from 'react'
import { useThemeColor } from '@/hooks/useTheme'
import { UseGetProfile, useMobile } from '@/hooks'
import Link from 'next/link'
import { NavMenuList } from '@/components/layout/header/menuList'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { ButtonDarkMode } from '@/components/thema-v2/component/layout/header/darkMode'
import { SheetMenu } from '@/components/thema-v2/component/layout/header/SheetMenu'
import { HeaderLayoutTheme4Skeleton } from '@/components/theme-v4/component/layout/header/skeleton'
import { motion, Variants } from 'framer-motion'

export const HeaderLayoutTheme4 = () => {
  const { profile: profiles, loading } = UseGetProfile()
  const { isMobile } = useMobile()

  const pathname = usePathname()
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

  const container: Variants = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        when: 'beforeChildren',
      },
    },
  }

  const items: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  if (loading) return <HeaderLayoutTheme4Skeleton />

  return (
    <>
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="fixed w-full z-[60]"
      >
        <div className={'w-full mx-auto max-w-[1920px] bg-white drop-shadow py-2 relative'}>
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: isMobile ? '100%' : '66%' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute h-full lg:rounded-bl-3xl bg-primary top-0 right-0 z-[1]"
          />
          <div
            className={clsx(
              isMobile ? 'px-2' : 'container',
              'relative z-[2] flex items-center justify-between gap-x-5"'
            )}
          >
            <motion.div variants={items} className="flex items-center gap-2">
              <Image
                src={organization?.logo ?? '/img/noimg.png'}
                alt={'logo'}
                width={40}
                height={40}
                className={'size-10 w-10 rounded-full'}
              />
              <div>
                <p className={'text-sm lg:text-2xl font-semibold lg:text-primary'}>
                  {organization?.singkatan_universitas}
                </p>
                <p className={'text-xs capitalize'}>
                  {organization?.kode_jenjang} - {organization?.nama}
                </p>
              </div>
            </motion.div>

            <div className="flex items-center gap-1.5">
              <div className="p-0 lg:hidden bg-cyan-900 rounded flex items-center justify-center">
                <ButtonDarkMode className={'size-3'} />
              </div>
              {profiles && <SheetMenu />}
            </div>

            <motion.ul
              variants={container}
              className="lg:flex items-center gap-x-5 mt-2 lg:mt-0 text-sm text-white hidden"
            >
              {NavMenuList?.map((item, k) => (
                <motion.li
                  key={k}
                  variants={items}
                  className={clsx(
                    k === 0 &&
                      pathname === item?.link &&
                      'underline underline-offset-8 decoration-yellow-600 decoration-[3px]',
                    k !== 0 &&
                      pathname.startsWith(item?.link) &&
                      'underline underline-offset-8 decoration-yellow-600 decoration-[3px]'
                  )}
                >
                  <Link href={item?.link}>{item?.name}</Link>
                </motion.li>
              ))}

              <motion.li variants={items}>
                <div className="p-1 bg-cyan-900 rounded">
                  <ButtonDarkMode />
                </div>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </>
  )
}
