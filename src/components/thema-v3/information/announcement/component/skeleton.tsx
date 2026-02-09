export const AnnouncementSectionSkeleton = () => {
  return (
    <div className="container py-5 flex flex-col gap-4 animate-pulse">
      {/* Back */}
      <div className="h-5 w-24 bg-gray-200 rounded" />

      {/* Title */}
      <div className="h-7 w-72 bg-gray-300 rounded" />

      <div className="flex items-start gap-5 mt-5">
        {/* LEFT FILTER */}
        <div className="w-full lg:max-w-[335px] border bg-gray-100 border-gray-200 p-3 flex flex-col gap-4">
          <div className="h-5 w-32 bg-gray-300 rounded" />

          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="size-4 rounded-full bg-gray-300" />
              <div className="h-4 w-20 bg-gray-300 rounded" />
            </div>
          ))}
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-3 gap-5 w-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-3 border p-4 rounded bg-white">
              <div className="size-28 rounded-full bg-gray-300 self-center" />

              <div className="h-4 w-full bg-gray-300 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />

              <div className="h-3 w-24 bg-gray-200 rounded mt-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
