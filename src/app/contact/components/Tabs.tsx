'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'
import { ContactSection } from '@/app/contact/components/contactSection'
import { RegistrationSection } from '@/app/contact/components/registrationSection'

export const TabsContactRegistration = () => {
  const tabsData = [
    { label: 'Kontak', value: 'contact', element: <ContactSection /> },
    { label: 'Pendaftaran', value: 'register', element: <RegistrationSection /> },
  ]

  const [value, setValue] = useState(tabsData[0].value)

  return (
    <>
      <Tabs value={value} onValueChange={setValue} className={'w-full container py-5'}>
        <TabsList className={'w-full rounded-none bg-primary'}>
          {tabsData.map((tab, k) => (
            <TabsTrigger
              key={k}
              value={tab?.value}
              className={`
              rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent
              text-white data-[state=active]:border-b-white p-5 relative
              `}
            >
              {tab?.value === value && (
                <>
                  <div
                    className={
                      'size-3 rounded-full absolute -bottom-1.5 z-10 bg-white transform -translate-x-1/2 left-1/2'
                    }
                  />
                  <div
                    className={
                      'w-[1px] h-[15px] absolute -bottom-5 z-10 bg-white transform -translate-x-1/2 left-1/2'
                    }
                  />
                </>
              )}
              {tab?.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsData.map((tab, k) => (
          <TabsContent key={k} value={tab?.value}>
            {tab?.element}
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
}
