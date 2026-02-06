export const AboutDetailSkeleton = () => {
  return (
    <div className={'w-full'}>
      <div className="h-7 w-full bg-gray-200 rounded animate-pulse" />
      
      <div className="rounded-lg w-full p-4 mt-2 bg-gradient-to-r from-primary to-[#004080]">
        <div className="h-6 w-full bg-white/40 rounded animate-pulse" />
        <div className="h-4 w-full bg-white/30 rounded animate-pulse mt-2" />
      </div>

      {/* Carousel + Email */}
      <div className="w-full lg:w-3/4 mt-5">
        {/* Image skeleton */}
        <div className="w-full h-[250px] lg:h-[350px] bg-gray-200 rounded animate-pulse" />

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-2 w-2 rounded-full bg-gray-300 animate-pulse" />
          ))}
        </div>

        {/* Email row */}
        <div className="flex items-center justify-between mt-2">
          <div className="h-3 w-64 bg-gray-200 rounded animate-pulse" />
          <div className="h-8 w-40 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="mt-5 flex flex-col gap-3">
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-11/12 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-10/12 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-9/12 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-8/12 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-7/12 bg-gray-200 rounded animate-pulse" />
      </div>

      {/* Button */}
      <div className="flex justify-end mt-5">
        <div className="h-10 w-40 bg-gray-200 rounded-full animate-pulse" />
      </div>
    </div>
  )
}
