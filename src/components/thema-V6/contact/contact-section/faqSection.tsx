'use client'

import { Accordion } from '@/components/ui/accordion'

import Link from 'next/link'
import { MdDownload } from 'react-icons/md'
import { UseGetFaq } from '@/app/contact/hooks'
import { AccordionWithCategory } from '@/components/thema-v5/component/common/customAccordion'

export const FaqListDataV6 = ({ slug }: { slug: string }) => {
  const { faq, loading } = UseGetFaq({
    slug: slug,
    page: '0',
    limit: '0',
  })

  if (loading) return <></>

  return (
    <>
      <div className={'w-full mb-5'}>
        <Accordion type={'multiple'} className={'flex flex-col gap-5'}>
          {faq?.map((row, k) => (
            <AccordionWithCategory
              key={k}
              name={`data-${k + 1}`}
              title={`${k + 1}. ${row?.pertanyaan}`}
              category={row?.nama_kategori_faq}
            >
              <div className={'flex flex-col gap-4'}>
                <div
                  className={'html-class flex flex-col gap-1.5'}
                  dangerouslySetInnerHTML={{ __html: row?.jawaban ?? '' }}
                />

                <ul className={'flex flex-col gap-1.5'}>
                  {row?.dokumens?.map((row, j) => (
                    <Link href={row} target={'_blank'} key={j}>
                      <li
                        className={
                          'p-2 border text-footer border-footer w-fit rounded flex items-center gap-1.5'
                        }
                      >
                        Dokumen {j + 1}
                        <MdDownload />
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </AccordionWithCategory>
          ))}
        </Accordion>
      </div>
    </>
  )
}
