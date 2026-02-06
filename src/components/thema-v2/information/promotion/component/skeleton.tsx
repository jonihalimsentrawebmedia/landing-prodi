export const SectionPromotionSkeleton = () => {
  return (
    <div className="container py-5 animate-pulse">
      <div className="lg:grid lg:grid-cols-4 gap-5 flex flex-col">
        {/* Header */}
        <div className="col-span-4">
          <div className="h-5 w-24 bg-gray-300 rounded mb-3" />
          <div className="h-7 w-64 bg-gray-300 rounded mb-4" />
          <div className="h-10 w-full bg-gray-200 rounded-full" />
        </div>

        {/* Cards */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border rounded overflow-hidden">
            {/* Image */}
            <div className="w-full h-[250px] bg-gray-200" />

            {/* Content */}
            <div className="bg-white p-2.5 flex flex-col gap-2">
              <div className="h-5 w-3/4 bg-gray-200 rounded" />
              <div className="h-4 w-32 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
