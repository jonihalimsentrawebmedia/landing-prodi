'use client'

import { LayoutTheme3 } from '@/components/thema-v3/component/layout'
import { ReactNode, useEffect, useRef } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Menus } from '@/app/profile/data/types'
import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IconInterSect } from '@/components/common/icons'
import { JumbotronTitleTheme3 } from '@/components/thema-v3/component/common/jumbotronTitle'

const ProfileLayoutTheme3 = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const activeRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center', // ⬅ ini biar ke tengah
        block: 'nearest',
      })
    }
  }, [pathname])

  return (
    <>
      <LayoutTheme3>
        <JumbotronTitleTheme3 title={'Tentang Prodi'} context={'PROFIL'} />
        <div className="container py-5">
          <Tabs className={'w-full rounded-none flex-col'} value={pathname}>
            <TabsList
              className={clsx(
                'rounded-none bg-white rounded-t dark:bg-transparent w-full border-b-2 p-0',
                'flex items-center justify-start overflow-auto !scrollbar-hide'
              )}
            >
              {Menus?.map((row, k) => {
                const isActive = pathname === row?.link

                return (
                  <TabsTrigger
                    key={k}
                    value={row?.link}
                    ref={isActive ? activeRef : null}
                    className={clsx(
                      'shadow-none rounded-none whitespace-nowrap',
                      'data-[state=active]:!bg-primary',
                      'data-[state=active]:text-white data-[state=active]:rounded-t p-4'
                    )}
                  >
                    <Link href={row?.link} className="flex items-center gap-2">
                      {isActive && <IconInterSect />}
                      {row?.name}
                    </Link>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {Menus?.map((row, k) => (
              <TabsContent key={k} value={row?.link}>
                {children}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </LayoutTheme3>
    </>
  )
}

export default ProfileLayoutTheme3
