'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination'
import { Meta } from '@/contexts/types'

interface PaginationProps {
  meta: Meta
  page: number
  //eslint-disable-next-line
  onPageChange: (page: number) => void
}

export function PaginationCustom({ meta, page, onPageChange }: PaginationProps) {
  const { last_page } = meta

  const getPages = () => {
    const pages: (number | 'ellipsis')[] = []

    if (last_page <= 5) {
      for (let i = 1; i <= last_page; i++) pages.push(i)
    } else {
      pages.push(1)

      if (page > 3) pages.push('ellipsis')

      const start = Math.max(2, page - 1)
      const end = Math.min(last_page - 1, page + 1)

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      if (page < last_page - 2) pages.push('ellipsis')

      pages.push(last_page)
    }

    return pages
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(Math.max(1, page - 1))}
            className={`${page === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'} bg-white`}
          />
        </PaginationItem>

        {/* Pages */}
        {getPages().map((item, index) => (
          <PaginationItem key={index} className={`cursor-pointer rounded-lg ${page !== item ? 'text-white' : ''}`}>
            {item === 'ellipsis' ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink isActive={page === item} onClick={() => onPageChange(item)}>
                {item}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(Math.min(last_page, page + 1))}
            className={
              page === last_page
                ? 'pointer-events-none opacity-50 bg-white'
                : 'cursor-pointer bg-white'
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
