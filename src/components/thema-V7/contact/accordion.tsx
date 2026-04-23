import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ReactNode } from 'react'

interface Props {
  name: string
  title: string
  category: string
  children: ReactNode
}

export const AccordionWithCategoryV7 = (props: Props) => {
  const { name, title, category, children } = props
  return (
    <>
      <AccordionItem value={name} className={'border border-primary rounded last:border px-2'}>
        <AccordionTrigger className={'w-full hover:decoration-0 hover:no-underline'}>
          <div className={'flex flex-col lg:flex-row items-center justify-between w-full'}>
            <p className={'font-semibold text-primary'}>{title}</p>
            <p className={'text-xs text-primary self-end'}>{category}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </>
  )
}
