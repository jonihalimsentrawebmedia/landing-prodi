export const AgendaDetailTheme3Skeleton = () => {
  return (
    <div className="container py-5 animate-pulse flex flex-col gap-6">
      {/* Back */}
      <div className="h-5 w-28 bg-gray-200 rounded" />

      <div className="w-full flex items-start gap-x-8 lg:mt-4">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-5 w-full">
          {/* Header box */}
          <div className="w-full py-5 bg-gray-100 p-4 rounded flex flex-col gap-4">
            <div className="h-7 w-3/4 bg-gray-300 rounded" />

            <div className="grid grid-cols-2 gap-3 w-full max-w-[400px]">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded" />
              ))}
            </div>
          </div>

          {/* Content paragraph blocks */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-4 w-full bg-gray-200 rounded" />
          ))}

          {/* Share section */}
          <div className="h-10 w-40 bg-gray-300 rounded mt-2" />
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:max-w-[480px] lg:min-w-[480px]">
          <div className="w-full h-[640px] bg-gray-300 rounded" />
        </div>
      </div>

      {/* Related agenda */}
      <div className="flex flex-col gap-6 mt-6">
        <div className="h-6 w-56 bg-gray-300 rounded" />

        <div className="grid grid-cols-3 gap-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col border rounded overflow-hidden">
              <div className="w-full h-[250px] bg-gray-300" />
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
