'use client'

import { Suspense, useEffect, useState } from 'react'
import { RegistrationSection } from '@/components/thema-v2/contact/components/registrationSection'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ContactSectionTheme4 } from './contactSection'
import { clsx } from 'clsx'

export const TabsContactRegisterTheme4 = () => {
  const TabsData = [
    {
      label: 'Kontak',
      value: 'contact',
      element: (
        <Suspense>
          <ContactSectionTheme4 />
        </Suspense>
      ),
    },
    {
      label: 'Pendaftaran',
      value: 'register',
      element: <RegistrationSection />,
    },
  ]

  const [value, setValue] = useState(TabsData[0].value)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true)
  }, [])

  return (
    <>
      <div className={'dark:bg-primary/20'}>
        {isClient && (
          <Tabs
            value={value}
            onValueChange={setValue}
            className={'w-full container bg-white dark:bg-transparent py-5 border-none'}
          >
            <TabsList
              className={
                'w-full rounded-none bg-white p-0 border-b-2 border-b-primary border-t-0 border-x-0'
              }
            >
              {TabsData.map((tab, k) => (
                <TabsTrigger
                  key={k}
                  value={tab?.value}
                  className={clsx(
                    'rounded-none !shadow-none',
                    'data-[state=active]:bg-primary data-[state=active]:text-white',
                    'bg-primary-foreground dark:bg-white dark:data-[state=active]:bg-primary'
                  )}
                >
                  {tab?.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {TabsData.map((tab, k) => (
              <TabsContent className={'p-0'} key={k} value={tab?.value}>
                {tab?.element}
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </>
  )
}
