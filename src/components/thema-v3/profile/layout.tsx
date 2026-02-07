'use client'

import { LayoutTheme3 } from '@/components/thema-v3/component/layout'
import { ReactNode } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Menus } from '@/app/profile/data/types'
import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IconInterSect } from '@/components/common/icons'
import { JumbotronTitleTheme3 } from '@/components/thema-v3/component/common/jumbotronTitle'

const ProfileLayoutTheme3 = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()

  return (
    <>
      <LayoutTheme3>
        <JumbotronTitleTheme3 title={'Tentang Prodi'} context={'PROFIL'} />
        <div className="container py-5">
          <Tabs className={'w-full rounded-none flex-col'} value={pathname}>
            <TabsList
              className={
                'rounded-none bg-white rounded-t dark:bg-transparent w-full border-b-2 p-0'
              }
            >
              {Menus?.map((row, k) => (
                <TabsTrigger
                  key={k}
                  value={row?.link}
                  className={clsx(
                    'shadow-none drop-shadow-none rounded-none',
                    'data-[state=active]:shadow-none data-[state=active]:!bg-primary',
                    'data-[state=active]:text-white data-[state=active]:rounded-t p-4'
                  )}
                >
                  <Link href={row?.link} key={k} className={'flex items-center gap-2'}>
                    {pathname === row?.link && <IconInterSect />}
                    {row?.name}
                  </Link>
                </TabsTrigger>
              ))}
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
