export const AnnouncementSectionSkeleton = () => {
  return (
    <div className="bg-linear-to-r from-[#224093] to-primary">
      <div
        style={{
          backgroundImage: "url('/img/polabg.png')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="w-full py-5"
      >
        <div className="container animate-pulse">
          {/* Title */}
          <div className="mx-auto h-6 w-64 bg-white/30 rounded mb-6" />

          {/* List */}
          <div className="lg:grid grid-cols-4 gap-5 mt-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-3 border-b-2 border-b-white/40 pb-2.5">
                <div className="h-4 bg-white/30 rounded w-full" />
                <div className="h-4 bg-white/30 rounded w-5/6" />
                <div className="h-4 bg-white/30 rounded w-3/4" />
                <div className="h-3 bg-white/20 rounded w-1/3 mt-2" />
              </div>
            ))}
          </div>

          {/* Link */}
          <div className="flex justify-end mt-6">
            <div className="h-4 w-40 bg-white/30 rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}

export const AgendaInformationSkeleton = () => {
  return (
    <div className="py-10 bg-gray-100 w-full mx-auto max-w-[1920px]">
      <div className="container animate-pulse">
        {/* Title */}
        <div className="mx-auto h-6 w-56 bg-gray-300 rounded mb-6" />

        {/* List */}
        <div className="grid grid-cols-4 mt-6 gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white shadow p-2 rounded border-l-4 border-l-gray-300 rounded-l-none"
            >
              {/* Date block */}
              <div className="text-center w-18 pr-1.5 border-r border-r-gray-200 flex flex-col items-center gap-2">
                <div className="h-6 w-8 bg-gray-300 rounded" />
                <div className="h-4 w-12 bg-gray-200 rounded" />
              </div>

              {/* Content block */}
              <div className="flex flex-col gap-2 w-full">
                <div className="h-4 w-full bg-gray-300 rounded" />
                <div className="h-4 w-5/6 bg-gray-300 rounded" />
                <div className="h-3 w-1/2 bg-gray-200 rounded mt-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="flex justify-end mt-6">
          <div className="h-4 w-40 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  )
}

export const PromotionInformationSkeleton = () => {
  return (
    <div className="bg-[#F5F5F5] w-full max-w-[1920px] mx-auto animate-pulse">
      <div
        style={{
          backgroundImage: "url('/img/pola2.png')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="w-full py-5"
      >
        <div className="container">
          {/* Title */}
          <div className="flex justify-center mb-6">
            <div className="h-7 w-40 bg-gray-300 rounded" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-5 mt-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="p-4 bg-white rounded flex items-center gap-2.5">
                {/* Image */}
                <div className="min-w-[233px] w-full h-[175px] bg-gray-200 rounded shadow" />

                {/* Text */}
                <div className="flex flex-col gap-2 w-full">
                  <div className="h-5 w-3/4 bg-gray-200 rounded" />
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-5/6 bg-gray-200 rounded" />
                  <div className="h-4 w-2/3 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-end mt-5">
            <div className="h-5 w-40 bg-gray-300 rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}
