export const SkeletonFourNews = () => {
  return (
    <div className="container py-5 flex flex-col gap-4 animate-pulse">
      {/* Back */}
      <div className="h-5 w-32 bg-gray-200 rounded" />

      {/* Title */}
      <div className="h-8 w-72 bg-gray-200 rounded" />

      <div className="h-5 w-40 bg-gray-200 rounded mt-2" />

      <div className="flex items-start gap-x-5 mt-4">
        {/* LEFT BIG NEWS */}
        <div className="w-1/2 flex flex-col gap-3">
          <div className="w-full h-[465px] bg-gray-200 rounded" />
          <div className="h-7 w-4/5 bg-gray-200 rounded" />
          <div className="h-4 w-32 bg-gray-200 rounded" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-3/4 bg-gray-200 rounded" />
          </div>
        </div>

        {/* RIGHT LIST */}
        <div className="w-1/2 flex flex-col gap-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-[214px] h-[194px] bg-gray-200 rounded" />
              <div className="flex flex-col gap-2 w-full">
                <div className="h-6 w-4/5 bg-gray-200 rounded" />
                <div className="h-4 w-28 bg-gray-200 rounded" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-3/4 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
