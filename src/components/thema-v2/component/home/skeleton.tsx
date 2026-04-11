import { clsx } from 'clsx'
import { Skeleton } from '@/components/ui/skeleton'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

export const JumbotronSkeleton = () => {
  return (
    <div className="w-full h-[540px] relative overflow-hidden bg-gray-300">
      {/* shimmer bg */}
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300" />

      {/* overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col gap-6 items-center">
          <div className="h-5 w-40 bg-white/40 rounded" />
          <div className="h-10 w-96 bg-white/40 rounded" />
          <div className="h-12 w-52 bg-white/40 rounded-full mt-6" />
        </div>
      </div>
    </div>
  )
}

export const NewsCardSkeleton = ({ wide = false }: { wide?: boolean }) => {
  return (
    <div
      className={clsx(
        wide ? 'col-span-2' : 'col-span-1',
        'bg-white shadow rounded-md overflow-hidden'
      )}
    >
      <div className="w-full h-[240px] bg-gray-200 animate-pulse" />
      <div className="p-3 flex flex-col gap-2">
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
        <div className="h-3 w-1/3 bg-gray-200 rounded animate-pulse" />
        <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
        <div className="h-3 w-5/6 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  )
}

export const TopNewsSkeleton = () => {
  return (
    <div className="w-full bg-gray-100 dark:bg-primary max-w-[1920px] mx-auto pb-5">
      <div className="container flex flex-col gap-5 py-5">
        {/* Title */}
        <div className="flex flex-col items-center gap-2">
          <Skeleton className="h-6 w-[250px]" />
          <Skeleton className="h-1 w-[120px]" />
        </div>

        {/* MOBILE Carousel */}
        <Carousel className="block md:hidden">
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, i) => (
              <CarouselItem key={i} className="basis-5/6">
                <div className="shadow border bg-white dark:bg-primary rounded overflow-hidden">
                  {/* Image */}
                  <Skeleton className="w-full h-[200px]" />

                  {/* Content */}
                  <div className="p-4 flex flex-col gap-3">
                    {/* Badge */}
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-[110px] rounded-full" />
                      <Skeleton className="h-6 w-[90px] rounded-full" />
                    </div>

                    {/* Title */}
                    <Skeleton className="h-5 w-[90%]" />

                    {/* Description */}
                    <div className="flex flex-col gap-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-[95%]" />
                      <Skeleton className="h-4 w-[80%]" />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* DESKTOP Carousel */}
        <Carousel className="hidden md:block" opts={{ slidesToScroll: 3, align: 'start' }}>
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, i) => (
              <CarouselItem key={i} className="basis-1/4">
                <div className="col-span-1 shadow border bg-white dark:bg-primary">
                  {/* Image */}
                  <Skeleton className="w-full h-[240px]" />

                  <div className="p-4 flex flex-col gap-3">
                    {/* Badge */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <Skeleton className="h-6 w-[120px] rounded-full" />
                      <Skeleton className="h-6 w-[100px] rounded-full" />
                    </div>

                    {/* Title */}
                    <Skeleton className="h-5 w-[90%]" />

                    {/* Content */}
                    <div className="flex flex-col gap-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-[95%]" />
                      <Skeleton className="h-4 w-[80%]" />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Footer Link */}
        <div className="flex items-center justify-end">
          <Skeleton className="h-5 w-[200px]" />
        </div>
      </div>
    </div>
  )
}

export const AgendaAnnouncementSkeleton = () => {
  return (
    <div className="relative mx-auto w-full max-w-[1920px] h-[470px] overflow-hidden">
      {/* fake background image */}
      <div className="absolute inset-0 bg-gray-300 animate-pulse" />

      {/* overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary to-[#24429799]" />

      <div className="container relative flex items-start gap-x-8 py-8">
        {/* LEFT — Agenda */}
        <div className="w-5/12 p-4 bg-blue-50 flex flex-col gap-5 rounded">
          <div className="h-6 w-28 bg-gray-200 rounded animate-pulse" />

          <ul className="flex flex-col gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <li key={i} className="flex gap-3 items-center">
                <div className="w-16 h-16 bg-gray-200 rounded animate-pulse" />
                <div className="flex flex-col gap-2 w-full">
                  <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse" />
                </div>
              </li>
            ))}
          </ul>

          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mt-2" />
        </div>

        {/* RIGHT — Announcement */}
        <div className="w-7/12 p-4 border border-white flex flex-col gap-5 rounded">
          <div className="h-6 w-40 bg-white/40 rounded animate-pulse" />

          <ul className="flex flex-col gap-4 mt-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <li key={i} className="flex flex-col gap-2">
                <div className="h-4 w-2/3 bg-white/40 rounded animate-pulse" />
                <div className="h-3 w-1/3 bg-white/30 rounded animate-pulse" />
              </li>
            ))}
          </ul>

          <div className="h-4 w-40 bg-white/40 rounded animate-pulse mt-3" />
        </div>
      </div>
    </div>
  )
}

export const AboutStudyProgramSkeleton = () => {
  return (
    <div className="bg-gray-100 w-full mx-auto max-w-[1920px] py-10">
      <div className="container">
        {/* Title */}
        <div className="h-7 w-80 bg-gray-200 rounded animate-pulse" />

        <div className="flex items-start gap-x-5 mt-5 w-full">
          {/* Image Carousel Skeleton */}
          <div className="w-[442px] lg:min-w-[442px] h-[265px] bg-gray-200 rounded-md animate-pulse" />

          {/* Content Skeleton */}
          <div className="flex flex-col gap-4 w-full">
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-11/12 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-10/12 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-9/12 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-8/12 bg-gray-200 rounded animate-pulse" />

            <div className="h-5 w-52 bg-gray-200 rounded animate-pulse mt-6" />
          </div>
        </div>
      </div>
    </div>
  )
}
