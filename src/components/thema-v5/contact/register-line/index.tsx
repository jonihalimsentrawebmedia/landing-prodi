'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { clsx } from 'clsx'
import { UseGetRegistration } from '@/app/contact/hooks'
import { useEffect, useState } from 'react'

const RegisterLineSectionV5 = () => {
  const { registration } = UseGetRegistration()
  const [category, setCategory] = useState('')

  useEffect(() => {
    if (registration) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCategory(registration?.[0]?.slug)
    }
  }, [registration])

  return (
    <>
      <Tabs
        className={
          'bg-primary dark:bg-gray-800 flex-col justify-start lg:flex-row w-full mt-5 flex items-start'
        }
        value={category}
        onValueChange={setCategory}
      >
        <TabsList
          className={'w-full flex flex-row lg:flex-col h-full max-w-[200px] text-start  gap-2'}
        >
          {registration?.map((item, k) => (
            <TabsTrigger
              key={k}
              value={item?.slug}
              className={clsx(
                'text-start w-full border border-footer rounded!',
                'data-[state=active]:bg-footer data-[state=active]:text-primary',
                'dark:data-[state=active]:bg-footer'
              )}
            >
              <p className="text-start w-full">{item?.nama_jalur_pendaftaran}</p>
            </TabsTrigger>
          ))}
        </TabsList>
        {registration?.map((item, k) => (
          <TabsContent key={k} value={item?.slug}>
            <div
              className="html-class flex flex-col gap-1.5"
              dangerouslySetInnerHTML={{ __html: item?.deskripsi ?? '' }}
            />
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
}

export default RegisterLineSectionV5
