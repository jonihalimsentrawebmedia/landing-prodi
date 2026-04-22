'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import ContactSectionV6 from '@/components/thema-V6/contact/contact-section'
import RegisterLineSectionV6 from '@/components/thema-V6/contact/register-line'

const ContactRegisteredV6 = () => {
  const [selectedTab, setSelectedTab] = useState('Contact')
  const TabsData = [
    {
      name: 'Kontak',
      value: 'Contact',
      element: <ContactSectionV6 />,
    },
    {
      name: 'Jalur Pendaftaran',
      value: 'register-line',
      element: <RegisterLineSectionV6 />,
    },
  ]

  return (
    <>
      <ProfileLayout title={'Kontak & Pendaftaran'} context={'KONTAK'}>
        <div className={'bg-footer w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
          <div className="container-sm">
            <BreadcrumbBasic
              data={[{ name: 'Beranda', link: '/' }, { name: 'Kontak & Pendaftaran' }]}
            />
          </div>
        </div>
        <div className="lg:p-5 py-2.5 bg-primary/10 dark:bg-gray-800">
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
                      'border border-footer rounded!',
                      'data-[state=active]:bg-footer',
                      'data-[state=active]:text-primary',
                      'dark:data-[state=active]:bg-footer dark:data-[state=active]:text-primary'
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
      </ProfileLayout>
    </>
  )
}
export default ContactRegisteredV6
