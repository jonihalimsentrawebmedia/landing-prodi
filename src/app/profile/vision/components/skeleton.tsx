export const SkeletonVision = () => {
  return (
    <div className="flex flex-col gap-5 animate-pulse">
      {/* Visi */}
      <div className="h-8 w-32 bg-gray-200 rounded" />
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-5/6 bg-gray-200 rounded" />
        <div className="h-4 w-4/6 bg-gray-200 rounded" />
      </div>

      {/* Misi */}
      <div className="h-8 w-32 bg-gray-200 rounded mt-4" />
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-11/12 bg-gray-200 rounded" />
        <div className="h-4 w-10/12 bg-gray-200 rounded" />
        <div className="h-4 w-9/12 bg-gray-200 rounded" />
      </div>

      {/* Tujuan */}
      <div className="h-8 w-32 bg-gray-200 rounded mt-4" />
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-5/6 bg-gray-200 rounded" />
        <div className="h-4 w-4/6 bg-gray-200 rounded" />
        <div className="h-4 w-3/6 bg-gray-200 rounded" />
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between mt-4">
        <div className="h-10 w-28 bg-gray-200 rounded-full" />
        <div className="h-10 w-44 bg-gray-200 rounded-full" />
      </div>
    </div>
  )
}
