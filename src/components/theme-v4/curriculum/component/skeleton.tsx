export const SubjectRowSkeleton = () => (
  <>
    <div className="h-4 bg-gray-200 rounded m-1.5" />
    <div className="h-4 bg-gray-200 rounded m-1.5 w-12 justify-self-end" />
  </>
)

export const SemesterTableSkeleton = () => (
  <div className="grid grid-cols-[1fr_100px] w-full border rounded-t animate-pulse">
    <div className="col-span-2 h-8 bg-primary/40 rounded-t" />

    {Array.from({ length: 6 }).map((_, i) => (
      <SubjectRowSkeleton key={i} />
    ))}

    <div className="h-5 bg-primary/20 m-1.5 rounded" />
    <div className="h-5 bg-primary/20 m-1.5 rounded w-12 justify-self-end" />
  </div>
)

export const TabsCurriculumSkeleton = () => {
  return (
    <div className="container py-5">
      {/* Filter */}
      <div className="h-10 w-48 bg-gray-300 rounded mb-5 animate-pulse" />
      
      {/* Tabs */}
      <div className="flex gap-2 border-b pb-2 mb-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-8 w-24 bg-gray-300 rounded animate-pulse" />
        ))}
      </div>
      
      {/* Tables */}
      <div className="flex justify-start gap-5 w-full">
        <SemesterTableSkeleton />
        <SemesterTableSkeleton />
      </div>
    </div>
  )
}
