'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { useState } from 'react'
import ContactSectionV7 from '@/components/thema-V7/contact/TabsContact'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import RegisterLineSectionV7 from '@/components/thema-V7/contact/registerLine'
import JumbotronTitleV8 from '@/components/thema-v8/component/common/jumbotronTitle'

const ContactUsePageV8 = () => {
  const [selectedTab, setSelectedTab] = useState<string>('Contact')

  const TabsData = [
    {
      name: 'Kontak',
      value: 'Contact',
      element: <ContactSectionV7 />,
    },
    {
      name: 'Jalur Pendaftaran',
      value: 'register-line',
      element: <RegisterLineSectionV7 />,
    },
  ]

  return (
    <>
      <JumbotronTitleV8 title={'Kontak & Pendaftaran'} context={'KONTAK'} />
      <div className="bg-footer">
        <div className="container-sm py-5">
          <div className="bg-blue-50 p-1.5 px-2 rounded">
            <BreadcrumbBasic
              className={'text-primary hover:bg-transparent!'}
              data={[{ name: 'Beranda', link: '/' }, { name: 'Kontak & Pendaftaran' }]}
            />
          </div>
        </div>
      </div>

      <div className="bg-footer pt-5">
        <div className="container-sm">
          <Tabs
            className={'bg-transparent w-full'}
            value={selectedTab}
            onValueChange={setSelectedTab}
          >
            <TabsList className={'w-full bg-transparent flex gap-5'}>
              {TabsData?.map((row, k) => (
                <TabsTrigger
                  key={k}
                  value={row?.value}
                  className={cn(
                    'border border-primary rounded!',
                    'data-[state=active]:bg-primary',
                    'data-[state=active]:text-white',
                    'dark:data-[state=active]:bg-primary dark:data-[state=active]:text-white'
                  )}
                >
                  {row?.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {TabsData?.map((row, k) => (
              <TabsContent key={k} value={row?.value}>
                {row?.element}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default ContactUsePageV8
