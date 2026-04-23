'use client'

import JumbotronTitleV7 from '@/components/thema-V7/component/common/jumbotron'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { useState } from 'react'
import ContactSectionV7 from '@/components/thema-V7/contact/TabsContact'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import RegisterLineSectionV7 from '@/components/thema-V7/contact/registerLine'

const ContactUsePageV7 = () => {
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
      <JumbotronTitleV7 title={'Kurikulum'} context={'KURIKULUM'} />

      <div className={'bg-primary w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
        <div className="container-sm">
          <BreadcrumbBasic
            className={'text-white! hover:bg-primary!'}
            data={[{ name: 'Beranda', link: '/' }, { name: 'Kurikulum' }]}
          />
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

export default ContactUsePageV7
