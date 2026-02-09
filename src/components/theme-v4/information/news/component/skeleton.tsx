export const SkeletonNewsLoading = () => (
  <div className="animate-pulse">
    {/* TOP SECTION */}
    <div className="container py-5 flex flex-col gap-4">
      <div className="h-5 w-32 bg-gray-200 rounded" />
      <div className="h-8 w-72 bg-gray-200 rounded" />
      <div className="h-5 w-40 bg-gray-200 rounded" />

      <div className="flex items-start gap-x-5 mt-4">
        {/* LEFT BIG */}
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

    {/* BOTTOM FILTER SECTION */}
    <div className="w-full max-w-[1920px] mx-auto py-10">
      <div className="container space-y-6">
        <div className="h-7 w-64 bg-gray-200 rounded" />

        {/* Search */}
        <div className="h-12 w-full bg-gray-200 rounded-full" />

        {/* Category buttons */}
        <div className="flex gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-9 w-24 bg-gray-200 rounded-full" />
          ))}
        </div>

        {/* Grid News */}
        <div className="grid grid-cols-4 gap-5 mt-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="border rounded overflow-hidden">
              <div className="w-full h-[230px] bg-gray-200" />
              <div className="p-2.5 space-y-2">
                <div className="h-5 w-4/5 bg-gray-200 rounded" />
                <div className="h-4 w-24 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)
