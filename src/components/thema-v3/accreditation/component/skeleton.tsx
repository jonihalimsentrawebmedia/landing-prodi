export const AccreditationSkeleton = () => {
  return (
    <>
      <div className="container py-5 animate-pulse">
        <div className="h-8 w-48 bg-gray-200 rounded mb-5" />

        <div className="grid lg:grid-cols-2 gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border rounded-lg p-4 space-y-4">
              {/* Image */}
              <div className="w-full lg:h-[425px] h-[260px] bg-gray-200 rounded" />

              {/* Text rows */}
              <div className="space-y-2">
                <div className="h-4 w-28 bg-gray-200 rounded" />
                <div className="h-5 w-32 bg-gray-200 rounded" />

                <div className="h-4 w-36 bg-gray-200 rounded mt-3" />
                <div className="h-5 w-40 bg-gray-200 rounded" />

                <div className="h-4 w-36 bg-gray-200 rounded mt-3" />
                <div className="h-5 w-48 bg-gray-200 rounded" />

                <div className="h-4 w-32 bg-gray-200 rounded mt-3" />
                <div className="h-5 w-56 bg-gray-200 rounded" />
              </div>

              {/* Button */}
              <div className="h-10 w-36 bg-gray-200 rounded mt-4" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
