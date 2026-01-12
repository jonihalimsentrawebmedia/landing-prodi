export const AgendaAnnouncementSkeleton = () => {
  return (
    <>
      <div className="relative z-10 w-full h-[680px] bg-gray-300 animate-pulse">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-primary/50 z-10">
          <div className="container pt-44 flex items-start gap-x-8">
            {/* Pengumuman Skeleton */}
            <div className="w-1/2">
              <div className="mx-auto h-8 w-48 bg-white/40 rounded"></div>
              <div className="space-y-4 mt-8">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="border p-2.5 rounded">
                    <div className="h-4 w-full bg-white/40 rounded"></div>
                    <div className="h-3 w-32 bg-white/40 rounded mt-2"></div>
                  </div>
                ))}
                <div className="h-4 w-32 bg-white/40 rounded mx-auto"></div>
              </div>
            </div>

            {/* Agenda Skeleton */}
            <div className="w-1/2">
              <div className="mx-auto h-8 w-32 bg-white/40 rounded"></div>
              <div className="space-y-4 mt-8">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="border p-3 px-4 rounded text-center">
                      <div className="h-5 w-10 bg-white/40 rounded"></div>
                      <div className="h-5 w-10 bg-white/40 rounded mt-1"></div>
                    </div>
                    <div className="h-4 w-64 bg-white/40 rounded"></div>
                  </div>
                ))}
                <div className="h-4 w-32 bg-white/40 rounded mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
