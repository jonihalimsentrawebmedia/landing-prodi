'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import ContactSectionV10 from '@/components/thema-v10/contact/contact'
import RegisterLineSectionV11 from '@/components/thema-v11/contact/register'
import { JumbotronTitleV15 } from '@/components/thema-v15/component/common/jumbotronTitle'

const ContactUsePageV15 = () => {
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
      <JumbotronTitleV15 title="Kontak" context="KONTAK" />

      <div className="bg-primary w-full">
        <div className="container-sm p-2">
          <BreadcrumbBasic
            className="text-white! hover:bg-[#1F7A63]!"
            data={[{ name: 'Beranda', link: '/' }, { name: 'Kontak' }]}
          />
        </div>
      </div>

      <div className="container-sm lg:max-w-[1280px] mx-auto py-5">
        <div className="flex items-center gap-4">
          <h2 className="text-[#1F7A63] text-[24px] font-semibold shrink-0">
            {selectedTab === 'Contact' ? 'Kontak' : 'Jalur Pendaftaran'}
          </h2>
          <div className="h-px bg-[#C8C8C8] flex-1" />
        </div>

        <div className="mt-5">
          <Tabs
            className="bg-transparent w-full"
            value={selectedTab}
            onValueChange={setSelectedTab}
          >
            <TabsList className="w-full bg-transparent flex gap-3">
              {TabsData?.map((row, k) => (
                <TabsTrigger
                  key={k}
                  value={row?.value}
                  className={cn(
                    'border border-primary rounded-lg! text-primary data-[state=active]:bg-primary data-[state=active]:text-white'
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

export default ContactUsePageV15
