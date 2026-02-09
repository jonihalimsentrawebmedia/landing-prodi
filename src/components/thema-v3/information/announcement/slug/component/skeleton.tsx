export const DetailAnnouncementTheme3Skeleton = () => {
  return (
    <div className="container py-5 animate-pulse">
      {/* Back */}
      <div className="h-5 w-28 bg-gray-200 rounded mb-6" />

      <div className="w-full flex items-start gap-x-8 lg:mt-4">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-5 w-full">
          {/* Title Box */}
          <div className="w-full py-5 bg-gray-100 p-4 mb-4 rounded">
            <div className="h-7 w-3/4 bg-gray-300 rounded mb-4" />

            <div className="grid grid-cols-2 w-fit gap-3">
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-4 w-32 bg-gray-200 rounded" />
              <div className="h-4 w-20 bg-gray-200 rounded" />
              <div className="h-4 w-28 bg-gray-200 rounded" />
            </div>
          </div>

          {/* Download Button */}
          <div className="h-10 w-44 bg-gray-300 rounded-full" />

          {/* Article paragraphs */}
          <div className="flex flex-col gap-3 mt-4">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-11/12 bg-gray-200 rounded" />
            <div className="h-4 w-10/12 bg-gray-200 rounded" />
            <div className="h-4 w-9/12 bg-gray-200 rounded" />
            <div className="h-4 w-8/12 bg-gray-200 rounded" />
          </div>

          {/* Share */}
          <div className="h-10 w-40 bg-gray-300 rounded mt-6" />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-full lg:min-w-[480px] flex flex-col gap-5">
          {/* Select */}
          <div className="h-10 w-full bg-gray-300 rounded" />

          {/* PDF Preview */}
          <div className="w-full h-[500px] lg:h-[800px] bg-gray-200 rounded" />
        </div>
      </div>

      {/* Related announcements */}
      <div className="mt-10 flex flex-col gap-6">
        <div className="h-6 w-64 bg-gray-300 rounded" />

        <div className="grid grid-cols-3 gap-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-3 border p-4 rounded">
              <div className="size-28 bg-gray-300 rounded-full mx-auto" />
              <div className="h-4 w-full bg-gray-300 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
              <div className="h-3 w-24 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
