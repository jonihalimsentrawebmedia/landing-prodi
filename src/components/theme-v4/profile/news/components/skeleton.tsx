export const CardNewsSkeleton = () => {
  return (
    <div className="bg-white shadow rounded-md overflow-hidden">
      <div className="w-full h-[240px] bg-gray-200 animate-pulse" />
      <div className="p-3 flex flex-col gap-2">
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
        <div className="h-3 w-1/3 bg-gray-200 rounded animate-pulse" />
        <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
        <div className="h-3 w-5/6 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  )
}

export const NewsAboutSection = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* Title */}
      <div className="h-8 w-40 bg-gray-200 rounded animate-pulse" />

      {/* Grid */}
      <div className="grid grid-cols-3 gap-5">
        {Array.from({ length: 3 }).map((_, i) => (
          <CardNewsSkeleton key={i} />
        ))}
      </div>

      {/* Link */}
      <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />

      {/* Buttons */}
      <div className="flex items-center mt-5 justify-between">
        <div className="h-10 w-28 bg-gray-200 rounded-full animate-pulse" />
        <div className="h-10 w-28 bg-gray-200 rounded-full animate-pulse" />
      </div>
    </div>
  )
}
