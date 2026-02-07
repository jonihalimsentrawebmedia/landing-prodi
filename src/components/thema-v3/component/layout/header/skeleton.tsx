export const HeaderSkeleton = () => {
  return (
    <div className="bg-primary/90 w-full max-w-[1920px] p-2">
      <div className="container flex items-center justify-between">
        <div className="animate-pulse h-7 w-40 rounded-md bg-primary-foreground/40" />
        <div className="animate-pulse h-6 w-16 rounded-full bg-primary-foreground/40" />
      </div>
    </div>
  )
}

export const ListMenuSkeleton = () => {
  return (
    <div className="bg-primary py-2 w-full max-w-[1920px]">
      <div className="container flex items-center justify-between">
        {/* Left: logo + nama */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white/30 animate-pulse" />
          <div className="h-6 w-40 rounded-md bg-white/30 animate-pulse" />
        </div>

        {/* Right: menu items */}
        <div className="hidden lg:flex items-center gap-x-5">
          <div className="h-6 w-16 rounded-full bg-white/30 animate-pulse" />
          <div className="h-6 w-20 rounded-full bg-white/30 animate-pulse" />
          <div className="h-6 w-14 rounded-full bg-white/30 animate-pulse" />
          <div className="h-6 w-18 rounded-full bg-white/30 animate-pulse" />
        </div>
      </div>
    </div>
  )
}
