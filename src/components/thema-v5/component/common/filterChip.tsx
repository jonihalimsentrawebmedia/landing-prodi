'use client'

import { clsx } from 'clsx'
import { useRouter, useSearchParams } from 'next/navigation'

interface props {
  data: Array<{
    value: string
    label: string
  }>
  name: string
  className?: string
}

export const FilterChip = (props: props) => {
  const { data, name, className } = props

  const router = useRouter()
  const searchParams = useSearchParams()
  const values = searchParams.get(name) ?? ''

  const HandlerChip = (value: string) => {
    const Params = new URLSearchParams()
    Params.append(name, value)
    if (value === '') Params.delete(name)
    if (values === value) Params.delete(name)
    router.push(`?${Params.toString()}`, {
      scroll: false,
    })
  }

  return (
    <>
      <div className={'flex flex-nowrap gap-2 items-center overflow-x-auto justify-start'}>
        {data?.map((row, index) => (
          <div
            onClick={() => HandlerChip(row?.value)}
            key={index}
            className={clsx(
              'text-sm border border-footer text-footer p-1.5 rounded',
              'font-semibold whitespace-nowrap px-3 hover:bg-footer hover:text-white',
              'cursor-pointer',
              values === row?.value && 'bg-footer text-white',
              className
            )}
          >
            {row?.label}
          </div>
        ))}
      </div>
    </>
  )
}
