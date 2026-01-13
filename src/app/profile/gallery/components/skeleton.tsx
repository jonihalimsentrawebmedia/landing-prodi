export const SkeletonGallery = () => {
  return (
    <>
      {Array.from({ length: 4 }).map((_, k) => (
        <div key={k} className="flex items-center gap-5 bg-white">
          {/* Skeleton Image */}
          <div className="min-w-[214px] h-[180px] bg-gray-200 animate-pulse" />

          {/* Skeleton Content */}
          <div className="pl-0 p-2 flex flex-col gap-3 w-full">
            {/* Title */}
            <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />

            {/* Date */}
            <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />

            {/* Description lines */}
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      ))}
    </>
  )
}
