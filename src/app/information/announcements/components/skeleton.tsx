import { Skeleton } from '@/components/ui/skeleton'

export const AnnouncementSkeleton = () => {
  return (
    <div className="bg-[#DFDFDF] p-5 rounded w-full flex flex-col gap-3 animate-pulse">
      {/* Image */}
      <Skeleton className="size-[120px] rounded mx-auto" />

      {/* Title */}
      <Skeleton className="h-4 w-full rounded" />
      <Skeleton className="h-4 w-4/5 rounded" />

      {/* Date */}
      <div className="flex items-center gap-2 mt-1">
        <Skeleton className="size-4 rounded-full" />
        <Skeleton className="h-3 w-32 rounded" />
      </div>
    </div>
  )
}
