export const FooterSkeleton = () => {
  return (
    <div className="flex flex-col gap-1.5 lg:max-w-[400px] w-full animate-pulse">
      {/* Logo */}
      <div className="size-14 bg-gray-300 rounded-md" />

      {/* Title */}
      <div className="h-6 bg-gray-300 rounded w-3/4" />

      {/* Subtitle */}
      <div className="h-4 bg-gray-300 rounded w-1/2" />

      {/* Address */}
      <div className="h-4 bg-gray-200 rounded w-full" />
    </div>
  )
}
