export const SmallNewsSkeleton = () => (
  <div className="flex items-center gap-2 animate-pulse">
    <div className="w-[214px] h-[194px] bg-gray-300 rounded" />
    <div className="flex flex-col gap-2 w-full">
      <div className="h-5 w-5/6 bg-gray-300 rounded" />
      <div className="h-4 w-1/3 bg-gray-200 rounded" />
      <div className="space-y-1">
        <div className="h-3 bg-gray-200 rounded" />
        <div className="h-3 w-5/6 bg-gray-200 rounded" />
      </div>
    </div>
  </div>
)

export const GridCardSkeleton = () => (
  <div className="rounded-md overflow-hidden border animate-pulse">
    <div className="w-full h-[200px] bg-gray-300" />
    <div className="p-2 space-y-2">
      <div className="h-4 w-5/6 bg-gray-300 rounded" />
      <div className="h-3 w-1/3 bg-gray-200 rounded" />
      <div className="h-3 bg-gray-200 rounded" />
      <div className="h-3 w-4/5 bg-gray-200 rounded" />
    </div>
  </div>
)

export const NewsSectionDataTheme3Skeleton = () => {
  return (
    <>
      <div className="container py-5 flex flex-col gap-4 animate-pulse">
        <div className="h-5 w-24 bg-gray-300 rounded" />
        <div className="h-8 w-72 bg-gray-300 rounded" />
        <div className="h-5 w-32 bg-gray-300 rounded" />

        {/* Hero News */}
        <div className="flex items-start gap-x-5">
          <div className="w-1/2 flex flex-col gap-2">
            <div className="w-full h-[465px] bg-gray-300 rounded" />
            <div className="h-6 w-5/6 bg-gray-300 rounded" />
            <div className="h-4 w-1/3 bg-gray-200 rounded" />
            <div className="space-y-1">
              <div className="h-3 bg-gray-200 rounded" />
              <div className="h-3 w-5/6 bg-gray-200 rounded" />
            </div>
          </div>

          <div className="w-1/2 flex flex-col gap-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <SmallNewsSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="container py-5 animate-pulse">
        <div className="h-10 w-full bg-gray-300 rounded-full mb-5" />

        <div className="flex items-start gap-5">
          {/* Sidebar filter */}
          <div className="w-full lg:max-w-[335px] border p-3 space-y-3">
            <div className="h-5 w-40 bg-gray-300 rounded" />
            <div className="h-1 bg-gray-200" />
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-4 w-32 bg-gray-200 rounded" />
            ))}
          </div>

          {/* Grid news */}
          <div className="grid grid-cols-3 gap-5 w-full">
            {Array.from({ length: 6 }).map((_, i) => (
              <GridCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
