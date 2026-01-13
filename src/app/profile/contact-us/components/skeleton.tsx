import { Card, CardContent } from '@/components/ui/card'

export const SkeletonContactUs = () => {
  return (
    <>
      <Card className="p-2">
        <CardContent className="p-2 flex flex-col gap-3 animate-pulse">
          <div className="h-6 w-40 bg-gray-200 rounded" />

          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-200 rounded-full" />
            <div className="h-4 w-full bg-gray-200 rounded" />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-200 rounded-full" />
            <div className="h-4 w-1/2 bg-gray-200 rounded" />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-200 rounded-full" />
            <div className="h-4 w-1/2 bg-gray-200 rounded" />
          </div>
        </CardContent>
      </Card>

      {/* Skeleton Map */}
      <div className="w-full h-[400px] bg-gray-200 rounded animate-pulse" />

      {/* Skeleton Button */}
      <div className="flex items-center mt-5">
        <div className="h-10 w-32 bg-gray-200 rounded-full animate-pulse" />
      </div>
    </>
  )
}
