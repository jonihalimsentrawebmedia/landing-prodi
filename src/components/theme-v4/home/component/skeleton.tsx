export const NewsLandingSkeleton = () => {
  return (
    <div className="w-full mx-auto max-w-[1920px] relative lg:h-[552px] flex items-center justify-center animate-pulse">
      {/* Background banner skeleton */}
      <div className="absolute w-full h-[552px] bg-gray-300" />

      <div className="container py-10 relative z-20">
        {/* Title */}
        <div className="h-8 w-64 bg-gray-200 rounded mb-6" />

        {/* News Grid */}
        <div className="mt-5 grid grid-cols-4 gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="w-full rounded overflow-hidden bg-white">
              {/* Image */}
              <div className="w-full h-[230px] bg-primary" />

              {/* Text */}
              <div className="p-2.5 flex flex-col gap-3">
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-5/6 bg-gray-200 rounded" />
                <div className="h-3 w-24 bg-gray-200 rounded mt-2" />
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-6 flex justify-center">
          <div className="h-10 w-48 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export const AgendaAnnouncementSkeleton = () => {
  return (
    <div className="bg-primary w-full h-full py-10 mx-auto max-w-[1920px] animate-pulse">
      <div className="container flex items-start">
        {/* LEFT — Agenda */}
        <div className="w-1/2 pr-5 border-r-[0.5px]">
          <div className="bg-white rounded-md p-6">
            {/* Title */}
            <div className="h-6 w-32 mx-auto bg-gray-200 rounded mb-6" />

            <div className="flex flex-col gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-3">
                  {/* Image */}
                  <div className="w-[108px] min-w-[108px] h-[136px] bg-gray-300 rounded" />

                  {/* Text */}
                  <div className="flex flex-col gap-2 w-full">
                    <div className="h-4 w-full bg-gray-200 rounded" />
                    <div className="h-4 w-5/6 bg-gray-200 rounded" />
                    <div className="h-3 w-24 bg-gray-200 rounded mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Announcement */}
        <div className="w-1/2 pl-5 border-l-[0.5px]">
          <div className="bg-white rounded-md p-6">
            {/* Title */}
            <div className="h-6 w-40 mx-auto bg-gray-200 rounded mb-6" />

            <div className="flex flex-col gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-3">
                  {/* Logo */}
                  <div className="w-[136px] h-[136px] bg-gray-300 rounded" />

                  {/* Text */}
                  <div className="flex flex-col gap-2 w-full">
                    <div className="h-4 w-full bg-gray-200 rounded" />
                    <div className="h-3 w-28 bg-gray-200 rounded mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const AboutProdiSkeleton = () => {
  return (
    <div className="w-full mx-auto max-w-[1920px] relative animate-pulse">
      {/* CONTENT OVERLAY */}
      <div className="container absolute z-10 flex items-center gap-x-5 transform -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2">
        {/* LEFT EMPTY SPACE (ngikut layout asli) */}
        <div className="max-w-1/2 w-full" />

        {/* RIGHT TEXT AREA */}
        <div className="max-w-1/2 w-full pl-5">
          {/* Title */}
          <div className="h-8 w-64 bg-gray-200 rounded mb-6" />

          {/* Paragraph lines */}
          <div className="flex flex-col gap-3 mt-7">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-4/6 bg-gray-200 rounded" />
          </div>

          {/* Link */}
          <div className="h-4 w-48 bg-gray-200 rounded mt-6" />
        </div>
      </div>

      {/* IMAGE / CAROUSEL SIDE */}
      <div className="w-1/2 lg:min-h-[480px] bg-gray-300" />
    </div>
  )
}

export const OurLecturerSkeleton = () => {
  return (
    <div className="w-full h-full mx-auto max-w-[1920px] relative animate-pulse">
      
      {/* background image area */}
      <div className="absolute top-0 left-0 w-full h-[568px] bg-gray-300" />
      
      {/* dark overlay */}
      <div className="absolute top-0 w-full h-full bg-black/40 z-10" />
      
      <div className="container relative z-20 py-10">
        
        {/* Title */}
        <div className="h-7 w-48 bg-gray-200 rounded mx-auto mb-8" />
        
        {/* Carousel cards */}
        <div className="flex gap-5 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="basis-1/5">
              <div className="bg-white p-1 rounded-lg">
                {/* image */}
                <div className="w-[245px] h-[360px] bg-gray-200 rounded-lg" />
                {/* name */}
                <div className="h-6 bg-gray-200 rounded mt-2 w-4/5 mx-auto" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Button */}
        <div className="flex justify-center mt-8">
          <div className="h-10 w-44 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  )
}
