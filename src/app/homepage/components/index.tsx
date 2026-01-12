import { Skeleton } from '@/components/ui/skeleton'

export const NewsCardSkeleton = () => {
  return (
    <div className="relative border border-b-white overflow-hidden z-20">
      <Skeleton className="w-full h-[305px]" />
      <div className="absolute bottom-0 left-0 w-full p-2.5 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  )
}
