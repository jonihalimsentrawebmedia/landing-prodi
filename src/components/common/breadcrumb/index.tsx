import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Fragment } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Props {
  data: {
    name: string
    link?: string
  }[]
  className?: string
}

export const BreadcrumbBasic = (props: Props) => {
  const { data, className } = props

  return (
    <Breadcrumb className="w-full overflow-hidden">
      <BreadcrumbList className="flex items-center gap-1.5 flex-nowrap overflow-x-auto scrollbar-hide">
        {data.map((item, index) => {
          const isLast = index === data.length - 1

          return (
            <Fragment key={index}>
              <BreadcrumbItem className="flex-shrink-0 whitespace-nowrap">
                {item.link ? (
                  <Link
                    href={item.link}
                    className={cn('hover:bg-footer transition-colors text-primary', className)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <BreadcrumbPage className="text-yellow-500 font-medium">
                    {item.name}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>

              {!isLast && <BreadcrumbSeparator className="flex-shrink-0 text-white" />}
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
