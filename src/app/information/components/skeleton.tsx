export const SkeletonCardPromotion = () => {
  return (
    <div className="animate-pulse">
      <div className="w-full h-[200px] bg-gray-300 rounded-sm" />
      <div className="bg-white p-2 space-y-2 pb-4">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
      </div>
    </div>
  )
}

export const SkeletonNewsCol = () => {
  return (
    <div className="animate-pulse">
      <div className="w-full h-[280px] bg-gray-300 rounded-md" />
      <div className="bg-white p-4 space-y-3">
        <div className="h-5 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-3 bg-gray-200 rounded w-1/3 mt-2" />
      </div>
    </div>
  )
}

export const SkeletonNewsRow = () => {
  return (
    <div className="animate-pulse flex gap-4">
      <div className="w-[120px] h-[80px] bg-gray-300 rounded-md shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-5/6" />
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-2/3" />
      </div>
    </div>
  )
}