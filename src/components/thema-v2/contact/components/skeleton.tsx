export const ContactSectionSkeleton = () => {
  return (
    <div className="w-full p-5 bg-white mt-8 animate-pulse">
      {/* TITLE */}
      <div className="h-6 w-40 bg-gray-300 rounded mb-5" />

      {/* FORM + CONTACT DETAIL */}
      <div className="flex gap-5 flex-col lg:flex-row">
        {/* FORM SKELETON */}
        <div className="flex-1 flex flex-col gap-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-10 bg-gray-200 rounded" />
          ))}
          <div className="h-24 bg-gray-200 rounded" />
          <div className="h-10 w-32 bg-gray-300 rounded" />
        </div>

        {/* CONTACT DETAIL SKELETON */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="h-32 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="mt-10 container w-full flex flex-col items-center mx-auto">
        <div className="h-7 w-60 bg-gray-300 rounded mb-4" />

        {/* CHIP CATEGORY */}
        <div className="flex gap-2 mb-5 flex-wrap justify-center">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-8 w-24 bg-gray-200 rounded-full" />
          ))}
        </div>

        {/* ACCORDION ITEMS */}
        <div className="w-full flex flex-col gap-2.5">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-full border rounded">
              <div className="h-12 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const RegistrationSectionSkeleton = () => {
  return (
    <div className="flex flex-row animate-pulse">
      {/* SIDE NAV */}
      <div className="flex flex-col w-[200px] bg-primary-foreground">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-l-4 border-l-gray-300 p-2"
          >
            <div className="h-4 w-32 bg-gray-300 rounded" />
            <div className="h-4 w-4 bg-gray-300 rounded" />
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="flex-1 bg-white px-5 py-4">
        <div className="space-y-3">
          <div className="h-5 w-2/3 bg-gray-300 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-3/4 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  )
}
