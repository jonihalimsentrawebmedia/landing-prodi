'use client'

import { BasicSelect } from '@/components/common/select/basic'
import { useRouter, useSearchParams } from 'next/navigation'

interface Props {
  name: string
  data: { label: string; value: string }[]
  label?: string
  isRow?: boolean
  placeholder?: string
  className?: string
  innerClassname?: string
}

export const FilterSelect = (props: Props) => {
  const {
    name,
    placeholder,
    data,
    label,
    isRow,
    className,
    innerClassname = 'min-w-[150px]',
  } = props

  const router = useRouter()

  const searchParams = useSearchParams()
  const value = searchParams.get(name) ?? ''

  const HandleChange = (e: string) => {
    const Params = new URLSearchParams()
    Params.set(name, e)
    if (e === '') {
      Params.delete(name)
    }
    router.push(`?${Params.toString()}`)
  }

  return (
    <>
      <BasicSelect
        innerClassname={innerClassname}
        data={data}
        className={className}
        label={label}
        value={value}
        isRow={isRow}
        onChange={(e) => {
          HandleChange(e)
        }}
        placeholder={placeholder}
      />
    </>
  )
}
