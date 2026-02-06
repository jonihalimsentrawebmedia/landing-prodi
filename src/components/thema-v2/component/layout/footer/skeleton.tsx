export const FooterSkeleton = () => {
  return (
    <div className="w-full bg-primary p-5 max-w-[1920px] mx-auto animate-pulse">
      <div className="container items-start justify-between flex gap-5 flex-wrap">
        {/* Logo + Nama */}
        <div className="flex flex-col gap-2">
          <div className="size-10 rounded-full bg-white/30" />
          <div className="h-6 w-32 bg-white/30 rounded" />
        </div>

        {/* Kontak */}
        <div className="space-y-3">
          <div className="h-5 w-24 bg-white/30 rounded border-l-4 border-yellow-500 pl-2" />
          <div className="space-y-2 mt-4">
            <div className="h-4 w-40 bg-white/30 rounded" />
            <div className="h-4 w-36 bg-white/30 rounded" />
            <div className="h-4 w-28 bg-white/30 rounded" />
          </div>
        </div>

        {/* Alamat */}
        <div className="space-y-3 max-w-[265px]">
          <div className="h-5 w-24 bg-white/30 rounded border-l-4 border-yellow-500 pl-2" />
          <div className="h-4 w-full bg-white/30 rounded mt-4" />
          <div className="h-4 w-5/6 bg-white/30 rounded" />
        </div>

        {/* Sosial Media */}
        <div className="space-y-3">
          <div className="h-5 w-28 bg-white/30 rounded border-l-4 border-yellow-500 pl-2" />
          <div className="flex gap-2 mt-4">
            <div className="size-6 bg-white/30 rounded-full" />
            <div className="size-6 bg-white/30 rounded-full" />
            <div className="size-6 bg-white/30 rounded-full" />
            <div className="size-6 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
