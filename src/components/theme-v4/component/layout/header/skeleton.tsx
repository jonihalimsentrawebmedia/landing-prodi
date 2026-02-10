'use client'

export const HeaderLayoutTheme4Skeleton = () => {
  return (
    <div className="fixed w-full z-[60] animate-pulse">
      <div className="w-full mx-auto max-w-[1920px] bg-white drop-shadow py-2 relative overflow-hidden">
        {/* background primary area */}
        <div className="absolute h-full w-full lg:w-2/3 lg:rounded-bl-3xl bg-gray-200 top-0 right-0 z-[1]" />
        
        <div className="container relative z-[2] flex items-center justify-between gap-x-5">
          {/* LEFT: Logo + Text */}
          <div className="flex items-center gap-2">
            <div className="size-10 rounded-full bg-gray-300" />
            <div className="space-y-2">
              <div className="h-4 w-24 bg-gray-300 rounded" />
              <div className="h-3 w-40 bg-gray-200 rounded" />
            </div>
          </div>
          
          {/* RIGHT MOBILE ICONS */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="size-8 bg-gray-300 rounded" />
            <div className="size-8 bg-gray-300 rounded" />
          </div>
          
          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-x-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i} className="h-4 w-16 bg-gray-300 rounded" />
            ))}
            <li className="size-8 bg-gray-300 rounded" />
          </ul>
        </div>
        
        {/* shimmer overlay */}
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>
      
      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
}
