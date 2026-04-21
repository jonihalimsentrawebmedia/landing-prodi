import { UseGetProdiFaculty } from '@/components/common/hook/ref'
import { FaCaretUp } from 'react-icons/fa'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState } from 'react'

const ProdiTree = () => {
  const { prodi } = UseGetProdiFaculty()
  const [value, setValue] = useState<string>()

  const selectedValue = value ?? prodi?.[0]?.id_satuan_organisasi

  return (
    <>
      <Accordion
        type={'single'}
        collapsible
        className={'mt-4 flex flex-col gap-2'}
        value={selectedValue}
        onValueChange={setValue}
      >
        {prodi.map((row, k) => (
          <AccordionItem value={row?.id_satuan_organisasi} key={k} className={'border-none!'}>
            <AccordionTrigger
              className={'text-white p-0 border-none! hover:no-underline flex items-center w-fit'}
            >
              {row?.nama}
              <FaCaretUp />
            </AccordionTrigger>
            <AccordionContent className={'py-2'}>
              <ul className={'flex flex-col text-white pl-2'}>
                {row?.prodi?.map((item, i) => (
                  <li key={i} className={'relative pl-4 py-1.5'}>
                    <div className={'w-[12px] left-0 top-4 h-[2px] absolute bg-white'} />
                    <div
                      className={cn(
                        'w-[2px] left-0 absolute bg-white top-0',
                        row?.prodi.length - 1 === i ? 'h-1/2' : 'h-full'
                      )}
                    />
                    <Link href={'https://' + item?.domain}>
                      {i + 1}. {item?.nama} ({item?.kode_jenjang})
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
export default ProdiTree
