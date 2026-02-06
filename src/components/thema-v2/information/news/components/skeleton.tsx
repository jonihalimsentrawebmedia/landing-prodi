export const CardNewsSkeleton = () => {
  return (
    <div className="bg-white shadow rounded-md overflow-hidden animate-pulse">
      <div className="w-full h-[240px] bg-gray-200" />
      <div className="p-2 flex flex-col gap-2">
        <div className="h-4 w-3/4 bg-gray-200 rounded" />
        <div className="h-3 w-1/3 bg-gray-200 rounded" />
        <div className="h-3 w-full bg-gray-200 rounded" />
        <div className="h-3 w-5/6 bg-gray-200 rounded" />
      </div>
    </div>
  )
}

export const ChipSkeleton = () => (
  <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse" />
)

export const NewsInformationAllSkeleton = () => (
  <div className="mt-5">
    <div className="flex flex-col lg:grid lg:grid-cols-4 gap-5 container">
      {/* Back */}
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
      </div>

      <div className="col-span-4">
        <div className="h-6 w-64 bg-gray-200 rounded mb-4 animate-pulse" />

        {/* Search */}
        <div className="h-10 w-full bg-gray-200 rounded-full mb-4 animate-pulse" />

        {/* Chips */}
        <div className="flex gap-2 flex-wrap mb-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <ChipSkeleton key={i} />
          ))}
        </div>
      </div>

      {/* News Grid */}
      <div className="col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <CardNewsSkeleton key={i} />
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="col-span-4 flex justify-center mt-4 gap-2">
        <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
        <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
        <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  </div>
)
