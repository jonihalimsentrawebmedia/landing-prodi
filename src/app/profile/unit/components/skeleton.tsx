import { Card, CardContent } from '@/components/ui/card'

export const SkeletonUnitProfile = () => {
  return (
    <div className="flex flex-col gap-5 animate-pulse">
      {/* Title Skeleton */}
      <div className="h-8 w-1/3 bg-gray-200 rounded" />

      {/* List Skeleton */}
      <div className="mt-5 space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} className="p-2">
            <CardContent className="flex items-center gap-2 p-2">
              {/* Image Skeleton */}
              <div className="w-[75px] h-[100px] bg-gray-200 rounded" />

              {/* Text Skeleton */}
              <div className="flex flex-col gap-2 w-full">
                <div className="h-4 w-2/3 bg-gray-200 rounded" />
                <div className="h-3 w-1/3 bg-gray-200 rounded" />
                <div className="h-4 w-1/2 bg-gray-200 rounded" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Button Skeleton */}
      <div className="flex items-center justify-between mt-2">
        <div className="h-10 w-28 bg-gray-200 rounded-full" />
        <div className="h-10 w-44 bg-gray-200 rounded-full" />
      </div>
    </div>
  )
}
