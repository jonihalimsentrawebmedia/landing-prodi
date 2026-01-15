'use client'

import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from '@/hooks/debounce'

interface Props {
  className?: string
  placeholder?: string
}

export const SearchInput = ({ className, placeholder = 'Cari ...' }: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [search, setSearch] = useState(searchParams.get('search') ?? '')
  const debounceSearch = useDebounce(search, 1000)

  useEffect(() => {
    const params = new URLSearchParams(searchParams?.toString())
    if (debounceSearch) {
      params.set('search', debounceSearch)
    } else {
      params.delete('search')
    }

    router.replace(`?${params.toString()}`, { scroll: false })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearch])

  return (
    <>
      <div className={'relative w-full'}>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type={'search'}
          className={`min-w-[15rem] w-[15rem] rounded-md
          focus-visible:ring-1
          focus-visible:ring-primary
          focus:border-primary
          pr-6
          ${className} dark:bg-green-50 dark:border-primary-foreground dark:text-primary`}
          placeholder={placeholder}
        />
        <Search
          className={'absolute z-[-1] size-4 right-2 top-1/2 -translate-y-1/2 text-primary'}
        />
      </div>
    </>
  )
}
