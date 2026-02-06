export const VideoSectionSkeleton = () => {
  return (
    <div className="container bg-white mt-2 animate-pulse">
      {/* Search */}
      <div className="h-10 w-full bg-gray-200 rounded mb-4" />

      {/* Grid */}
      <div className="py-4 grid lg:grid-cols-3 gap-5">
        {[...Array(6)].map((_, i) => (
          <div key={i}>
            {/* Thumbnail */}
            <div className="relative">
              <div className="w-full h-[240px] bg-gray-300 rounded" />

              {/* fake play icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-gray-200" />
              </div>
            </div>

            {/* Title */}
            <div className="mt-2 h-4 w-4/5 bg-gray-300 rounded" />
            <div className="mt-1 h-4 w-2/3 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}

export const AlbumListSkeleton = () => {
  return (
    <div className="lg:container mt-2 animate-pulse">
      {/* Search */}
      <div className="h-10 w-full bg-gray-200 rounded mb-4" />

      {/* Grid Album */}
      <div className="grid lg:grid-cols-3 gap-5">
        {[...Array(6)].map((_, i) => (
          <div key={i}>
            <div className="w-full h-[240px] bg-gray-300 rounded" />
            <div className="mt-2 h-4 w-3/4 bg-gray-300 rounded" />
            <div className="mt-1 h-4 w-1/2 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}

export const AlbumPhotoSkeleton = () => {
  return (
    <div className="lg:container mt-2 animate-pulse">
      {/* Header Back */}
      <div className="flex items-center gap-2 mb-4">
        <div className="h-8 w-8 rounded-full bg-gray-300" />
        <div className="h-5 w-40 bg-gray-300 rounded" />
      </div>

      {/* Grid Photo */}
      <div className="lg:grid lg:grid-cols-3 gap-5 flex flex-col">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-full h-[200px] lg:h-[240px] bg-gray-300 rounded" />
        ))}
      </div>
    </div>
  )
}
