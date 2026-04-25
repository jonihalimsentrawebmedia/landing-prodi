'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import JumbotronTitleV10 from '@/components/thema-v10/component/common/jumbotronTitle'
import ContactSectionV10 from '@/components/thema-v10/contact/contact'
import RegisterLineSectionV10 from '@/components/thema-v10/contact/register'

const ContactUsePageV10 = () => {
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
      element: <RegisterLineSectionV10 />,
    },
  ]

  return (
    <>
      <JumbotronTitleV10 title={'Kontak & Pendaftaran'} context={'KONTAK'} />
      <div className="bg-primary/10">
        <div className="container-sm py-5">
          <div className="bg-blue-50 p-1.5 px-2 rounded">
            <BreadcrumbBasic
              className={'text-primary hover:bg-transparent!'}
              data={[{ name: 'Beranda', link: '/' }, { name: 'Kontak & Pendaftaran' }]}
            />
          </div>
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

export default ContactUsePageV10
