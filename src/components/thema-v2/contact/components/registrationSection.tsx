import { UseGetRegistration } from '@/app/contact/hooks'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useEffect, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { RegistrationSectionSkeleton } from './skeleton'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { clsx } from 'clsx'

export const RegistrationSection = () => {
  const { registration, loading } = UseGetRegistration()

  const [tabValue, setTabValue] = useState('')
  useEffect(() => {
    if (registration) {
      setTabValue(registration[0]?.id_jalur_pendaftaran as string)
    }
  }, [registration])

  if (loading) return <RegistrationSectionSkeleton />

  return (
    <>
      <Tabs value={tabValue} onValueChange={setTabValue} className={'lg:flex !flex-row hidden'}>
        <TabsList
          className={'rounded-none flex flex-col !h-fit bg-primary-foreground p-0 dark:bg-primary'}
        >
          {registration.map((item, k) => (
            <TabsTrigger
              value={item?.id_jalur_pendaftaran}
              key={k}
              className={`rounded-none !shadow-none w-[200px] border-l-4 border-l-primary border-y-0
              p-2 data-[state=active]:bg-primary data-[state=active]:text-white
              data-[state=active]:border-l-yellow-500
              `}
            >
              <p className={'text-start w-full'}>{item?.nama_jalur_pendaftaran}</p>
              {tabValue === item?.id_jalur_pendaftaran && <ChevronRight />}
            </TabsTrigger>
          ))}
        </TabsList>
        {registration.map((item, k) => (
          <TabsContent
            className={'bg-white dark:bg-primary/40 px-5'}
            value={item?.id_jalur_pendaftaran}
            key={k}
          >
            <div
              className={'html-class'}
              dangerouslySetInnerHTML={{ __html: item?.deskripsi ?? '' }}
            />
          </TabsContent>
        ))}
      </Tabs>

      <Accordion
        type={'single'}
        collapsible
        value={tabValue}
        onValueChange={setTabValue}
        className={'flex flex-col gap-2.5 lg:hidden'}
      >
        {registration?.map((item, k) => (
          <AccordionItem value={item?.id_jalur_pendaftaran} key={k}>
            <AccordionTrigger
              className={clsx(
                'rounded-none p-2 bg-primary-foreground border-l-4 border-l-primary dark:text-primary',
                tabValue === item?.id_jalur_pendaftaran
                  ? 'bg-primary dark:bg-primary-foreground dark:text-primary text-white border-l-yellow-500'
                  : ''
              )}
            >
              {item?.nama_jalur_pendaftaran}
            </AccordionTrigger>
            <AccordionContent className={'p-2.5 border border-t-0'}>
              <div
                className={'html-class flex flex-col gap-2.5'}
                dangerouslySetInnerHTML={{ __html: item?.deskripsi }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
