'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { UseGetRegistration } from '@/app/contact/hooks'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { clsx } from 'clsx'

const RegisterLineSectionV11 = () => {
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
      <Tabs className={clsx('lg:flex-row! gap-5')} value={category} onValueChange={setCategory}>
        <TabsList className={'lg:max-w-[200px] w-fit lg:w-full! h-full! lg:flex-col! gap-2'}>
          {registration?.map((item, k) => (
            <TabsTrigger
              key={k}
              value={item?.slug}
              className={cn(
                'border border-primary rounded! w-full',
                'data-[state=active]:bg-primary',
                'data-[state=active]:text-white',
                'dark:data-[state=active]:bg-primary dark:data-[state=active]:text-white'
              )}
            >
              <p className="text-start w-full">{item?.nama_jalur_pendaftaran}</p>
            </TabsTrigger>
          ))}
        </TabsList>
        {registration?.map((item, k) => (
          <TabsContent key={k} value={item?.slug} className={'pb-5'}>
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

export default RegisterLineSectionV11
