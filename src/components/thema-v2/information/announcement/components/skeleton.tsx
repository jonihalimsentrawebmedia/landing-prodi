export const AnnouncementSkeletonSection = () => {
  return (
    <div className="py-5 animate-pulse">
      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-5 container">
        {/* Header */}
        <div className="col-span-4 space-y-3">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-6 w-72 bg-gray-200 rounded" />
          <div className="h-10 w-full bg-gray-200 rounded-full" />
          <div className="flex gap-2">
            <div className="h-8 w-16 bg-gray-200 rounded-full" />
            <div className="h-8 w-20 bg-gray-200 rounded-full" />
            <div className="h-8 w-14 bg-gray-200 rounded-full" />
          </div>
        </div>
        
        {/* Cards */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="border p-5 rounded w-full flex flex-col gap-3">
            <div className="size-[120px] bg-gray-200 rounded mx-auto" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-1/2 mt-2" />
          </div>
        ))}
      </div>
    </div>
  )
}
