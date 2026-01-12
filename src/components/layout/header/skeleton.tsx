import { Skeleton } from '@/components/ui/skeleton'

export const HeaderMenuSkeleton = () => {
  return (
    <div className="max-w-[1920px] mx-auto py-2.5 fixed z-50 top-0 w-full bg-primary">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex items-center gap-2">
          <Skeleton className="w-16 h-16 rounded-full" />

          <div className="space-y-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>

        <ul className="flex items-center gap-x-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <li key={i}>
              <Skeleton className="h-4 w-20" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
