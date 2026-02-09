export const AgendaSectionTheme3Skeleton = () => {
  return (
    <div className="container py-5 flex flex-col gap-4 animate-pulse">
      {/* Back */}
      <div className="h-5 w-28 bg-gray-200 rounded" />
      
      {/* Title */}
      <div className="h-7 w-64 bg-gray-300 rounded" />
      
      {/* Search */}
      <div className="h-11 w-full bg-gray-200 rounded-full mt-2" />
      
      <div className="flex items-start gap-5 mt-5">
        {/* Sidebar filter */}
        <div className="w-full lg:max-w-[335px] border rounded p-3 flex flex-col gap-4">
          <div className="h-5 w-32 bg-gray-300 rounded" />
          <div className="h-[2px] w-full bg-gray-200" />
          
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="size-4 rounded-full bg-gray-300" />
              <div className="h-4 w-20 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
        
        {/* Agenda cards */}
        <div className="grid grid-cols-3 gap-5 w-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col border rounded overflow-hidden">
              <div className="w-full h-[220px] bg-gray-300" />
              
              <div className="p-2.5 flex flex-col gap-2">
                <div className="h-4 w-5/6 bg-gray-300 rounded" />
                <div className="h-4 w-3/4 bg-gray-200 rounded" />
                <div className="h-4 w-2/3 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
