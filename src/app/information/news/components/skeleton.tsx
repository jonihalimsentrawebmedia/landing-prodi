import { Skeleton } from '@/components/ui/skeleton'

export const SkeletonCategoryNews = () => {
  return (
    <ul className="flex flex-nowrap gap-5 overflow-x-auto mt-5">
      {/* Item "Semua" skeleton */}
      <li className="min-w-fit">
        <Skeleton className="h-9 w-20 rounded" />
      </li>

      {/* Skeleton untuk kategori lainnya */}
      {Array.from({ length: 5 }).map((_, index) => (
        <li key={index} className="min-w-fit">
          <Skeleton className="h-9 w-24 rounded" />
        </li>
      ))}
    </ul>
  )
}

export const CardNewsColSkeleton = () => {
  return (
    <div className="flex flex-col justify-center gap-2 bg-white animate-pulse">
      {/* Gambar skeleton */}
      <div className={'w-full h-[300px]'}>
        <Skeleton className="w-full h-full rounded-none" />
      </div>

      {/* Konten skeleton */}
      <div className="p-1 px-2.5 space-y-3">
        {/* Judul skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-7 w-full" />
          <Skeleton className="h-7 w-4/5" />
        </div>

        {/* Tanggal skeleton */}
        <div className="flex items-center gap-1">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>

        {/* Isi berita skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-10/12" />
        </div>
      </div>
    </div>
  )
}
