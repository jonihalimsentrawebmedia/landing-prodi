export const AgendaSkeletonSection = () => {
  return (
    <div className="py-5 animate-pulse">
      <div className="lg:grid lg:grid-cols-4 gap-y-5 lg:gap-5 container flex flex-col">
        {/* Header */}
        <div className="col-span-4 space-y-3">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-6 w-64 bg-gray-200 rounded" />
          <div className="h-10 w-full bg-gray-200 rounded-full" />
          <div className="flex gap-2">
            <div className="h-8 w-16 bg-gray-200 rounded-full" />
            <div className="h-8 w-20 bg-gray-200 rounded-full" />
            <div className="h-8 w-14 bg-gray-200 rounded-full" />
          </div>
        </div>
        
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="border rounded overflow-hidden">
            <div className="w-full h-[250px] bg-gray-200" />
            <div className="px-2.5 flex flex-col gap-2 p-2">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-3 bg-gray-200 rounded w-1/2 mt-1" />
              <div className="h-3 bg-gray-200 rounded w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
