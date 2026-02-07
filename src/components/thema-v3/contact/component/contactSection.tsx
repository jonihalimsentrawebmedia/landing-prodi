import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { UseGetFaq, UseGetFaqCategory } from '@/app/contact/hooks'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useMobile } from '@/hooks'
import { clsx } from 'clsx'
import { ContactDetail } from '@/app/contact/components/contactDetail'
import { FormContact } from '@/components/thema-v2/contact/components/form'
import { ChipCategory } from '@/components/thema-v2/contact/components/chipCategory'
import { ContactSectionSkeleton } from '@/components/thema-v2/contact/components/skeleton'

export const ContactSectionTheme3 = () => {
  const searchParams = useSearchParams()
  const slug = searchParams.get('category')

  const { isMobile } = useMobile()

  const { faq, loading: load1 } = UseGetFaq({
    page: '0',
    limit: '0',
    slug: slug ?? '',
  })
  const { faqCategory, loading: load2 } = UseGetFaqCategory()

  const [accordionValue, setAccordionValue] = useState(faq[0]?.id_faq)

  const loading = load1 || load2

  if (loading) return <ContactSectionSkeleton />

  return (
    <>
      <div className="w-full lg:p-5 bg-white mt-8 dark:bg-primary lg:dark:bg-primary-foreground/20">
        <p className="text-primary text-xl font-semibold">Kirim Pesan</p>
        <div className="flex gap-5 flex-col lg:flex-row">
          <FormContact />
          <ContactDetail />
        </div>

        <div
          className={clsx(
            isMobile ? '' : 'container',
            `mt-5 lg:mt-10 w-full flex flex-col items-center mx-auto`
          )}
        >
          <p className="text-primary lg:text-3xl font-semibold">Sering Ditanyakan</p>
          <ChipCategory data={faqCategory} />
          <Accordion
            type="single"
            value={accordionValue}
            onValueChange={setAccordionValue}
            collapsible
            className={'w-full mt-5 flex flex-col gap-2.5'}
          >
            {faq.map((item, i) => (
              <AccordionItem value={item?.id_faq} key={i} className={'min-w-full'}>
                <AccordionTrigger
                  className={
                    'bg-[#F5FAFF] px-2.5 py-2.5 rounded hover:no-underline dark:bg-primary'
                  }
                >
                  {item?.pertanyaan}
                </AccordionTrigger>
                <AccordionContent
                  className={
                    'p-2.5 border border-[#F5FAFF] bg-white dark:bg-primary/10 dark:border-gray-100/20 dark:border-t-0'
                  }
                >
                  <div
                    className={'html-class flex flex-col gap-5'}
                    dangerouslySetInnerHTML={{ __html: item?.jawaban ?? '' }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  )
}
