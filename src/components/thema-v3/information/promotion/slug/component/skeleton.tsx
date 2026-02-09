export const DetailPromotionTheme3Skeleton = () => {
  return (
    <div className="container py-5 animate-pulse flex flex-col gap-6">
      {/* Back */}
      <div className="h-5 w-28 bg-gray-200 rounded" />

      <div className="w-full flex items-start gap-x-8 lg:mt-4">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-5 w-full">
          {/* Header */}
          <div className="w-full py-5 bg-gray-100 p-4 rounded flex flex-col gap-4">
            <div className="h-7 w-3/4 bg-gray-300 rounded" />

            <div className="grid grid-cols-2 gap-3 w-full max-w-[420px]">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded" />
              ))}
            </div>
          </div>

          {/* Main Image */}
          <div className="w-full h-[555px] bg-gray-300 rounded" />

          {/* Share */}
          <div className="h-10 w-44 bg-gray-300 rounded" />

          {/* Content paragraphs */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-4 w-full bg-gray-200 rounded" />
          ))}
        </div>

        {/* RIGHT SIDE - Other promotions */}
        <div className="flex flex-col gap-4 w-[335px] min-w-[335px]">
          <div className="h-6 w-40 bg-gray-300 rounded" />

          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border rounded overflow-hidden">
              <div className="w-full h-[250px] bg-gray-300" />
              <div className="p-2.5 flex flex-col gap-2">
                <div className="h-4 w-5/6 bg-gray-300 rounded" />
                <div className="h-4 w-3/4 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
