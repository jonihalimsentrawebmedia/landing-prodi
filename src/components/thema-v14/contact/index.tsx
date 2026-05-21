'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import ContactSectionV10 from '@/components/thema-v10/contact/contact'
import RegisterLineSectionV11 from '@/components/thema-v11/contact/register'
import { JumbotronTitleV14 } from '@/components/thema-v14/component/common/jumbotronTitle'

const ContactUsePageV14 = () => {
  const [selectedTab, setSelectedTab] = useState<string>('Contact')

  const TabsData = [
    {
      name: 'Kontak',
      value: 'Contact',
      element: <ContactSectionV10 />,
    },
    {
      name: 'Jalur Pendaftaran',
      value: 'register-line',
      element: <RegisterLineSectionV11 />,
    },
  ]

  return (
    <>
      <JumbotronTitleV14 title={'Kontak'} context={'KONTAK'} />
      <div className={'bg-footer w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
        <div className="container-sm px-2!">
          <BreadcrumbBasic
            className={'text-white! hover:bg-primary!'}
            data={[{ name: 'Beranda', link: '/' }, { name: 'Kontak' }]}
          />
        </div>
      </div>

      <div className="bg-primary/10 pt-5">
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
export default ContactUsePageV14
