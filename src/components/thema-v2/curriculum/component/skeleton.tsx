export const TabsCurriculumSkeleton = () => {
  return (
    <div className="container py-5 animate-pulse">
      <div className="w-full flex items-start gap-5">
        {/* LEFT SIDE (Sidebar Tabs) */}
        <div className="w-[240px] flex flex-col gap-3">
          {/* Filter Select */}
          <div className="h-10 bg-gray-200 rounded" />

          {/* Tab buttons */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 bg-gray-200 rounded" />
          ))}
        </div>

        {/* RIGHT SIDE (Table Content) */}
        <div className="flex-1 flex gap-5">
          {[...Array(2)].map((_, col) => (
            <div key={col} className="w-full border border-gray-300 rounded overflow-hidden">
              {/* Table Header */}
              <div className="h-9 bg-gray-300" />

              {/* Rows */}
              {[...Array(6)].map((_, row) => (
                <div key={row} className="grid grid-cols-[1fr_200px] border-t border-gray-200">
                  <div className="h-8 bg-gray-100 m-1 rounded" />
                  <div className="h-8 bg-gray-100 m-1 rounded" />
                </div>
              ))}

              {/* Total Row */}
              <div className="grid grid-cols-[1fr_200px] border-t border-gray-300 bg-gray-200">
                <div className="h-8 m-1 rounded bg-gray-300" />
                <div className="h-8 m-1 rounded bg-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
