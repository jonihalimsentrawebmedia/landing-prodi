import { FormContact } from '@/app/contact/components/form'
import { ContactDetail } from '@/app/contact/components/contactDetail'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { UseGetFaq } from '@/app/contact/hooks'
import { useState } from 'react'

export const ContactSection = () => {
  const { faq } = UseGetFaq()
  const [accordionValue, setAccordionValue] = useState(faq[0]?.id_faq)

  return (
    <>
      <div className="w-full p-5 bg-[#EAEAEA] mt-8">
        <p className="text-primary text-xl font-semibold">Kirim Pesan</p>
        <div className="flex gap-5 flex-col lg:flex-row">
          <FormContact />
          <ContactDetail />
        </div>

        <div className="mt-10 lg:max-w-3xl w-full flex flex-col items-center mx-auto">
          <p className="text-primary lg:text-3xl font-semibold">Sering Ditanyakan</p>
          <Accordion
            type="single"
            value={accordionValue}
            onValueChange={setAccordionValue}
            collapsible
            className={'w-full mt-5 flex flex-col gap-2.5'}
          >
            {faq.map((item, i) => (
              <AccordionItem value={item?.id_faq} key={i} className={'min-w-full'}>
                <AccordionTrigger className={'bg-[#F5FAFF] px-2.5 py-2.5 rounded hover:no-underline'}>
                  {item?.pertanyaan}
                </AccordionTrigger>
                <AccordionContent className={'p-2.5 border border-[#F5FAFF] bg-white'}>
                  <div
                    className={'html-class'}
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
