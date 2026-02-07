export const NewsDetailSectionSkeleton = () => {
  return (
    <div className="container py-5 flex flex-col gap-4 animate-pulse">
      {/* Back button */}
      <div className="h-5 w-24 bg-gray-200 rounded" />
      
      <div className="flex items-start gap-6">
        {/* LEFT CONTENT */}
        <div className="w-full flex flex-col gap-4">
          {/* Title + meta */}
          <div className="w-full py-5 bg-gray-100 flex flex-col gap-3 px-4">
            <div className="h-6 w-3/4 bg-gray-300 rounded" />
            <div className="grid grid-cols-2 gap-2 w-1/2">
              <div className="h-4 bg-gray-300 rounded" />
              <div className="h-4 bg-gray-300 rounded" />
              <div className="h-4 bg-gray-300 rounded" />
              <div className="h-4 bg-gray-300 rounded" />
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full h-[555px] bg-gray-300 rounded" />
          
          {/* Share buttons */}
          <div className="flex gap-3">
            <div className="h-8 w-20 bg-gray-300 rounded" />
            <div className="h-8 w-20 bg-gray-300 rounded" />
            <div className="h-8 w-20 bg-gray-300 rounded" />
          </div>
          
          {/* Article paragraphs */}
          <div className="flex flex-col gap-3">
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-4 bg-gray-200 rounded w-4/6" />
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded w-3/6" />
          </div>
        </div>
        
        {/* RIGHT SIDEBAR */}
        <div className="w-full max-w-[335px] flex flex-col gap-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-3">
              <div className="w-[110px] h-[90px] bg-gray-300 rounded" />
              <div className="flex flex-col gap-2 w-full">
                <div className="h-4 bg-gray-300 rounded w-5/6" />
                <div className="h-4 bg-gray-200 rounded w-4/6" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
