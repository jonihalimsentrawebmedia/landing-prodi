export const AgendaSectionTheme4Skeleton = () => {
  return (
    <div className="dark:bg-primary/50">
      <div
        className="w-full py-5 lg:py-10"
        style={{
          backgroundImage: "url('/img/grenbg.png')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="lg:grid lg:grid-cols-4 gap-y-5 lg:gap-5 container flex flex-col animate-pulse">
          
          {/* Header */}
          <div className="col-span-4 flex flex-col gap-3">
            <div className="h-4 w-20 bg-gray-200 rounded" />
            <div className="h-7 w-56 bg-gray-200 rounded" />
            <div className="h-10 w-full bg-gray-200 rounded-full" />
            
            {/* Chip year */}
            <div className="mt-4 flex gap-2 flex-wrap">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-8 w-16 bg-gray-200 rounded-full" />
              ))}
            </div>
          </div>
          
          {/* Cards */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="border bg-white dark:bg-primary rounded overflow-hidden">
              
              {/* Image */}
              <div className="w-full h-[250px] bg-gray-200" />
              
              {/* Content */}
              <div className="px-2.5 p-2 flex flex-col gap-2">
                <div className="h-4 w-5/6 bg-gray-200 rounded" />
                <div className="h-4 w-2/3 bg-gray-200 rounded" />
                <div className="h-4 w-24 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
