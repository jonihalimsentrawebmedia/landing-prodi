'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Suspense, useEffect, useState } from 'react'
import { ContactSection } from './contactSection'
import { RegistrationSection } from './registrationSection'
import { ContactSectionSkeleton } from './skeleton'

export const TabsContactRegistration = () => {
  const tabsData = [
    {
      label: 'Kontak',
      value: 'contact',
      element: (
        <Suspense fallback={<ContactSectionSkeleton />}>
          <ContactSection />
        </Suspense>
      ),
    },
    { label: 'Pendaftaran', value: 'register', element: <RegistrationSection /> },
  ]

  const [value, setValue] = useState(tabsData[0].value)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient && (
        <Tabs
          value={value}
          onValueChange={setValue}
          className={'w-full container bg-white dark:bg-primary py-5 border-none'}
        >
          <TabsList className={'w-full rounded-none bg-white p-0 border-none'}>
            {tabsData.map((tab, k) => (
              <TabsTrigger
                key={k}
                value={tab?.value}
                className={`rounded-none !border-x-0 !shadow-none data-[state=active]:bg-primary-foreground
              border-b-2 border-b-gray-200 data-[state=active]:border-b-primary
              data-[state=active]:text-primary dark:bg-primary
              data-[state=active]:dark:bg-primary !border-t-0
              dark:data-[state=active]:border-b-yellow-500
              `}
              >
                {tab?.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabsData.map((tab, k) => (
            <TabsContent className={'p-0'} key={k} value={tab?.value}>
              {tab?.element}
            </TabsContent>
          ))}
        </Tabs>
      )}
    </>
  )
}
