export const SkeletonAboutProfile = () => {
  return (
    <div className="animate-pulse">
      {/* Header */}
      <div className="rounded-lg w-full p-5 bg-gray-200">
        <div className="h-8 w-1/2 bg-gray-300 rounded" />
        <div className="h-6 w-1/3 bg-gray-300 rounded mt-3" />
        <div className="h-4 w-1/4 bg-gray-300 rounded mt-2" />
      </div>

      {/* Carousel Skeleton */}
      <div className="w-3/4 mt-5">
        <div className="relative">
          <div className="w-full h-[350px] bg-gray-200 rounded-lg" />

          {/* Dots Skeleton */}
          <div className="flex justify-center gap-2 mt-4 absolute bottom-2.5 left-1/2 -translate-x-1/2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-2 w-2 bg-gray-300 rounded-full" />
            ))}
          </div>
        </div>

        {/* Email Info Skeleton */}
        <div className="flex items-center justify-between mt-2">
          <div className="h-3 w-1/2 bg-gray-300 rounded" />
          <div className="h-8 w-40 bg-gray-300 rounded" />
        </div>
      </div>

      {/* Konten HTML Skeleton */}
      <div className="mt-5 space-y-3">
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-5/6 bg-gray-200 rounded" />
        <div className="h-4 w-4/6 bg-gray-200 rounded" />
        <div className="h-4 w-3/6 bg-gray-200 rounded" />
      </div>

      {/* Button Skeleton */}
      <div className="flex justify-end mt-5">
        <div className="h-10 w-40 bg-gray-200 rounded-full" />
      </div>
    </div>
  )
}
