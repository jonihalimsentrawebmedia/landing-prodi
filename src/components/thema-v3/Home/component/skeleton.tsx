export const SliderHomeSkeleton = () => {
  return (
    <div className="w-full h-[600px] max-w-[1920px] mx-auto relative overflow-hidden">
      {/* Background image skeleton */}
      <div className="absolute inset-0 bg-gray-300 animate-pulse" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
        <div className="container py-8">
          {/* Text skeleton */}
          <div className="mb-4 border-l-4 border-l-yellow-500 pl-4 space-y-2">
            <div className="h-4 w-48 bg-white/40 rounded animate-pulse" />
            <div className="h-8 w-80 bg-white/40 rounded animate-pulse" />
          </div>

          {/* Social icons skeleton */}
          <div className="mt-4 flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-white/40 animate-pulse" />
            <div className="w-9 h-9 rounded-full bg-white/40 animate-pulse" />
            <div className="w-9 h-9 rounded-full bg-white/40 animate-pulse" />
            <div className="w-9 h-9 rounded-full bg-white/40 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}

export const CardNewsSkeleton = () => {
  return (
    <div className="rounded-md overflow-hidden border animate-pulse">
      {/* Image */}
      <div className="w-full h-[200px] bg-gray-300" />

      {/* Content */}
      <div className="p-2 flex flex-col gap-2">
        <div className="h-4 w-5/6 bg-gray-300 rounded" />
        <div className="h-4 w-2/3 bg-gray-300 rounded" />

        <div className="flex items-center gap-2 mt-1">
          <div className="w-4 h-4 rounded-full bg-gray-300" />
          <div className="h-3 w-24 bg-gray-300 rounded" />
        </div>

        <div className="space-y-1 mt-1">
          <div className="h-3 w-full bg-gray-200 rounded" />
          <div className="h-3 w-full bg-gray-200 rounded" />
          <div className="h-3 w-4/5 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  )
}

export const NewsLandingSkeleton = () => {
  return (
    <div className="w-full my-5 mx-auto max-w-[1920px]">
      <div className="container space-y-5 items-center">
        {/* Title skeleton */}
        <div className="h-8 w-72 bg-gray-300 rounded animate-pulse mb-4" />

        {/* Grid cards */}
        <div className="grid grid-cols-4 gap-5 mt-4 w-full">
          {Array.from({ length: 4 }).map((_, i) => (
            <CardNewsSkeleton key={i} />
          ))}
        </div>

        <div className="h-10 w-52 rounded-full bg-gray-300 animate-pulse mt-5 mx-auto" />
      </div>
    </div>
  )
}

export const AgendaItemSkeleton = () => (
  <div className="flex items-center gap-4 animate-pulse">
    <div className="min-w-[108px] h-[136px] bg-gray-300 rounded" />
    <div className="flex flex-col gap-2 w-full">
      <div className="h-4 w-5/6 bg-gray-300 rounded" />
      <div className="h-3 w-2/3 bg-gray-200 rounded" />
      <div className="h-3 w-1/2 bg-gray-200 rounded" />
    </div>
  </div>
)

export const AnnouncementItemSkeleton = () => (
  <div className="flex items-center gap-4 animate-pulse">
    <div className="size-[136px] min-w-[136px] rounded-full bg-gray-300" />
    <div className="flex flex-col gap-2 w-full">
      <div className="h-4 w-5/6 bg-gray-300 rounded" />
      <div className="h-3 w-1/3 bg-gray-200 rounded" />
    </div>
  </div>
)

export const AgendaAnnouncementSkeleton = () => {
  return (
    <div className="w-full relative my-10 max-w-[1920px] mx-auto overflow-hidden">
      <div className="w-1/2 h-full bg-primary absolute top-0 left-0" />
      <div className="w-1/2 h-full absolute top-0 right-0" />

      <div className="container min-h-[500px] relative z-10 py-5">
        <div className="flex items-center gap-x-12">
          {/* Agenda */}
          <div className="w-full bg-primary-foreground p-5">
            <div className="h-7 w-60 bg-gray-300 rounded animate-pulse mb-4" />

            <div className="flex flex-col gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <AgendaItemSkeleton key={i} />
              ))}

              <div className="h-8 w-40 bg-gray-300 rounded-full mx-auto animate-pulse mt-2" />
            </div>
          </div>

          {/* Announcement */}
          <div className="w-full bg-primary-foreground p-5 border border-primary">
            <div className="h-7 w-72 bg-gray-300 rounded animate-pulse mb-4" />

            <div className="flex flex-col gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <AnnouncementItemSkeleton key={i} />
              ))}

              <div className="h-8 w-48 bg-gray-300 rounded-full mx-auto animate-pulse mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
