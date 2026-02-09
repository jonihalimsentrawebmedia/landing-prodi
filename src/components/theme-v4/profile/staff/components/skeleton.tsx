import { Card, CardContent } from '@/components/ui/card'

export const SkeletonStaff = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, k) => (
        <Card key={k} className="p-2">
          <CardContent className="p-2 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {/* Skeleton Image */}
              <div className="w-[75px] h-[100px] rounded bg-gray-200 animate-pulse" />

              <div className="flex flex-col gap-2 w-full">
                {/* Skeleton Name */}
                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />

                {/* Skeleton Label */}
                <div className="h-3 w-1/3 bg-gray-200 rounded animate-pulse" />

                {/* Skeleton NIP */}
                <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
