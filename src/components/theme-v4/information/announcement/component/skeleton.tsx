export const SkeletonListData = () => (
  <div className="bg-white dark:bg-primary/50">
    <div
      className="w-full py-10"
      style={{
        backgroundImage: "url('/img/grenbg.png')",
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-5 container animate-pulse">
        {/* Back + Title */}
        <div className="col-span-4 space-y-3">
          <div className="h-4 w-20 bg-gray-200 rounded" />
          <div className="h-7 w-64 bg-gray-200 rounded" />
          <div className="h-10 w-full bg-gray-200 rounded-full" />
        </div>

        {/* Chip year skeleton */}
        <div className="col-span-4 flex gap-2 flex-wrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-8 w-16 bg-gray-200 rounded-full" />
          ))}
        </div>

        {/* Cards */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-primary border p-5 rounded w-full flex flex-col gap-3"
          >
            {/* Logo */}
            <div className="size-[120px] bg-gray-200 rounded mx-auto" />

            {/* Title */}
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
            <div className="h-4 w-2/3 bg-gray-200 rounded" />

            {/* Date */}
            <div className="h-4 w-24 bg-gray-200 rounded mt-2" />
          </div>
        ))}
      </div>
    </div>
  </div>
)
